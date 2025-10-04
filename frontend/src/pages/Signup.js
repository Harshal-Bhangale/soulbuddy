import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/UserContext";

function Signup() {
    const { signup, loading, error: contextError } = useAuth();
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        password: "",
        dateOfBirth: "",
        timeOfBirth: "",
        gender: "",
        state: "",
        city: "",
    });

    const [localError, setLocalError] = useState("");
    const navigate = useNavigate();

    const handleChange = (e) =>
        setFormData({ ...formData, [e.target.name]: e.target.value });

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLocalError("");

        const required = [
            "fullName",
            "email",
            "password",
            "dateOfBirth",
            "timeOfBirth",
            "gender",
            "state",
            "city",
        ];
        const missing = required.filter((f) => !formData[f]);

        if (missing.length > 0) {
            setLocalError("⚠️ Please fill in all required fields.");
            return;
        }

        try {
            await signup(formData);
            navigate("/dashboard");
        } catch (err) {
            console.error("Signup failed:", err.message);
        }
    };

    const displayError = localError || contextError;

    return (
        <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-slate-950 to-slate-900 overflow-hidden">
            {/* --- Magical Starry BG --- */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[length:40px_40px] opacity-20 animate-pulse"></div>
            <span className="absolute top-8 left-[15%] text-violet-400 text-4xl animate-pulse">✦</span>
            <span className="absolute top-24 right-[20%] text-pink-300 text-3xl animate-ping">✧</span>
            <span className="absolute bottom-20 left-[30%] text-blue-300 text-2xl animate-pulse">✦</span>

            {/* --- Signup Card --- */}
            <div className="relative z-10 w-full max-w-lg bg-slate-800/70 backdrop-blur-xl border border-slate-700 rounded-2xl shadow-2xl shadow-violet-600/30 p-10 mx-4">
                <h2 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-pink-400 to-blue-400 text-center mb-6 drop-shadow-[0_0_15px_rgba(139,92,246,0.6)]">
                    Create Your SoulBuddy Account ✨
                </h2>

                {displayError && (
                    <p className="text-red-400 text-sm text-center mb-4">{displayError}</p>
                )}

                <form onSubmit={handleSubmit} className="space-y-5">
                    <input
                        type="text"
                        name="fullName"
                        placeholder="Full Name"
                        value={formData.fullName}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-slate-900/50 border border-slate-700 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-violet-400 transition"
                    />

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
                        placeholder="Password (min 6 characters)"
                        value={formData.password}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-slate-900/50 border border-slate-700 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-violet-400 transition"
                    />

                    <div>
                        <label className="block text-sm text-slate-300 mb-1">Date of Birth</label>
                        <input
                            type="date"
                            name="dateOfBirth"
                            value={formData.dateOfBirth}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-xl bg-slate-900/50 border border-slate-700 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-violet-400 transition"
                        />
                    </div>

                    <div>
                        <label className="block text-sm text-slate-300 mb-1">Time of Birth</label>
                        <input
                            type="time"
                            name="timeOfBirth"
                            value={formData.timeOfBirth}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-xl bg-slate-900/50 border border-slate-700 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-violet-400 transition"
                        />
                    </div>

                    <select
                        name="gender"
                        value={formData.gender}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-slate-900/50 border border-slate-700 text-slate-300 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-violet-400 transition"
                    >
                        <option value="">Select Gender</option>
                        <option value="Male" className="bg-slate-800">
                            Male
                        </option>
                        <option value="Female" className="bg-slate-800">
                            Female
                        </option>
                        <option value="Other" className="bg-slate-800">
                            Other
                        </option>
                    </select>

                    <input
                        type="text"
                        name="state"
                        placeholder="State"
                        value={formData.state}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-slate-900/50 border border-slate-700 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-violet-400 transition"
                    />

                    <input
                        type="text"
                        name="city"
                        placeholder="City"
                        value={formData.city}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-slate-900/50 border border-slate-700 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-violet-400 transition"
                    />

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full py-3 mt-2 rounded-xl font-bold text-lg text-white bg-gradient-to-r from-violet-500 via-pink-500 to-purple-600 shadow-lg shadow-violet-500/40 hover:scale-105 hover:shadow-violet-400/50 transition duration-300"
                    >
                        {loading ? "Registering..." : "Sign Up"}
                    </button>
                </form>

                <p className="text-center text-slate-400 text-sm mt-6">
                    Already have an account?{" "}
                    <Link
                        to="/login"
                        className="text-violet-400 font-semibold hover:underline hover:text-pink-400 transition"
                    >
                        Login here
                    </Link>
                </p>
            </div>
        </section>
    );
}

export default Signup;
