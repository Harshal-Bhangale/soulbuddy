import React from 'react';
import { Link } from 'react-router-dom';
import { FaGem } from 'react-icons/fa';

function GemstoneCard() {
    return (
        <div className="relative bg-gradient-to-br from-green-600 via-green-500 to-green-400 p-6 rounded-2xl shadow-2xl hover:scale-105 transform transition-all duration-500 border border-green-300/50 text-white">

            {/* Icon */}
            <div className="absolute top-4 right-4 text-white/80 text-3xl animate-spin-slow">
                <FaGem />
            </div>

            {/* Header */}
            <div className="flex items-center space-x-3 mb-4">
                <FaGem className="text-yellow-300 text-2xl" />
                <h3 className="text-xl font-bold">Gemstone Recommendations</h3>
            </div>

            {/* Description */}
            <p className="text-sm text-white/90 mb-6">
                Discover stones that can enhance your <span className="font-semibold">spiritual journey</span>.
            </p>

            {/* Call-to-Action */}
            <Link
                to="/recommendations"
                className="inline-block px-4 py-2 bg-yellow-400 text-green-800 font-semibold rounded-lg shadow-md hover:bg-yellow-300 hover:shadow-lg transition-all duration-300"
            >
                Get Started →
            </Link>

            {/* Decorative Sparkles */}
            <div className="absolute -bottom-2 -left-2 w-2 h-2 bg-white rounded-full opacity-30 animate-ping"></div>
            <div className="absolute -top-2 -right-4 w-2 h-2 bg-white rounded-full opacity-20 animate-pulse"></div>
        </div>
    );
}

export default GemstoneCard;
