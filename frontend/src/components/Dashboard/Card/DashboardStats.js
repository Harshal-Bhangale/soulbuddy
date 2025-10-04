import React from 'react';
import { FaMoon, FaHeartbeat, FaSpa, FaCheckCircle } from 'react-icons/fa';
import { AiOutlineArrowUp, AiOutlineArrowDown } from 'react-icons/ai';

const STATS_DATA = [
    { label: 'Meditation Minutes', value: 245, trend: '+12%', icon: <FaSpa className="text-3xl text-indigo-500" /> },
    { label: 'Wellness Score', value: 92, trend: '+5%', icon: <FaHeartbeat className="text-3xl text-red-500" /> },
    { label: 'Completed Rituals', value: 28, trend: '+8%', icon: <FaCheckCircle className="text-3xl text-yellow-500" /> },
    { label: 'Sleep Score', value: 8.5, trend: '-2%', icon: <FaMoon className="text-3xl text-blue-500" /> },
];

function DashboardStats() {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {STATS_DATA.map((stat, index) => {
                const isPositive = stat.trend.includes('+');
                return (
                    <div
                        key={index}
                        className="flex items-center p-5 bg-gradient-to-br from-slate-900/70 to-slate-800/90 rounded-xl shadow-lg border border-slate-700 transition-transform duration-300 hover:scale-105"
                    >
                        {/* Icon */}
                        <div className="p-4 mr-4 rounded-full bg-slate-700/50 backdrop-blur-md shadow-md flex items-center justify-center">
                            {stat.icon}
                        </div>

                        {/* Stat info */}
                        <div>
                            <p className="text-sm font-medium text-gray-300">{stat.label}</p>
                            <div className="flex items-center mt-1">
                                <h3 className="text-2xl font-bold text-white">{stat.value}</h3>
                                <span className={`ml-3 flex items-center text-sm font-semibold ${isPositive ? 'text-green-400' : 'text-red-400'}`}>
                                    {isPositive ? <AiOutlineArrowUp className="mr-1" /> : <AiOutlineArrowDown className="mr-1" />}
                                    {stat.trend}
                                </span>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

export default DashboardStats;
