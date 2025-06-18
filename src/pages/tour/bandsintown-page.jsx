// src/pages/tour/bandsintown-page.jsx
import { useEffect } from "react";

const bandId = new URLSearchParams(window.location.search).get("id");

export default function BandsintownPage() {
  useEffect(() => {
    if (!bandId) return;

    const script = document.createElement("script");
    script.src = "https://widget.bandsintown.com/main.min.js";
    script.async = true;
    script.onload = () => {
      setTimeout(() => {
        window?.BitWidget?.loadWidgets?.();
      }, 300);
    };
    document.body.appendChild(script);
  }, []);

  return (
    <div className="min-h-screen bg-white p-6">
      <h1 className="text-2xl font-bold mb-4">Bandsintown Tour</h1>
      {bandId ? (
        <div className="bg-gray-100 p-4 rounded">
          <a
            className="bit-widget-initializer"
            data-artist-name={bandId}
            data-display-local-dates="false"
            data-display-past-dates="true"
            data-auto-style="false"
            data-text-color="#000000"
            data-link-color="#ffffff"
            data-background-color="#467470"
            data-display-limit="15"
            data-display-start-time="true"
            data-link-text-color="#000000"
            data-display-lineup="true"
            data-display-track-button="false"
            data-display-play-my-city="false"
            data-display-logo="false"
            data-separator-color="#000000"
          ></a>
        </div>
      ) : (
        <p>No artist ID provided.</p>
      )}
    </div>
  );
}
