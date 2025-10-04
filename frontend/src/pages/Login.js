import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/UserContext";

function Login() {
    const { login, loading, error: contextError } = useAuth();

    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });
    const [localError, setLocalError] = useState("");
    const navigate = useNavigate();

    const handleChange = (e) =>
        setFormData({ ...formData, [e.target.name]: e.target.value });

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLocalError("");

        if (!formData.email || !formData.password) {
            setLocalError("⚠️ Please enter both email and password.");
            return;
        }

        try {
            await login(formData);
            navigate("/dashboard");
        } catch (err) {
            console.error("Login failed:", err.message);
        }
    };

    const displayError = localError || contextError;

    return (
        <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-slate-950 to-slate-900 overflow-hidden">
            {/* --- Starry Magical Background --- */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[length:40px_40px] opacity-20 animate-pulse"></div>
            <span className="absolute top-10 left-[20%] text-violet-400 text-3xl animate-pulse">✦</span>
            <span className="absolute top-20 right-[30%] text-pink-300 text-2xl animate-ping">✧</span>
            <span className="absolute bottom-16 left-[40%] text-blue-300 text-2xl animate-pulse">✦</span>

            {/* --- Login Card --- */}
            <div className="relative z-10 w-full max-w-md bg-slate-800/70 backdrop-blur-xl border border-slate-700 rounded-2xl shadow-2xl shadow-violet-600/30 p-10 mx-4">
                <h2 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-pink-400 to-blue-400 text-center mb-6 drop-shadow-[0_0_15px_rgba(139,92,246,0.6)]">
                    Welcome Back ✨
                </h2>

                {displayError && (
                    <p className="text-red-400 text-sm text-center mb-4">{displayError}</p>
                )}

                <form onSubmit={handleSubmit} className="space-y-5">
                    <input
                        type="email"
                        name="email"
                        placeholder="Email Address"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-slate-900/50 border border-slate-700 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-violet-400 transition"
                    />

                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={formData.password}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-slate-900/50 border border-slate-700 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-violet-400 transition"
                    />

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full py-3 mt-2 rounded-xl font-bold text-lg text-white bg-gradient-to-r from-violet-500 via-pink-500 to-purple-600 shadow-lg shadow-violet-500/40 hover:scale-105 hover:shadow-violet-400/50 transition duration-300"
                    >
                        {loading ? "Logging In..." : "Login"}
                    </button>
                </form>

                <p className="text-center text-slate-400 text-sm mt-6">
                    Don&apos;t have an account?{" "}
                    <Link
                        to="/signup"
                        className="text-violet-400 font-semibold hover:underline hover:text-pink-400 transition"
                    >
                        Sign up here
                    </Link>
                </p>
            </div>
        </section>
    );
}

export default Login;
