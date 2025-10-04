import React from 'react';
import { Link } from 'react-router-dom';
import { GiMeditation } from 'react-icons/gi';

function SpiritualPracticeCard() {
    return (
        <div className="relative bg-gradient-to-br from-blue-500 via-blue-400 to-indigo-500 p-6 rounded-2xl shadow-2xl hover:scale-105 transform transition-all duration-500 border border-blue-300/50 text-white">

            {/* Icon */}
            <div className="absolute top-4 right-4 text-white/80 text-3xl animate-bounce">
                <GiMeditation />
            </div>

            {/* Header */}
            <div className="flex items-center space-x-3 mb-4">
                <GiMeditation className="text-yellow-300 text-2xl" />
                <h3 className="text-xl font-bold">Spiritual Practice</h3>
            </div>

            {/* Description */}
            <p className="text-sm text-white/90 mb-6">
                Explore <span className="font-semibold">today's recommended spiritual practices</span> for growth and balance.
            </p>

            {/* Call-to-Action */}
            <Link
                to="/guidance"
                className="inline-block px-4 py-2 bg-yellow-400 text-blue-800 font-semibold rounded-lg shadow-md hover:bg-yellow-300 hover:shadow-lg transition-all duration-300"
            >
                Get Started →
            </Link>

            {/* Decorative Sparkles */}
            <div className="absolute -bottom-2 -left-2 w-2 h-2 bg-white rounded-full opacity-30 animate-ping"></div>
            <div className="absolute -top-2 -right-4 w-2 h-2 bg-white rounded-full opacity-20 animate-pulse"></div>
        </div>
    );
}

export default SpiritualPracticeCard;
