// // frontend/src/components/FeatureSection.js

// import React from 'react';

// // Data for the 6 feature cards shown in image_2641f3.jpg
// const features = [
//     { id: '01', title: 'Birth Chart Analysis', description: 'Generate detailed Kundali charts based on your birth details, revealing planetary positions and their influence on your life\'s 12 houses.', icon: '📜' },
//     { id: '02', title: 'Daily Horoscopes', description: 'Receive personalized daily and monthly predictions about life events, challenges, and opportunities based on your unique astrological profile.', icon: '⭐' },
//     { id: '03', title: 'Gemstone Guidance', description: 'Get personalized gemstone recommendations with detailed explanations of their spiritual and healing properties for your specific needs.', icon: '💎' },
//     { id: '04', title: 'Spiritual Rituals', description: 'Access customized Pooja recommendations and ritual guides designed to enhance your spiritual growth and address life challenges.', icon: '🕉️' },
//     { id: '05', title: 'Meditation & Wellness', description: 'Discover meditation techniques and wellness practices aligned with your astrological profile for optimal spiritual and physical health.', icon: '🌙' },
//     { id: '06', title: 'AI Spiritual Guide', description: 'Connect with our AI-powered spiritual assistant for real-time guidance, ritual explanations, and answers to your spiritual questions.', icon: '💬' },
// ];

// const FeatureCard = ({ feature }) => (
//     <div className={`relative p-6 border border-gray-200 rounded-xl shadow-sm bg-white hover:shadow-lg transition duration-300`}>
//         {/* Number tag aligned top right */}
//         <span className="absolute top-4 right-4 text-sm font-bold text-gray-300">{feature.id}</span>

//         <div className="text-4xl mb-4 p-2 inline-block rounded-lg bg-yellow-50">{feature.icon}</div>

//         <h3 className="font-bold text-xl mb-3 text-gray-900">{feature.title}</h3>
//         <p className="text-gray-600 text-sm mb-4">{feature.description}</p>

//         <a href="#" className="text-yellow-600 font-semibold text-sm flex items-center hover:underline">
//             Explore More <span className="ml-1 font-bold">›</span>
//         </a>
//     </div>
// );

// const FeatureSection = () => {
//     return (
//         <section className="py-20 bg-gray-50">
//             <div className="text-center mb-12">
//                 <span className="inline-block bg-yellow-100 text-gray-900 text-xs font-semibold px-3 py-1 rounded-full mb-4 border border-yellow-400">
//                     *Spiritual Journey*
//                 </span>
//                 <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
//                     Discover Your Path ✨
//                 </h2>
//                 <p className="text-lg text-gray-600 max-w-3xl mx-auto">
//                     Experience comprehensive spiritual guidance through our powerful features designed to illuminate your spiritual journey.
//                 </p>
//             </div>
//             <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-4">
//                 {features.map((feature) => (
//                     <FeatureCard key={feature.id} feature={feature} />
//                 ))}
//             </div>
//         </section>
//     );
// };

// export default FeatureSection;



// v3

import React from 'react';

// Data for feature cards
const features = [
    { id: '01', title: 'Your Celestial Map', description: 'Unpack your detailed birth chart (Kundali) to discover the cosmic blueprint of your life, revealing your core strengths and unique path.', icon: '📜' },
    { id: '02', title: 'Intuitive Daily Forecast', description: 'Receive gentle, personalized predictions for the day and month ahead, offering guidance on opportunities and mindful ways to navigate challenges.', icon: '⭐' },
    { id: '03', title: 'Stone & Crystal Alignment', description: 'Get tailored recommendations for gemstones and crystals, complete with explanations of their healing energies to support your current needs.', icon: '💎' },
    { id: '04', title: 'Personalized Sacred Rites', description: 'Access customized practices, meditations, and ritual guides designed to honor your spiritual beliefs and enhance your personal growth.', icon: '🕉️' },
    { id: '05', title: 'Mindful Wellness Journeys', description: 'Explore meditation techniques and self-care practices curated to harmonize your physical and mental well-being with your astrological rhythms.', icon: '🌙' },
    { id: '06', title: 'Direct Spiritual Dialogue', description: 'Connect instantly with your AI companion for real-time clarity, deep insights, and compassionate answers to your most profound life questions.', icon: '💬' },
];

const FeatureCard = ({ feature }) => {
    const ACCENT_COLOR = "violet-500";

    return (
        <div
            className={`relative p-7 border border-slate-800 rounded-3xl bg-gradient-to-br from-slate-900 via-slate-900/95 to-slate-800 
      shadow-lg hover:shadow-violet-500/40 hover:border-${ACCENT_COLOR} 
      transition-all duration-500 transform hover:-translate-y-2 hover:scale-[1.02] cursor-pointer`}
        >
            {/* Number tag */}
            <span className="absolute top-4 right-4 text-lg font-extrabold text-violet-700/40">
                {feature.id}
            </span>

            {/* Icon with glow */}
            <div
                className={`text-4xl mb-5 p-4 inline-flex items-center justify-center rounded-2xl bg-violet-900/30 border border-violet-700/30 
        shadow-inner shadow-violet-700/20 transition-all duration-500 animate-pulse hover:shadow-violet-500/50`}
            >
                {feature.icon}
            </div>

            {/* Title */}
            <h3 className="font-bold text-xl mb-3 text-white tracking-tight">
                {feature.title}
            </h3>

            {/* Description */}
            <p className="text-slate-400 text-sm mb-6 leading-relaxed font-light">
                {feature.description}
            </p>

            {/* Start Exploring Link */}
            <a
                href="#"
                className={`group text-${ACCENT_COLOR} font-semibold text-sm flex items-center hover:text-white transition-colors duration-300`}
            >
                Start Exploring
                <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
                <span
                    className={`block absolute mt-5 w-0 h-[2px] bg-${ACCENT_COLOR} transition-all duration-300 group-hover:w-[110%]`}
                ></span>
            </a>
        </div>
    );
};

const FeatureSection = () => {
    return (
        <section className="py-20 bg-slate-950 relative border-t border-b border-slate-800">
            {/* Decorative background gradient */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(139,92,246,0.05),transparent_70%)]"></div>

            <div className="max-w-7xl mx-auto px-4 relative">
                {/* Section Header */}
                <div className="text-center mb-14">
                    <span className="inline-block bg-violet-900/40 text-violet-300 text-xs font-semibold px-4 py-1.5 rounded-full mb-3 border border-violet-600/40 backdrop-blur-md shadow-sm">
                        ✦ Guided Path ✦
                    </span>
                    <h2 className="text-4xl font-extrabold text-white mb-3 tracking-tight">
                        Comprehensive Spiritual Tools
                    </h2>
                    <p className="text-lg text-slate-400 max-w-3xl mx-auto font-light leading-relaxed">
                        Discover hand-picked spiritual features designed to illuminate your
                        path, nurture your soul, and harmonize your journey with the cosmos.
                    </p>
                </div>

                {/* Grid for Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature) => (
                        <FeatureCard key={feature.id} feature={feature} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeatureSection;
