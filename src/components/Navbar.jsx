// src/components/Navbar.jsx
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openModal, setOpenModal] = useState(null);

  const menu = [
    { label: "HOME", to: "/" },
    { label: "ROSTER", to: "/roster" },
    { label: "CONCERTS", to: "/concerts" },
    { label: "ABOUT", to: "/about" },
    { label: "CONTACT", to: "/contact" },
  ];

  const closeModal = () => setOpenModal(null);

  return (
    <header className="bg-primary border-b sticky top-0 z-50">
      <nav className="relative max-w-6xl mx-auto px-4 flex items-center justify-between h-14">

        {/* Left: Socials on mobile / Logo on desktop */}
        <div className="md:hidden flex gap-3 text-white text-xl">
          <a href="https://www.facebook.com/mypeoplebooking" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <i className="fab fa-facebook" />
          </a>
          <a href="https://www.instagram.com/mypeoplebooking" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <i className="fab fa-instagram" />
          </a>
        </div>

        {/* Logo for desktop only */}
        <Link to="/" className="hidden md:flex flex-shrink-0">
          <img
            src="/images/logo.png"
            alt="My People Booking Logo"
            className="h-8 sm:h-10 object-contain"
          />
        </Link>

        {/* Desktop Nav */}
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

        {/* Hamburger Icon */}
        <button
          className="md:hidden text-xl ml-auto text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          ☰
        </button>
      </nav>

      {/* Mobile Menu */}
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

      {/* LEGAL MODALS */}
      {openModal === "imprint" && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 px-4">
          <div className="bg-white text-black rounded-lg max-w-2xl w-full p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-bold">IMPRINT</h2>
              <button onClick={closeModal} className="text-black text-xl">&times;</button>
            </div>
            <p><strong>MY PEOPLE BOOKING</strong> is organised by a civil person...</p>
            <p><strong>L.C. Rodrigues</strong><br />10249 - Berlin<br />Email: mypeoplebooking @ gmail . com</p>
          </div>
        </div>
      )}

      {openModal === "data" && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 px-4">
          <div className="bg-white text-black rounded-lg max-w-2xl w-full p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-bold">DATA PROTECTION</h2>
              <button onClick={closeModal} className="text-black text-xl">&times;</button>
            </div>
            <p>In this data protection declaration we inform you...</p>
          </div>
        </div>
      )}
    </header>
  );
}
