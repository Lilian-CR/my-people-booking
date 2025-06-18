// src/pages/BandPage.jsx
import { useParams } from "react-router-dom";
import roster from "../data/roster";
import BandsintownWidget from "../components/BandsintownWidget";
import { useEffect } from "react";

export default function BandPage() {
  const { bandSlug } = useParams();
  const band = roster.find(b => b.slug === bandSlug);

  useEffect(() => {
    // Cleanup previous Songkick scripts
    document.querySelectorAll(`script[src*="widget-app.songkick.com"]`).forEach(s => s.remove());

    if (band?.songkickId) {
      const script = document.createElement("script");
      script.src = `https://widget-app.songkick.com/injector/${band.songkickId}`;
      script.async = true;
      document.body.appendChild(script);
    }
  }, [band]);

  if (!band) {
    return (
      <div className="text-center text-black p-20 text-2xl">Band not found</div>
    );
  }

  return (
    <div className="bg-white min-h-[600px] py-12 px-6 max-w-6xl mx-auto">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
        <h1 className="text-3xl font-bold uppercase">{band.name}</h1>
        <div className="flex flex-wrap gap-4 items-center">
          <div className="flex gap-3 text-xl text-primary">
            {band.socials?.instagram && (
              <a href={band.socials.instagram} target="_blank" rel="noreferrer">
                <i className="fab fa-instagram" />
              </a>
            )}
            {band.socials?.facebook && (
              <a href={band.socials.facebook} target="_blank" rel="noreferrer">
                <i className="fab fa-facebook" />
              </a>
            )}
            {band.socials?.spotify && (
              <a href={band.socials.spotify} target="_blank" rel="noreferrer">
                <i className="fab fa-spotify" />
              </a>
            )}
            {band.socials?.bandcamp && (
              <a href={band.socials.bandcamp} target="_blank" rel="noreferrer">
                <i className="fab fa-bandcamp" />
              </a>
            )}
            {band.socials?.bandsintown && (
              <a href={band.socials.bandsintown} target="_blank" rel="noreferrer">
                <i className="fas fa-ticket-alt" />
              </a>
            )}
            {band.socials?.songkick && (
              <a href={band.socials.songkick} target="_blank" rel="noreferrer">
                <i className="fas fa-calendar-alt" />
              </a>
            )}
          </div>

          {band.pressKit && (
            <a
              href={band.pressKit}
              target="_blank"
              rel="noreferrer"
              className="bg-primary text-white px-4 py-1 text-sm rounded hover:bg-opacity-90"
            >
              PressKit
            </a>
          )}
        </div>
      </div>

      {/* Image + Video */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <img
          src={band.image}
          alt={band.name}
          className="w-full h-[320px] object-cover rounded"
        />
        {band.video && (
          <iframe
            src={band.video}
            title="Video"
            allowFullScreen
            className="w-full h-[320px] rounded"
          />
        )}
      </div>

      {/* Tour Widgets */}
      {band.bandsintownId && (
  <iframe
    src={`/widgets/bandsintown.html?id=${band.bandsintownId}`}
    title="Bandsintown Widget"
    className="w-full h-[480px] rounded bg-white mt-8"
    frameBorder="0"
  ></iframe>
)}

      {band.songkickId && (
        <div
          className="mt-6"
          dangerouslySetInnerHTML={{
            __html: `
              <a 
                href="https://www.songkick.com/artists/${band.songkickId}" 
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
      )}
    </div>
  );
}
