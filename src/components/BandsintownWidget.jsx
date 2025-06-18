
// src/components/BandsintownWidget.jsx
import { useEffect } from "react";

export default function BandsintownWidget({ artistId }) {
  useEffect(() => {
    const bitScriptUrl = "https://widget.bandsintown.com/main.min.js";

    // Cleanup old widgets and scripts
    document.querySelectorAll(".bit-widget-initializer").forEach(el => el.remove());
    document.querySelectorAll(`script[src="${bitScriptUrl}"]`).forEach(s => s.remove());

    // Add script
    const script = document.createElement("script");
    script.src = bitScriptUrl;
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Optional cleanup
      script.remove();
    };
  }, [artistId]);

  return (
    <div className="mt-8 bg-white p-4 rounded">
      <div
        className="bit-widget-initializer"
        data-artist-name={artistId}
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
      ></div>
    </div>
  );
}
