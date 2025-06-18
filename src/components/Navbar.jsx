import { Link } from "react-router-dom";
import logo from "../images/logo.png"; // Ensure this path is correct

export default function Navbar() {
  const menu = [
    { label: "HOME", to: "/" },
    { label: "ROSTER", to: "/roster" },
    { label: "CONCERTS", to: "/concerts" },
    { label: "ABOUT", to: "/about" },
    { label: "CONTACT", to: "/contact" },
  ];

  return (
    <header className="bg-primary border-b py-3">
      <div className="max-w-6xl mx-auto px-4 flex flex-wrap items-center justify-between">
        {/* Logo (left) */}
        <Link to="/" className="flex-shrink-0">
          <img
            src={logo}
            alt="My People Booking Logo"
            className="h-8 sm:h-10 object-contain"
          />
        </Link>

        {/* Menu (right) */}
        <nav className="flex-1">
          <ul className="flex flex-wrap justify-end gap-3 text-[10px] sm:text-xs md:text-sm font-bold text-accentYellow uppercase tracking-wide">
            {menu.map((item) => (
              <li key={item.label}>
                <Link
                  to={item.to}
                  className="hover:text-white transition-colors"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
