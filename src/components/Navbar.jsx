// src/components/Navbar.jsx
import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const menu = [
    { label: "HOME", to: "/" },
    { label: "ROSTER", to: "/roster" },
    { label: "CONCERTS", to: "/concerts" },
    { label: "ABOUT", to: "/about" },
    { label: "CONTACT", to: "/contact" },
  ];

  return (
    <header className="bg-primary border-b sticky top-0 z-50">
      <nav className="relative max-w-6xl mx-auto px-4 flex items-center justify-between h-14">
        
        {/* Logo (left) */}
        <Link to="/" className="flex-shrink-0">
          <img
            src={logo}
            alt="My People Booking Logo"
            className="h-8 sm:h-10 object-contain"
          />
        </Link>

        {/* Desktop Nav - Centered */}
        <div className="hidden md:flex gap-14 font-bold text-xs uppercase text-accentYellow absolute left-1/2 transform -translate-x-1/2 whitespace-nowrap">
          {menu.map((item) => (
            <Link
              key={item.label}
              to={item.to}
              className="hover:text-white transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Hamburger Icon - Right on Mobile */}
        <button
          className="md:hidden text-xl ml-auto text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          ☰
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
  <div className="md:hidden fixed top-0 right-0 h-1/3 w-1/2 bg-primary bg-opacity-90 backdrop-blur-sm p-6 flex flex-col gap-6 text-right font-bold text-sm uppercase items-end z-50">
    {menu.map((item) => (
      <Link
        key={item.label}
        to={item.to}
        className="hover:text-black transition"
        onClick={() => setMobileMenuOpen(false)}
      >
        {item.label}
      </Link>
    ))}
  </div>
)}
    </header>
  );
}
