// import React from 'react';
// import { FaStar, FaGem, FaCalendarAlt, FaLightbulb } from 'react-icons/fa';
// import { GiMeditation } from 'react-icons/gi';

// import DashboardStats from './Card/DashboardStats';
// import DailyHoroscopeCard from './Card/DailyHoroscopeCard';
// import GemstoneCard from './Card/GemstoneCard';
// import SpiritualPracticeCard from './Card/SpiritualPracticeCard';
// import UpcomingEvents from './Card/UpcomingEvents';
// import DailyInsights from './Card/DailyInsights';

// import { useAuth } from '../../context/UserContext';

// function DashboardContent() {
//     const { user } = useAuth();
//     const firstName = user?.fullName?.split(' ')[0] || 'User';

//     return (
//         <section className="dashboard-main relative p-1 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-800 rounded-3xl overflow-hidden">

//             {/* --- Magical Sparkles Background --- */}
//             <div className="absolute inset-0 pointer-events-none z-0">
//                 <div className="absolute w-1 h-1 bg-white rounded-full opacity-30 animate-pulse top-10 left-20"></div>
//                 <div className="absolute w-1.5 h-1.5 bg-violet-400 rounded-full opacity-40 animate-bounce top-32 left-64"></div>
//                 <div className="absolute w-2 h-2 bg-pink-400 rounded-full opacity-20 animate-pulse top-1/2 left-1/3"></div>
//                 <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.03)_1px,transparent_70%)] bg-[length:20px_20px] opacity-10"></div>
//             </div>

//             {/* --- Welcome Header --- */}
//             <div className="text-center mb-12 relative z-10">
//                 <h1 className="text-3xl md:text-4xl font-light text-slate-300">Welcome back,</h1>
//                 <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-pink-300 to-blue-400">
//                     {firstName} ✨
//                 </h2>
//             </div>

//             {/* --- Statistics Row --- */}
//             <div className="relative z-10 mb-10">
//                 <DashboardStats className="shadow-2xl shadow-violet-500/50 rounded-3xl bg-slate-900/60 backdrop-blur-md border border-violet-500/40 p-6 hover:scale-105 transform transition duration-500" />
//             </div>

//             {/* --- Main Action Cards Row --- */}
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-10 relative z-10">

//                 {/* Daily Horoscope */}
//                 <DailyHoroscopeCard className="relative group hover:scale-105 transform transition-all duration-500 shadow-2xl shadow-violet-500/70 rounded-3xl bg-gradient-to-br from-slate-900/70 via-slate-900/80 to-slate-800/90 border border-violet-400/50 p-6 text-white backdrop-blur-sm">
//                     <div className="absolute top-4 right-4 text-yellow-400 text-3xl animate-bounce"><FaStar /></div>
//                 </DailyHoroscopeCard>

//                 {/* Gemstone */}
//                 <GemstoneCard className="relative group hover:scale-105 transform transition-all duration-500 shadow-2xl shadow-pink-500/70 rounded-3xl bg-gradient-to-br from-slate-900/70 via-slate-900/80 to-slate-800/90 border border-pink-400/50 p-6 text-white backdrop-blur-sm">
//                     <div className="absolute top-4 right-4 text-pink-400 text-3xl animate-spin-slow"><FaGem /></div>
//                 </GemstoneCard>

//                 {/* Spiritual Practice */}
//                 <SpiritualPracticeCard className="relative group hover:scale-105 transform transition-all duration-500 shadow-2xl shadow-violet-500/70 rounded-3xl bg-gradient-to-br from-slate-900/70 via-slate-900/80 to-slate-800/90 border border-yellow-400/50 p-6 text-white backdrop-blur-sm">
//                     <div className="absolute top-4 right-4 text-yellow-400 text-3xl animate-bounce"><GiMeditation /></div>
//                 </SpiritualPracticeCard>
//             </div>

//             {/* --- Bottom Row: Events & Insights --- */}
//             <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-12 relative z-10">

//                 <UpcomingEvents className="relative group hover:scale-105 transform transition-all duration-500 shadow-2xl shadow-green-500/70 rounded-3xl bg-gradient-to-br from-slate-900/70 via-slate-900/80 to-slate-800/90 border border-green-400/50 p-6 text-white backdrop-blur-sm">
//                     <div className="absolute top-4 right-4 text-green-400 text-3xl animate-spin-slow"><FaCalendarAlt /></div>
//                 </UpcomingEvents>

//                 <DailyInsights className="relative group hover:scale-105 transform transition-all duration-500 shadow-2xl shadow-blue-500/70 rounded-3xl bg-gradient-to-br from-slate-900/70 via-slate-900/80 to-slate-800/90 border border-blue-400/50 p-6 text-white backdrop-blur-sm">
//                     <div className="absolute top-4 right-4 text-blue-400 text-3xl animate-bounce"><FaLightbulb /></div>
//                 </DailyInsights>

//             </div>

//         </section>
//     );
// }

// export default DashboardContent;




