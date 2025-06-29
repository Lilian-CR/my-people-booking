// src/components/Navbar.jsx
import { useState } from "react";
import { Link } from "react-router-dom";
import LegalModal from "./LegalModal";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openModal, setOpenModal] = useState(null); // "imprint" or "data"

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

        {/* Left: Social Icons (mobile only) */}
        <div className="md:hidden flex gap-3 text-white text-xl">
          <a href="https://www.facebook.com/mypeoplebooking" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <i className="fab fa-facebook" />
          </a>
          <a href="https://www.instagram.com/mypeoplebooking" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <i className="fab fa-instagram" />
          </a>
        </div>

        {/* Logo (desktop only) */}
        <Link to="/" className="hidden md:flex flex-shrink-0">
          <img
            src="/images/logo.png"
            alt="My People Booking Logo"
            className="h-8 sm:h-10 object-contain"
          />
        </Link>

        {/* Desktop Menu */}
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

        {/* Hamburger icon */}
        <button
          className="md:hidden text-xl ml-auto text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          ☰
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed top-0 right-0 h-fit w-2/3 bg-primary bg-opacity-95 p-6 flex flex-col gap-5 text-right font-bold text-sm uppercase text-white rounded-bl-lg items-end z-50 shadow-xl">
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

      {/* Legal Modals */}
      {openModal === "imprint" && (
        <LegalModal
          title="IMPRINT"
          content={
            <>
              <p><strong>MY PEOPLE BOOKING</strong> is organised by a civil person, and it's not (yet) a registered business.</p>
              <p><strong>L.C. Rodrigues</strong><br />
                10249 - Berlin<br />
                Email: mypeoplebooking @ gmail . com<br />
                Web: www.mypeoplebooking.net</p>
              <p><strong>Content responsibility:</strong><br />
                L.C. Rodrigues - mypeoplebooking @ gmail . com</p>
            </>
          }
          onClose={closeModal}
        />
      )}

      {openModal === "data" && (
        <LegalModal
          title="DATA PROTECTION"
          content={
            <>
              <p>In this data protection declaration we inform you about the processing of personal data when using this website.</p>

              <p><strong>Responsible for data processing:</strong><br />
              L. C. Rodrigues<br />
              10249 Berlin<br />
              Email: mypeoplebooking @ gmail . com</p>

              <p>Personal data is any information relating to an identified or identifiable natural person. An identifiable person can be identified, directly or indirectly, particularly by reference to a name, ID number, location data, online identifier, or one or more features relating to their identity.</p>

              <p><strong>Data when the website is accessed:</strong> If you use this website for information only, we only process the data required to display the site on your device. These include:</p>
              <ul className="list-disc list-inside text-left">
                <li>IP address</li>
                <li>Date and time of the request</li>
                <li>Amount of data transferred</li>
                <li>Website from which the request originated</li>
                <li>Browser type and version</li>
                <li>Operating system</li>
              </ul>

              <p>The legal basis for processing is our legitimate interest according to Article 6(1)(f) GDPR to enable website functionality.</p>

              <p><strong>Your rights:</strong></p>
              <ul className="list-disc list-inside text-left">
                <li>Right to access (Art. 15 GDPR)</li>
                <li>Right to rectification (Art. 16 GDPR)</li>
                <li>Right to erasure (Art. 17 GDPR)</li>
                <li>Right to restrict processing (Art. 18 GDPR)</li>
                <li>Right to data portability (Art. 20 GDPR)</li>
                <li>Right to object to processing (Art. 21 GDPR)</li>
                <li>Right not to be subject to automated decisions (Art. 22 GDPR)</li>
                <li>Right to lodge a complaint with a supervisory authority (Art. 77 GDPR)</li>
              </ul>

              <p className="text-xs"><em>Source: Sample data protection declaration from anwalt.de</em></p>
            </>
          }
          onClose={closeModal}
        />
      )}
    </header>
  );
}