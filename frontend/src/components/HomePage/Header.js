// import React from 'react';
// import { Link } from 'react-router-dom';

// export default function Header() {
//   return (
//     <header className="bg-primary text-white">
//       <nav className="container mx-auto p-4 flex items-center justify-between">
//         <Link to="/" className="font-bold text-xl">SoulBuddy</Link>
//         <div className="space-x-4">
//           <Link to="/user" className="hover:underline">Your Details</Link>
//           <Link to="/dashboard" className="hover:underline">Dashboard</Link>
//           <Link to="/horoscope" className="hover:underline">Horoscope</Link>
//         </div>
//       </nav>
//     </header>    
//   );
// }


// import React from 'react';
// import { NavLink } from 'react-router-dom';

// export default function Header() {
//   const activeLinkStyle = {
//     color: '#0ea5e9', // secondary color
//     fontWeight: '600',
//   };

//   const linkClass = "hover:text-secondary transition-colors duration-300";

//   return (
//     <header className="sticky top-0 z-50 bg-surface/80 backdrop-blur-lg border-b border-slate-300/10">
//       <nav className="container mx-auto p-4 flex items-center justify-between">
//         <NavLink to="/" className="font-bold text-2xl tracking-tight">
//           Soul<span className="text-primary">Buddy</span>
//         </NavLink>
//         <div className="flex items-center space-x-4 md:space-x-6 text-text-secondary font-medium">
//           <NavLink to="/user" className={linkClass} style={({ isActive }) => isActive ? activeLinkStyle : undefined}>
//             Your Details
//           </NavLink>
//           <NavLink to="/dashboard" className={linkClass} style={({ isActive }) => isActive ? activeLinkStyle : undefined}>
//             Dashboard
//           </NavLink>
//           <NavLink to="/horoscope" className={linkClass} style={({ isActive }) => isActive ? activeLinkStyle : undefined}>
//             Horoscope
//           </NavLink>
//           <NavLink to="/guidance" className={({ isActive }) => isActive ? "text-teal-300" : "hover:text-teal-300"}>
//             Guidance
//           </NavLink>
//         </div>
//       </nav>
//     </header>
//   );
// }

// v3

import React from 'react';
import { Home, Info, Mail } from 'lucide-react'; // Importing Lucide Icons

export default function Header() {
  const ACCENT_COLOR = "violet-500";
  const BG_COLOR = "bg-slate-900";

  // Reusable Link component with icon
  const LinkItem = ({ href, icon: Icon, children }) => (
    <a
      href={href}
      className={`group relative flex items-center space-x-2 text-slate-300 hover:text-white font-medium transition-all duration-300 hover:scale-105`}
    >
      {/* Icon */}
      <Icon
        size={18}
        className={`text-slate-400 group-hover:text-${ACCENT_COLOR} transition-colors duration-300`}
      />

      {/* Text */}
      <span>{children}</span>

      {/* Animated Underline */}
      <span
        className={`absolute bottom-[-4px] left-1/2 w-0 h-[2px] bg-${ACCENT_COLOR} transition-all duration-300 group-hover:w-full group-hover:left-0`}
      ></span>
    </a>
  );

  return (
    <header
      className={`sticky top-0 z-50 ${BG_COLOR}/90 backdrop-blur-lg border-b border-slate-700 shadow-xl`}
    >
      <nav className="container mx-auto px-4 py-3 flex items-center justify-between max-w-7xl">
        {/* --- Left side: Logo + Navigation --- */}
        <div className="flex items-center space-x-10">
          {/* Logo */}
          <a
            href="/"
            className="font-extrabold text-2xl tracking-tight text-white flex items-center space-x-2"
          >
            <span className="text-3xl">🔮</span>
            <span>
              Soul<span className={`text-${ACCENT_COLOR}`}>Buddy</span>
            </span>
          </a>

          {/* Navigation Links with Icons */}
          <div className="flex items-center space-x-8">
            <LinkItem href="/" icon={Home}>
              Home
            </LinkItem>
            <LinkItem href="/about" icon={Info}>
              About
            </LinkItem>
            <LinkItem href="/contact" icon={Mail}>
              Contact
            </LinkItem>
          </div>
        </div>

        {/* --- Right side: Auth Buttons --- */}
        <div className="flex items-center space-x-5">
          <a
            href="/login"
            className={`relative text-slate-300 hover:text-white font-medium hover:scale-105 transition-all`}
          >
            Login
            <span
              className={`absolute bottom-[-4px] left-1/2 w-0 h-[2px] bg-${ACCENT_COLOR} transition-all duration-300 hover:w-full hover:left-0`}
            ></span>
          </a>

          <a
            href="/signup"
            className={`bg-${ACCENT_COLOR} hover:bg-violet-600 text-white font-semibold py-2 px-5 rounded-full shadow-lg shadow-violet-500/40 transition transform hover:scale-105`}
          >
            Sign Up
          </a>
        </div>
      </nav>
    </header>
  );
}
