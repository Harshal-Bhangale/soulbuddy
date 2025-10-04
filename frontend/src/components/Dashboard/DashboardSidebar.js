// import React from 'react';
// import { NavLink } from 'react-router-dom';
// import { useAuth } from '../../context/UserContext';

// const navItems = [
//     { name: 'Dashboard', path: '/dashboard', icon: '🏠' },
//     { name: 'Birth Chart', path: '/birthchart', icon: '🌟' },
//     { name: 'Horoscope', path: '/horoscope', icon: '🔮' },
//     { name: 'Recommendations', path: '/recommendations', icon: '💎' },
//     { name: 'Chat', path: '/chat', icon: '💬' },
//     { name: 'Meditation', path: '/meditation', icon: '🧘' },
//     { name: 'Workout', path: '/workout', icon: '💪' },
//     { name: 'Sleep', path: '/sleep', icon: '🌙' },
// ];

// function DashboardSidebar() {
//     const { user } = useAuth();
//     const HEADER_HEIGHT = 80; // adjust this to your header height in px

//     return (
//         <aside
//             className="w-56 bg-gradient-to-b from-slate-950 to-slate-900 border-r border-slate-800 flex flex-col p-3 shadow-xl rounded-2xl"
//             style={{ height: `calc(100vh - ${HEADER_HEIGHT}px)` }}
//         >
//             {/* Profile */}
//             <div className="profile-card mb-3 p-2 border border-slate-700 rounded-xl bg-slate-900/70 backdrop-blur-sm shadow-md flex items-center space-x-2">
//                 <div className="w-10 h-10 flex items-center justify-center bg-violet-500 text-white rounded-sm text-lg">
//                     👤
//                 </div>
//                 <div className="flex flex-col justify-center">
//                     <span className="text-sm font-semibold text-white truncate">
//                         {user?.fullName || 'User'}
//                     </span>
//                     <span className="text-xs text-slate-400 truncate">{user?.email || 'N/A'}</span>
//                 </div>
//             </div>

//             {/* Navigation */}
//             <nav className="flex-1 flex flex-col justify-start space-y-1 overflow-hidden">
//                 {navItems.map((item) => (
//                     <NavLink
//                         key={item.name}
//                         to={item.path}
//                         className={({ isActive }) =>
//                             `flex items-center px-2 py-2 rounded-lg text-sm transition-all duration-200
//                ${isActive
//                                 ? 'bg-violet-700/40 text-white font-semibold shadow-inner shadow-violet-500/30'
//                                 : 'text-slate-300 hover:bg-violet-800/20 hover:text-white'}`
//                         }
//                     >
//                         <span className="mr-2 text-lg">{item.icon}</span>
//                         {item.name}
//                     </NavLink>
//                 ))}
//             </nav>

//             {/* Settings */}
//             <div className="mt-3">
//                 <NavLink
//                     to="/settings"
//                     className="flex items-center px-2 py-2 rounded-lg text-sm text-slate-300 hover:bg-violet-800/20 hover:text-white transition-all duration-200"
//                 >
//                     <span className="mr-2 text-lg">⚙️</span> Settings
//                 </NavLink>
//             </div>
//         </aside>
//     );
// }

// export default DashboardSidebar;



import React from 'react';
import { NavLink } from 'react-router-dom';
import { useAuth } from '../../context/UserContext';

const navItems = [
    { name: 'Dashboard', path: '/dashboard', icon: '🏠' },
    { name: 'Birth Chart', path: '/birthchart', icon: '🌟' },
    { name: 'Horoscope', path: '/horoscope', icon: '🔮' },
    { name: 'Recommendations', path: '/recommendations', icon: '💎' },
    { name: 'Chat', path: '/chat', icon: '💬' },
    { name: 'Meditation', path: '/meditation', icon: '🧘' },
    { name: 'Workout', path: '/workout', icon: '💪' },
    { name: 'Sleep', path: '/sleep', icon: '🌙' },
];

function DashboardSidebar({ headerHeight }) {
    const { user } = useAuth();

    return (
        <aside
            className="w-56 bg-gradient-to-b from-slate-950 to-slate-900 border-r border-slate-800 flex flex-col p-3 shadow-xl rounded-2xl"
            style={{ height: `calc(100vh - ${headerHeight}px)` }}
        >
            {/* Profile */}
            <div className="profile-card mb-3 p-2 border border-slate-700 rounded-xl bg-slate-900/70 backdrop-blur-sm shadow-md flex items-center space-x-2">
                <div className="w-10 h-10 flex items-center justify-center bg-violet-500 text-white rounded-sm text-lg">
                    👤
                </div>
                <div className="flex flex-col justify-center">
                    <span className="text-sm font-semibold text-white truncate">
                        {user?.fullName || 'User'}
                    </span>
                    <span className="text-xs text-slate-400 truncate">{user?.email || 'N/A'}</span>
                </div>
            </div>

            {/* Navigation */}
            <nav className="flex-1 flex flex-col justify-start space-y-1 overflow-hidden">
                {navItems.map((item) => (
                    <NavLink
                        key={item.name}
                        to={item.path}
                        className={({ isActive }) =>
                            `flex items-center px-2 py-2 rounded-lg text-sm transition-all duration-200
                             ${isActive
                                ? 'bg-violet-700/40 text-white font-semibold shadow-inner shadow-violet-500/30'
                                : 'text-slate-300 hover:bg-violet-800/20 hover:text-white'}`
                        }
                    >
                        <span className="mr-2 text-lg">{item.icon}</span>
                        {item.name}
                    </NavLink>
                ))}
            </nav>

            {/* Settings */}
            <div className="mt-3">
                <NavLink
                    to="/settings"
                    className="flex items-center px-2 py-2 rounded-lg text-sm text-slate-300 hover:bg-violet-800/20 hover:text-white transition-all duration-200"
                >
                    <span className="mr-2 text-lg">⚙️</span> Settings
                </NavLink>
            </div>
        </aside>
    );
}

export default DashboardSidebar;
