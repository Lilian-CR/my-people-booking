// src/components/Navbar.jsx
import { useState } from "react";
import { Link } from "react-router-dom";
import LegalModal from "./LegalModal"; // ✅ Importing your component

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
        {/* 👇 Socials on Mobile */}
        <div className="md:hidden flex gap-3 text-white text-xl">
          <a
            href="https://www.facebook.com/mypeoplebooking"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <i className="fab fa-facebook" />
          </a>
          <a
            href="https://www.instagram.com/mypeoplebooking"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <i className="fab fa-instagram" />
          </a>
        </div>

        {/* 👇 Logo on Desktop */}
        <Link to="/" className="hidden md:flex flex-shrink-0">
          <img
            src="/images/logo.png"
            alt="My People Booking Logo"
            className="h-8 sm:h-10 object-contain"
          />
        </Link>

        {/* 👇 Desktop Nav */}
        <div className="hidden md:flex gap-14 font-bold text-xs uppercase text-white absolute left-1/2 transform -translate-x-1/2 whitespace-nowrap">
          {menu.map((item) => (
            <Link
              key={item.label}
              to={item.to}
              className="hover:text-black transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* 👇 Hamburger Icon */}
        <button
          className="md:hidden text-xl ml-auto text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          ☰
        </button>
      </nav>

      {/* 👇 Mobile Menu Panel */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed top-0 right-0 h-1/2 w-2/3 bg-primary bg-opacity-95 p-6 flex flex-col gap-5 text-right font-bold text-sm uppercase text-white rounded-bl-lg items-end z-50 shadow-xl">
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
          {/* 👇 Legal Link with Modal */}
          <div onClick={() => setMobileMenuOpen(false)}>
            <LegalModal />
          </div>
        </div>
      )}
    </header>
  );
}