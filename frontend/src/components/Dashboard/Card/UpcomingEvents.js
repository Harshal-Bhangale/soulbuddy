import React from 'react';
import { FaCalendarAlt, FaClock } from 'react-icons/fa';

const EVENTS_DATA = [
    {
        name: 'Group Meditation Session',
        icon: '⚛️',
        day: 'Today',
        time: '2:00 PM',
        color: 'from-violet-500 to-purple-700',
    },
    {
        name: 'Scorpio Workshop',
        icon: '⭐',
        day: 'Tomorrow',
        time: '11:00 AM',
        color: 'from-pink-500 to-rose-700',
    },
    {
        name: 'Wellness Check-in',
        icon: '📈',
        day: 'Wed, 20 Jan',
        time: '3:30 PM',
        color: 'from-green-500 to-emerald-700',
    },
];

function UpcomingEvents() {
    return (
        <div className="relative rounded-3xl bg-gradient-to-br from-slate-900/70 via-slate-900/80 to-slate-800/90 
                    border border-violet-400/30 shadow-2xl shadow-violet-500/30 p-6 backdrop-blur-lg overflow-hidden">

            {/* Glow & Sparkle Effect */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.05)_1px,transparent_70%)] opacity-10"></div>

            {/* Header */}
            <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-pink-300 
                     drop-shadow-lg mb-6 relative z-10 flex items-center gap-2">
                <FaCalendarAlt className="text-violet-400" />
                Upcoming Events
            </h3>

            {/* Event List */}
            <div className="space-y-4 relative z-10">
                {EVENTS_DATA.map((event, index) => (
                    <div
                        key={index}
                        className="group relative flex items-center justify-between p-4 rounded-2xl border border-slate-700/40
                       bg-slate-800/40 backdrop-blur-md shadow-md hover:shadow-violet-500/40
                       hover:scale-[1.03] transition-all duration-300"
                    >
                        {/* Left: Icon & Details */}
                        <div className="flex items-center space-x-4">
                            {/* Icon Glow */}
                            <div
                                className={`w-14 h-14 rounded-full bg-gradient-to-br ${event.color} 
                            flex items-center justify-center text-2xl shadow-lg shadow-black/50`}
                            >
                                {event.icon}
                            </div>

                            <div>
                                <p className="font-semibold text-lg text-slate-100">{event.name}</p>
                                <div className="flex items-center text-sm text-slate-400 mt-1 space-x-4">
                                    <span className="flex items-center gap-1">
                                        <FaCalendarAlt className="text-violet-300" /> {event.day}
                                    </span>
                                    <span className="flex items-center gap-1">
                                        <FaClock className="text-pink-300" /> {event.time}
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Hover Glow Line */}
                        <span className="absolute bottom-0 left-0 w-0 group-hover:w-full h-[2px] 
                             bg-gradient-to-r from-violet-400 to-pink-400 transition-all duration-500"></span>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default UpcomingEvents;
