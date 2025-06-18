// src/pages/tour/songkick-page.jsx
import { useEffect } from "react";

const artistId = new URLSearchParams(window.location.search).get("id");

export default function SongkickPage() {
  useEffect(() => {
    if (!artistId) return;

    const script = document.createElement("script");
    script.src = `//widget-app.songkick.com/injector/${artistId}`;
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div className="min-h-screen bg-white p-6">
      <h1 className="text-2xl font-bold mb-4">Songkick Tour</h1>
      {artistId ? (
        <div
          className="bg-gray-100 p-4 rounded"
          dangerouslySetInnerHTML={{
            __html: `
              <a 
                href="https://www.songkick.com/artists/${artistId}" 
                class="songkick-widget"
                data-theme="light"
                data-track-button="on"
                data-detect-style="off"
                data-background-color="#467470"
                data-font-color="rgb(0,0,0,1)"
                data-button-bg-color="rgb(0,0,0,1)"
                data-button-text-color="rgb(255,255,255,1)"
                data-locale="en"
                data-other-artists="off"
                data-share-button="off"
                data-country-filter="off"
                data-rsvp="on"
                data-request-show="off"
                data-past-events="on"
                data-past-events-offtour="on"
                data-remind-me="off"
              >View on Songkick</a>
            `,
          }}
        />
      ) : (
        <p>No artist ID provided.</p>
      )}
    </div>
  );
}
