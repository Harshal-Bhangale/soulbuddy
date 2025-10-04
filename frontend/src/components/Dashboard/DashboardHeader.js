import React, { useState, useRef, useEffect } from "react";
import { useAuth } from "../../context/UserContext";
import { NavLink } from "react-router-dom";
import {
    FaUserCircle,
    FaUser,
    FaCog,
    FaQuestionCircle,
    FaSignOutAlt,
    FaChevronDown
} from "react-icons/fa";

function DashboardHeader() {
    const { user } = useAuth();
    const firstName = user?.fullName?.split(" ")[0] || "User";

    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    // 🔹 Dropdown menu items array
    const menuItems = [
        { label: "Profile", icon: <FaUser className="text-purple-400" />, path: "/profile", type: "link" },
        { label: "Settings", icon: <FaCog className="text-green-400" />, path: "/settings", type: "link" },
        { label: "Help", icon: <FaQuestionCircle className="text-blue-400" />, path: "/help", type: "link" },
        { label: "Logout", icon: <FaSignOutAlt className="text-red-400" />, type: "button" },
    ];

    // 🔹 Close dropdown if clicked outside
    useEffect(() => {
        function handleClickOutside(event) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <header className="w-full flex justify-between items-center px-8 py-4 bg-slate-900/80 backdrop-blur-lg shadow-lg rounded-b-3xl border-b border-slate-700 relative z-10">
            {/* Branding */}
            <div className="flex items-center space-x-3">
                <div className="text-3xl font-extrabold text-white tracking-wide">
                    SoulBuddy
                </div>
            </div>

            {/* Quick Access */}
            <div className="flex items-center space-x-4 relative" ref={dropdownRef}>
                {/* Dashboard Button */}
                <NavLink
                    to="/"
                    className="px-4 py-2 font-semibold text-slate-100 bg-slate-800/50 backdrop-blur-md rounded-lg shadow-sm hover:bg-slate-700/60 hover:shadow-md transition-all duration-300"
                >
                    Dashboard
                </NavLink>

                {/* Profile Dropdown */}
                <div className="relative">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-slate-800/50 backdrop-blur-md text-white font-medium shadow-sm hover:shadow-md hover:bg-slate-700/60 transition-all duration-300"
                    >
                        <FaUserCircle className="text-xl" />
                        <span>{firstName}</span>
                        <FaChevronDown
                            className={`ml-1 transition-transform duration-300 ${isOpen ? "rotate-180" : "rotate-0"
                                }`}
                        />
                    </button>

                    {isOpen && (
                        <div className="absolute right-0 mt-2 w-48 bg-slate-800/90 backdrop-blur-md rounded-lg shadow-lg border border-slate-700 overflow-hidden animate-fadeIn">
                            {menuItems.map((item, index) =>
                                item.type === "link" ? (
                                    <NavLink
                                        key={index}
                                        to={item.path}
                                        className="flex items-center px-4 py-2 text-sm text-white hover:bg-slate-700/70 transition-colors"
                                    >
                                        {item.icon}
                                        <span className="ml-2">{item.label}</span>
                                    </NavLink>
                                ) : (
                                    <button
                                        key={index}
                                        onClick={() => alert("Logged out!")} // Replace with logout logic
                                        className="w-full flex items-center px-4 py-2 text-sm text-white hover:bg-slate-700/70 transition-colors"
                                    >
                                        {item.icon}
                                        <span className="ml-2">{item.label}</span>
                                    </button>
                                )
                            )}
                        </div>
                    )}
                </div>
            </div>
        </header>
    );
}

export default DashboardHeader;
