// src/components/Footer.jsx
import { useEffect, useState } from "react";

export default function Footer() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const updateSize = () => setIsMobile(window.innerWidth < 768);
    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return (
    <footer className="bg-primary text-white text-sm py-2 px-4">
      <div className="max-w-5xl mx-auto flex flex-wrap justify-between items-center gap-4 text-xs text-center whitespace-nowrap">
        {!isMobile && (
          <>
            {/* Social Icons */}
            <div className="flex gap-4 text-lg">
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
          </>
        )}

        {/* Copyright (always shown) */}
        <div className="text-xs mx-auto">MY PEOPLE BOOKING - ©2025</div>

        {!isMobile && (
          <>
            {/* Legal Links (only desktop) */}
            <div className="flex gap-4 text-xs">
              <span className="underline">IMPRINT</span>
              <span className="underline">DATA PROTECTION</span>
            </div>
          </>
        )}
      </div>
    </footer>
  );
}
