import React from 'react';
import { useAuth } from '../../../context/UserContext';
import { FaMoon, FaStar, FaGem } from 'react-icons/fa';

const INSIGHTS_DATA = (userSign) => [
    {
        title: 'Moon Phase',
        value: 'Waning Gibbous - Good time for new beginnings.',
        // description: '',
        icon: <FaMoon className="text-blue-300" />,
        gradient: 'from-blue-500 to-indigo-600',
    },
    {
        title: 'Your Sign',
        value: userSign,
        // description: 'Check your astrological profile details.',
        icon: <FaStar className="text-yellow-300" />,
        gradient: 'from-pink-500 to-purple-600',
    },
    {
        title: 'Power Crystal',
        value: 'Your recommended crystal for today',
        // description: 'Discover its healing properties.',
        icon: <FaGem className="text-green-300" />,
        gradient: 'from-green-500 to-emerald-600',
    },
];

function DailyInsights() {
    const { user } = useAuth();
    const userZodiacSign = user?.zodiacSign || 'Scorpio';

    const insights = INSIGHTS_DATA(userZodiacSign);

    return (
        <div className="relative rounded-3xl bg-gradient-to-br from-slate-900/70 via-slate-900/80 to-slate-800/90 
                    border border-blue-400/30 shadow-2xl shadow-blue-500/30 p-6 backdrop-blur-lg overflow-hidden">

            {/* Background Sparkles */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.05)_1px,transparent_70%)] opacity-10"></div>

            {/* Title */}
            <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-400
                     drop-shadow-lg mb-6 relative z-10">
                Daily Insights
            </h3>

            {/* Insights Blocks */}
            <div className="space-y-4 relative z-10">
                {insights.map((insight, index) => (
                    <div
                        key={index}
                        className="group relative flex items-center p-4 rounded-2xl border border-slate-700/40 
                       bg-slate-800/40 backdrop-blur-md shadow-md hover:scale-[1.03]
                       transition-all duration-300 hover:shadow-blue-400/30"
                    >
                        {/* Icon Glow */}
                        <div
                            className={`w-14 h-14 mr-4 rounded-full bg-gradient-to-br ${insight.gradient} 
                          flex items-center justify-center text-2xl shadow-lg shadow-black/50`}
                        >
                            {insight.icon}
                        </div>

                        {/* Content */}
                        <div>
                            <p className="font-semibold text-lg text-slate-100">{insight.title}</p>
                            <p className="text-sm text-slate-300">{insight.value}</p>
                            <p className="text-xs text-slate-400 mt-1">{insight.description}</p>
                        </div>

                        {/* Glow Line on Hover */}
                        <span className="absolute bottom-0 left-0 w-0 group-hover:w-full h-[2px]
                             bg-gradient-to-r from-blue-400 to-cyan-400 transition-all duration-500"></span>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default DailyInsights;
