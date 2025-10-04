// import React from 'react';

// export default function Footer() {
//   return (
//     <footer className="bg-gray-900 text-gray-400">
//       <div className="container mx-auto p-4 text-center text-sm">
//         © {new Date().getFullYear()} SoulBuddy. All rights reserved.
//       </div>
//     </footer>
//   );
// }


// import React from 'react';

// export default function Footer() {
//   return (
//     <footer className="bg-transparent text-text-secondary">
//       <div className="container mx-auto p-6 text-center text-sm">
//         © {new Date().getFullYear()} SoulBuddy. All rights reserved.
//       </div>
//     </footer>
//   );
// }


// v3
// frontend/src/components/Footer.js

import React from 'react';
import { Link } from 'react-router-dom';
import { FaTwitter, FaInstagram, FaYoutube, FaFacebookF } from 'react-icons/fa';
import { MdHelp, MdPolicy, MdContactSupport, MdGavel } from 'react-icons/md';

const navLinks = [
  { title: 'Features', to: '#features', icon: '✨' },
  { title: 'Meditation', to: '#meditation', icon: '🧘‍♂️' },
  { title: 'Sleep & Wellness', to: '#wellness', icon: '🌙' },
  { title: 'Recommendations', to: '#recommendations', icon: '💡' },
];

const resourceLinks = [
  { title: 'Help Center', to: '/help', icon: <MdHelp /> },
  { title: 'Privacy Policy', to: '/privacy', icon: <MdPolicy /> },
  { title: 'Terms of Use', to: '/terms', icon: <MdGavel /> },
  { title: 'Contact Support', to: '/contact', icon: <MdContactSupport /> },
];

const SocialIcon = ({ icon, href }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="p-3 bg-slate-800 border border-slate-700 rounded-full text-white hover:bg-violet-500 hover:text-white transition transform hover:scale-110"
  >
    {icon}
  </a>
);

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-t from-slate-950 via-slate-900 to-slate-950 py-14 border-t border-slate-800 overflow-hidden">

      {/* Decorative Stars */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 25 }).map((_, i) => (
          <span
            key={i}
            className="absolute w-1 h-1 bg-white/30 rounded-full animate-pulse"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          ></span>
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* Left Side: Brand + Social */}
        <div className="flex flex-col space-y-4">
          <div className="flex items-center space-x-2">
            <span className="text-4xl animate-pulse">🔮</span>
            <span className="text-3xl font-bold text-white">
              Soul<span className="text-violet-500">Buddy</span>
            </span>
          </div>
          <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
            Your personal AI spiritual guide. Explore meditations, horoscopes, and wellness tips tailored to your journey.
          </p>
          <div className="flex space-x-3 mt-2">
            <SocialIcon icon={<FaTwitter />} href="#" />
            <SocialIcon icon={<FaInstagram />} href="#" />
            <SocialIcon icon={<FaYoutube />} href="#" />
            <SocialIcon icon={<FaFacebookF />} href="#" />
          </div>
        </div>

        {/* Right Side: Links */}
        <div className="flex justify-center md:justify-end items-center space-x-16">
          {/* Explore Section */}
          <div>
            <h3 className="text-white font-semibold mb-3 text-lg">Explore</h3>
            <ul className="space-y-2 text-sm">
              {navLinks.map((link) => (
                <li
                  key={link.title}
                  className="flex items-center text-slate-400 hover:text-violet-500 transition-colors"
                >
                  <span className="mr-2 text-violet-500">{link.icon}</span>
                  <Link to={link.to} className="hover:underline">{link.title}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Section */}
          <div>
            <h3 className="text-white font-semibold mb-3 text-lg">Resources</h3>
            <ul className="space-y-2 text-sm">
              {resourceLinks.map((link) => (
                <li
                  key={link.title}
                  className="flex items-center text-slate-400 hover:text-violet-500 transition-colors"
                >
                  <span className="mr-2 text-violet-500">{link.icon}</span>
                  <Link to={link.to} className="hover:underline">{link.title}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

      </div>

      {/* Compact Bottom Bar */}
      <div className="mt-12 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center text-xs text-slate-400 px-4 sm:px-6 lg:px-8 py-3">

        {/* Left Side: Copyright */}
        <p className="text-center md:text-left mb-2 md:mb-0">
          © {new Date().getFullYear()} <span className="font-semibold text-white">SoulBuddy</span>. Made with <span className="text-red-500">❤️</span>.
        </p>

        {/* Right Side: Support Button */}
        <button className="flex items-center bg-violet-500/20 border border-violet-500 text-white font-semibold py-1.5 px-5 rounded-full shadow-sm hover:bg-violet-500/40 hover:scale-105 transition-transform duration-300">
          Support 24/7
        </button>
      </div>


    </footer>
  );
};

export default Footer;