import React from 'react';
import { FaStar, FaGem, FaCalendarAlt, FaLightbulb } from 'react-icons/fa';
import { GiMeditation } from 'react-icons/gi';

import DashboardStats from './Card/DashboardStats';
import DailyHoroscopeCard from './Card/DailyHoroscopeCard';
import GemstoneCard from './Card/GemstoneCard';
import SpiritualPracticeCard from './Card/SpiritualPracticeCard';
import UpcomingEvents from './Card/UpcomingEvents';
import DailyInsights from './Card/DailyInsights';

import { useAuth } from '../../context/UserContext';

function DashboardContent() {
    const { user } = useAuth();
    const firstName = user?.fullName?.split(' ')[0] || 'User';

    return (
        <section className="dashboard-main relative p-6 md:p-10 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-800 rounded-3xl overflow-hidden space-y-12">

            {/* --- Magical Sparkles Background --- */}
            <div className="absolute inset-0 pointer-events-none z-0">
                <div className="absolute w-1 h-1 bg-white rounded-full opacity-30 animate-pulse top-10 left-20"></div>
                <div className="absolute w-1.5 h-1.5 bg-violet-400 rounded-full opacity-40 animate-bounce top-32 left-64"></div>
                <div className="absolute w-2 h-2 bg-pink-400 rounded-full opacity-20 animate-pulse top-1/2 left-1/3"></div>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.03)_1px,transparent_70%)] bg-[length:20px_20px] opacity-10"></div>
            </div>

            {/* --- Welcome Header --- */}
            <div className="text-center relative z-10 space-y-2">
                <h1 className="text-3xl md:text-4xl font-light text-slate-300">Welcome back,</h1>
                <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-pink-300 to-blue-400">
                    {firstName} ✨
                </h2>
                <p className="text-slate-400 text-sm md:text-base">Here's your personalized spiritual dashboard</p>
            </div>

            {/* --- Statistics Row --- */}
            <div className="relative z-10 mb-10">
                <DashboardStats className="shadow-2xl shadow-violet-500/50 rounded-3xl bg-slate-900/60 backdrop-blur-md border border-violet-500/40 p-8 md:p-12 hover:scale-105 transform transition duration-500" />
            </div>

            {/* --- Main Action Cards Row --- */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 relative z-10">

                {/* Daily Horoscope */}
                <DailyHoroscopeCard className="relative group hover:scale-105 transform transition-all duration-500 shadow-2xl shadow-violet-500/70 rounded-3xl bg-gradient-to-br from-slate-900/70 via-slate-900/80 to-slate-800/90 border border-violet-400/50 p-8 md:p-10 text-white backdrop-blur-sm">
                    <div className="absolute top-4 right-4 text-yellow-400 text-3xl animate-bounce"><FaStar /></div>
                </DailyHoroscopeCard>

                {/* Gemstone */}
                <GemstoneCard className="relative group hover:scale-105 transform transition-all duration-500 shadow-2xl shadow-pink-500/70 rounded-3xl bg-gradient-to-br from-slate-900/70 via-slate-900/80 to-slate-800/90 border border-pink-400/50 p-8 md:p-10 text-white backdrop-blur-sm">
                    <div className="absolute top-4 right-4 text-pink-400 text-3xl animate-spin-slow"><FaGem /></div>
                </GemstoneCard>

                {/* Spiritual Practice */}
                <SpiritualPracticeCard className="relative group hover:scale-105 transform transition-all duration-500 shadow-2xl shadow-violet-500/70 rounded-3xl bg-gradient-to-br from-slate-900/70 via-slate-900/80 to-slate-800/90 border border-yellow-400/50 p-8 md:p-10 text-white backdrop-blur-sm">
                    <div className="absolute top-4 right-4 text-yellow-400 text-3xl animate-bounce"><GiMeditation /></div>
                </SpiritualPracticeCard>
            </div>

            {/* --- Bottom Row: Events & Insights --- */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 mt-12 relative z-10">

                <UpcomingEvents className="relative group hover:scale-105 transform transition-all duration-500 shadow-2xl shadow-green-500/70 rounded-3xl bg-gradient-to-br from-slate-900/70 via-slate-900/80 to-slate-800/90 border border-green-400/50 p-8 md:p-10 text-white backdrop-blur-sm">
                    <div className="absolute top-4 right-4 text-green-400 text-3xl animate-spin-slow"><FaCalendarAlt /></div>
                </UpcomingEvents>

                <DailyInsights className="relative group hover:scale-105 transform transition-all duration-500 shadow-2xl shadow-blue-500/70 rounded-3xl bg-gradient-to-br from-slate-900/70 via-slate-900/80 to-slate-800/90 border border-blue-400/50 p-8 md:p-10 text-white backdrop-blur-sm">
                    <div className="absolute top-4 right-4 text-blue-400 text-3xl animate-bounce"><FaLightbulb /></div>
                </DailyInsights>

            </div>

        </section>
    );
}

export default DashboardContent;
