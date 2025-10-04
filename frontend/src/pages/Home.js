// import React from 'react';

// export default function Home() {
//   return (
//     <section className="text-center space-y-4">
//       <h1 className="text-3xl font-bold">SoulBuddy</h1>
//       <p className="text-gray-300">Your AI-powered spiritual guide for insights and well-being.</p>
//     </section>
//   );
// }


// v2
// import React from 'react';
// import { Link } from 'react-router-dom';

// export default function Home() {
//   return (
//     <section className="flex flex-col items-center justify-center text-center space-y-6 h-full py-20 animate-slideInUp">
//       <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-primary via-accent to-secondary">
//         Welcome to SoulBuddy
//       </h1>
//       <p className="text-lg md:text-xl text-text-secondary max-w-2xl">
//         Your AI-powered spiritual guide for navigating life's journey with clarity, insight, and well-being.
//       </p>
//       <Link to="/user">
//         <button className="px-8 py-3 bg-gradient-to-r from-primary to-accent text-white font-semibold rounded-lg shadow-lg hover:shadow-xl hover:-translate-y-1 transform transition-all duration-300">
//           Get Started
//         </button>
//       </Link>
//     </section>
//   );
// }


// v3
import React from 'react';
// We do NOT import Header or Footer here, as they are globally handled in App.js
// import HeroSection from '../components/HomePage/HeroSection';
import HeroSection from '../components/HomePage/HeroSection';
import FeatureSection from '../components/HomePage/FeatureSection';
import NewsletterSection from '../components/HomePage/NewsletterSection';

/**
 * The Home component renders the main landing page body sections.
 * Header and Footer are excluded as they are placed globally in the App.js layout.
 */
export default function Home() {
  return (
    // This wrapper ensures the content sections stack vertically
    <div className="flex flex-col flex-1">
      <HeroSection />
      <FeatureSection />
      <NewsletterSection />
    </div>
  );
}
