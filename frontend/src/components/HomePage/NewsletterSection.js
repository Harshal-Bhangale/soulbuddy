// // frontend/src/components/NewsletterSection.js

// import React from 'react';

// const NewsletterSection = () => {
//     return (
//         <section className="text-center py-20">
//             <button className="flex items-center mx-auto mb-4 bg-yellow-100 border border-yellow-400 text-gray-900 font-semibold py-2 px-4 rounded-full shadow-md">
//                 ⭐ Join Our Community
//             </button>
//             <h2 className="text-2xl font-bold text-gray-900 mb-6">
//                 Stay Connected with SoulBuddy
//             </h2>
//             <p className="text-gray-600 mb-8">
//                 Get weekly spiritual insights and personal recommendations
//             </p>

//             <div className="flex justify-center">
//                 <input
//                     type="email"
//                     placeholder="Enter your email"
//                     className="p-3 border border-gray-300 rounded-l-lg w-full max-w-xs focus:ring-yellow-500 focus:border-yellow-500"
//                 />
//                 <button className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold py-3 px-6 rounded-r-lg flex items-center">
//                     Subscribe <span className="ml-2">→</span>
//                 </button>
//             </div>

//             <div className="my-16 border-t border-gray-200 max-w-6xl mx-auto"></div>
//         </section>
//     );
// };

// export default NewsletterSection;


// v3
import React from 'react';
import { FaEnvelope, FaArrowRight } from 'react-icons/fa';

const NewsletterSection = () => {
    const ACCENT_COLOR = "violet-500";

    return (
        <section className="relative text-center py-20 bg-gradient-to-b from-slate-900 via-slate-950 to-black overflow-hidden">
            {/* Optional floating stars */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="w-1 h-1 bg-white/30 rounded-full absolute top-10 left-20 animate-pulse"></div>
                <div className="w-1 h-1 bg-white/40 rounded-full absolute top-40 right-32 animate-pulse delay-200"></div>
                <div className="w-1 h-1 bg-white/20 rounded-full absolute bottom-20 left-1/3 animate-pulse delay-500"></div>
            </div>

            <div className="relative max-w-xl mx-auto px-4 z-10">
                {/* Cosmic Badge */}
                <button className="flex items-center mx-auto mb-6 bg-violet-900/30 border border-violet-600/40 text-violet-300 font-semibold py-2 px-5 rounded-full shadow-md hover:bg-violet-800/60 hover:scale-105 transition-all duration-300">
                    ✨ Join Our Cosmic Community
                </button>

                {/* Heading */}
                <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
                    Stay Connected with <span className={`text-${ACCENT_COLOR}`}>SoulBuddy</span>
                </h2>
                <p className="text-lg text-slate-400 mb-10 leading-relaxed">
                    Receive weekly spiritual insights, personalized guidance, and updates on the newest features —
                    delivered straight to your inbox to illuminate your path.
                </p>

                {/* Newsletter Form */}
                <div className="flex justify-center w-full max-w-md mx-auto">
                    {/* Input with Icon */}
                    <div className="relative w-full">
                        <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-violet-400 text-lg">
                            <FaEnvelope />
                        </span>
                        <input
                            type="email"
                            placeholder="Enter your email address"
                            className="pl-12 pr-4 py-4 w-full rounded-l-xl border border-slate-700 bg-slate-800 text-white focus:ring-violet-500 focus:border-violet-500 outline-none placeholder-slate-500 transition duration-300"
                        />
                    </div>

                    {/* Subscribe Button */}
                    <button className={`bg-gradient-to-r from-${ACCENT_COLOR} to-violet-600 hover:from-violet-500 hover:to-violet-500 text-white font-bold py-4 px-8 rounded-r-xl flex items-center shadow-lg shadow-${ACCENT_COLOR}/50 transition-all duration-300 hover:scale-105`}>
                        Subscribe
                        <FaArrowRight className="ml-2 text-lg" />
                    </button>
                </div>
            </div>

            {/* Divider */}
            <div className="my-20 border-t border-slate-800 max-w-6xl mx-auto relative z-10"></div>
        </section>
    );
};

export default NewsletterSection;
