import { useState } from "react";
import { Link } from "react-router-dom";
import LegalModal from "./LegalModal";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openModal, setOpenModal] = useState(null); // 'imprint' or 'data'

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
        {/* Socials for mobile (left) */}
        <div className="md:hidden flex gap-3 text-white text-xl">
          <a href="https://www.facebook.com/mypeoplebooking" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <i className="fab fa-facebook" />
          </a>
          <a href="https://www.instagram.com/mypeoplebooking" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <i className="fab fa-instagram" />
          </a>
        </div>

        {/* MOBILE LOGO */}
        <Link
          to="/"
          className="md:hidden absolute left-1/2 -translate-x-1/2"
          aria-label="My People Booking - Home"
        >
          <img
            src="/images/logo.png"
            alt="My People Booking Logo"
            className="h-8 object-contain"
          />
        </Link>

        {/* Logo for desktop*/}
        <Link to="/" className="hidden md:flex flex-shrink-0" aria-label="My People Booking - Home">
          <img
            src="/images/logo.png"
            alt="My People Booking Logo"
            className="h-8 sm:h-10 object-contain"
          />
        </Link>

        {/* Desktop Nav*/}
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

        {/* Hamburger Icon- Mobile) */}
        <button
          className="md:hidden text-xl ml-auto text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-menu"
        >
          ☰
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-menu"
          className="md:hidden fixed top-0 right-0 h-2/3 w-2/3 bg-primary bg-opacity-95 p-6 flex flex-col gap-5 text-right font-bold text-sm uppercase text-white rounded-bl-lg items-end z-50 shadow-xl"
        >
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
          <button
            onClick={() => {
              setOpenModal("imprint");
              setMobileMenuOpen(false);
            }}
            className="underline text-xs"
          >
            IMPRINT
          </button>
          <button
            onClick={() => {
              setOpenModal("data");
              setMobileMenuOpen(false);
            }}
            className="underline text-xs"
          >
            DATA PROTECTION
          </button>
        </div>
      )}

      {/* Modal Renderer */}
      {openModal && (
        <LegalModal type={openModal} onClose={() => setOpenModal(null)} />
      )}
    </header>
  );
}
