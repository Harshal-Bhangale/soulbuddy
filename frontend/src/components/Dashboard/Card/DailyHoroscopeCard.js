import React from 'react';
import { Link } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';
import { useAuth } from '../../../context/UserContext';

function DailyHoroscopeCard() {
    const { user } = useAuth();
    const zodiacSign = user?.zodiacSign || 'Scorpio';

    return (
        <div className="relative bg-gradient-to-br from-purple-700 via-purple-600 to-purple-500 p-6 rounded-2xl shadow-2xl hover:scale-105 transform transition-all duration-500 border border-purple-400/50 text-white">

            {/* Icon */}
            <div className="absolute top-4 right-4 text-yellow-300 text-3xl animate-pulse">
                <FaStar />
            </div>

            {/* Header */}
            <div className="flex items-center space-x-3 mb-4">
                <FaStar className="text-yellow-400 text-2xl" />
                <h3 className="text-xl font-bold">Daily Horoscope</h3>
            </div>

            {/* Description */}
            <p className="text-sm text-white/90 mb-6">
                Check your Scorpio <span className="font-semibold">astrological insights</span> for today.
            </p>

            {/* Call-to-Action */}
            <Link
                to="/horoscope"
                className="inline-block px-4 py-2 bg-yellow-400 text-purple-800 font-semibold rounded-lg shadow-md hover:bg-yellow-300 hover:shadow-lg transition-all duration-300"
            >
                Get Started →
            </Link>

            {/* Decorative Sparkles */}
            <div className="absolute -bottom-2 -left-2 w-2 h-2 bg-white rounded-full opacity-30 animate-ping"></div>
            <div className="absolute -top-2 -right-4 w-2 h-2 bg-white rounded-full opacity-20 animate-pulse"></div>
        </div>
    );
}

export default DailyHoroscopeCard;
