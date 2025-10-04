// import React, { createContext, useState } from 'react';

// export const UserContext = createContext({ currentUserId: null, setCurrentUserId: () => { } });

// export function UserProvider({ children }) {
//   const [currentUserId, setCurrentUserId] = useState(null);
//   return (
//     <UserContext.Provider value={{ currentUserId, setCurrentUserId }}>
//       {children}
//     </UserContext.Provider>
//   );
// }


// v2
import React, { createContext, useReducer, useEffect, useContext } from 'react';
import axios from 'axios';

// --- Initial State ---
const storedUser = JSON.parse(localStorage.getItem('user'));

const INITIAL_STATE = {
  user: storedUser || null,
  isLoggedIn: !!storedUser,
  token: storedUser ? storedUser.token : null,
  loading: false,
  error: null,
};

// --- Reducer ---
const AuthReducer = (state, action) => {
  switch (action.type) {
    case 'AUTH_START':
      return { ...state, loading: true, error: null };

    case 'AUTH_SUCCESS':
      return {
        user: action.payload,
        isLoggedIn: true,
        token: action.payload.token,
        loading: false,
        error: null,
      };

    case 'AUTH_FAILURE':
      return {
        user: null,
        isLoggedIn: false,
        token: null,
        loading: false,
        error: action.payload,
      };

    case 'LOGOUT':
      return {
        user: null,
        isLoggedIn: false,
        token: null,
        loading: false,
        error: null,
      };

    default:
      return state;
  }
};

// --- Context ---
export const UserContext = createContext(INITIAL_STATE);
export const useAuth = () => useContext(UserContext);

// --- Provider ---
export function UserProvider({ children }) {
  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);
  const API_BASE_URL = '/api/auth';

  // --- Login ---
  const login = async (credentials) => {
    dispatch({ type: 'AUTH_START' });
    try {
      const res = await axios.post(`${API_BASE_URL}/login`, credentials);
      localStorage.setItem('user', JSON.stringify(res.data));
      dispatch({ type: 'AUTH_SUCCESS', payload: res.data });
      return res.data;
    } catch (err) {
      const errorMsg = err.response?.data?.message || 'Login failed.';
      dispatch({ type: 'AUTH_FAILURE', payload: errorMsg });
      throw new Error(errorMsg);
    }
  };

  // --- Signup ---
  const signup = async (userData) => {
    dispatch({ type: 'AUTH_START' });
    try {
      const res = await axios.post(`${API_BASE_URL}/signup`, userData);
      localStorage.setItem('user', JSON.stringify(res.data));
      dispatch({ type: 'AUTH_SUCCESS', payload: res.data });
      return res.data;
    } catch (err) {
      const errorMsg = err.response?.data?.message || 'Signup failed.';
      dispatch({ type: 'AUTH_FAILURE', payload: errorMsg });
      throw new Error(errorMsg);
    }
  };

  // --- Logout ---
  const logout = () => {
    localStorage.removeItem('user');
    dispatch({ type: 'LOGOUT' });
  };

  // --- Fetch Latest User Profile ---
  const fetchUserProfile = async () => {
    if (!state.token) return;
    try {
      const res = await axios.get(`${API_BASE_URL}/profile`, {
        headers: { Authorization: `Bearer ${state.token}` },
      });
      const updatedUser = { ...state.user, profile: res.data.profile };
      localStorage.setItem('user', JSON.stringify(updatedUser));
      dispatch({ type: 'AUTH_SUCCESS', payload: updatedUser });
    } catch (err) {
      console.error('Failed to fetch user profile:', err);
    }
  };

  // --- Fetch profile on mount ---
  useEffect(() => {
    fetchUserProfile();
    // eslint-disable-next-line
  }, []);

  return (
    <UserContext.Provider
      value={{
        user: state.user,
        isLoggedIn: state.isLoggedIn,
        token: state.token,
        loading: state.loading,
        error: state.error,
        login,
        signup,
        logout,
        fetchUserProfile, // exposed if needed manually
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
