// // frontend/src/components/HeroSection.js

// import React from 'react';

// // Helper Card component for the three boxes below the main Hero buttons
// const Card = ({ title, description }) => (
//     <div className="p-6 bg-white border border-gray-200 rounded-xl shadow-md flex-1 text-left">
//         <div className="text-yellow-500 text-2xl mb-3">⭐</div> {/* Placeholder for icon */}
//         <h3 className="font-semibold text-lg mb-2">{title}</h3>
//         <p className="text-sm text-gray-500">{description}</p>
//     </div>
// );


// const HeroSection = () => {
//     return (
//         <section className="text-center py-20 bg-white">
//             {/* AI-Powered Spiritual Guide tag */}
//             <span className="inline-block bg-yellow-100 text-gray-900 text-xs font-semibold px-3 py-1 rounded-full mb-6 border border-yellow-400">
//                 • AI-Powered Spiritual Guide
//             </span>

//             <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-4">
//                 Your Personal <br /> **Spiritual Guide** ✨
//             </h1>
//             <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-12">
//                 Discover your path to enlightenment with personalized astrological insights, meditation guidance, and spiritual recommendations powered by AI.
//             </p>
//             <div className="flex justify-center space-x-4">
//                 <button className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold py-3 px-8 rounded-full shadow-lg flex items-center transform transition duration-300 hover:scale-[1.02]">
//                     Start Your Journey <span className="ml-2">→</span>
//                 </button>
//                 <button className="border border-gray-400 text-gray-900 font-bold py-3 px-8 rounded-full shadow-md flex items-center transform transition duration-300 hover:scale-[1.02] hover:shadow-lg">
//                     Download App <span className="ml-2">↓</span>
//                 </button>
//             </div>

//             {/* Small feature cards section from image_2641ae.png */}
//             <div className="flex flex-col md:flex-row justify-center mt-16 space-y-4 md:space-y-0 md:space-x-6 max-w-6xl mx-auto px-4">
//                 <Card title="Personal Horoscope" description="Daily astrological insights tailored to your birth chart and current planetary positions." />
//                 <Card title="Spiritual Practices" description="Customized meditation, rituals, and wellness recommendations for your spiritual journey." />
//                 <Card title="AI Guidance" description="24/7 spiritual guidance powered by advanced AI, answering your deepest questions." />
//             </div>
//         </section>
//     );
// };

// export default HeroSection;


// v3
import React from "react";

// Helper Card Component
const Card = ({ title, description }) => (
    <div className="p-8 bg-slate-800/80 backdrop-blur-md border border-slate-700 rounded-2xl shadow-xl flex-1 text-left text-white hover:border-violet-400 hover:shadow-violet-500/40 transition duration-500 transform hover:scale-105 cursor-pointer">
        <div className="text-violet-400 text-3xl mb-4 animate-pulse">✨</div>
        <h3 className="font-extrabold text-xl mb-2">{title}</h3>
        <p className="text-sm text-slate-300">{description}</p>
    </div>
);

const HeroSection = () => {
    return (
        <section className="relative text-center min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-slate-950 to-slate-900 overflow-hidden">
            {/* --- Animated Stars Background --- */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[length:40px_40px] opacity-30 animate-pulse"></div>

            <div className="max-w-7xl mx-auto px-4 relative z-10">
                {/* Tagline */}
                <span className="inline-block bg-violet-900/40 text-violet-300 text-sm font-semibold px-4 py-1.5 rounded-full mb-8 border border-violet-700/50 shadow-md backdrop-blur-md">
                    • AI-Powered Spiritual Guide
                </span>

                {/* Heading */}
                <h1
                    className="font-[Cinzel_Decorative] text-7xl md:text-6xl font-extrabold leading-tight tracking-tight mb-6 
          text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-pink-300 to-blue-400 
          drop-shadow-[0_0_25px_rgba(139,92,246,0.6)] relative"
                >
                    Unlock Your
                    <br />
                    <span className="block mt-3 text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-violet-500 to-purple-600">
                        Soul&apos;s Potential ✨
                    </span>

                    {/* Floating Stars */}
                    <span className="absolute -top-6 left-[20%] text-white/60 animate-ping">✦</span>
                    <span className="absolute top-0 right-[30%] text-violet-300 animate-pulse">✧</span>
                    <span className="absolute top-12 left-[10%] text-pink-300 animate-ping">✦</span>
                    <span className="absolute top-16 right-[15%] text-violet-200 animate-pulse">✧</span>
                </h1>

                {/* Subtext */}
                <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto mb-10 font-light leading-relaxed font-[Inter]">
                    Harness personalized astrological insights and spiritual recommendations powered by advanced AI to guide your life&apos;s journey with wisdom and clarity.
                </p>

                {/* Primary Button */}
                <div className="flex justify-center space-x-8">
                    <button className="bg-violet-500 hover:bg-violet-600 text-white font-extrabold py-4 px-12 rounded-full shadow-xl shadow-violet-500/40 transition duration-300 transform hover:scale-105 hover:shadow-violet-400/50">
                        Start Your Journey
                    </button>
                </div>

                {/* Cards */}
                <div className="flex flex-col md:flex-row justify-center mt-16 space-y-6 md:space-y-0 md:space-x-8 max-w-6xl mx-auto">
                    <Card
                        title="Personal Horoscope"
                        description="Daily astrological insights tailored to your birth chart and planetary positions."
                    />
                    <Card
                        title="Spiritual Practices"
                        description="Custom meditation, rituals, and wellness tips to align with your soul’s path."
                    />
                    <Card
                        title="AI Guidance"
                        description="24/7 spiritual support powered by advanced AI, answering your deepest questions."
                    />
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
