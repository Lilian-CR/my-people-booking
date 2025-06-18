import { useState, useEffect } from "react";
import roster from "../data/roster";

export default function Roster() {
  const [selectedBand, setSelectedBand] = useState(null);
  const closeModal = () => setSelectedBand(null);

  useEffect(() => {
    // Remove previous Songkick widget scripts
    document.querySelectorAll(`script[src*="widget-app.songkick.com"]`).forEach(s => s.remove());

    // Inject Songkick script dynamically
    if (selectedBand?.songkickId) {
      const script = document.createElement("script");
      script.src = `https://widget-app.songkick.com/injector/${selectedBand.songkickId}`;
      script.async = true;
      document.body.appendChild(script);
    }
  }, [selectedBand]);

  return (
    <div className="bg-white min-h-[600px] py-12 px-6 relative">
      {/* Band Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {[...roster].sort((a, b) => a.name.localeCompare(b.name)).map(band => (
          <div key={band.id} onClick={() => setSelectedBand(band)} className="group cursor-pointer">
            <div className="overflow-hidden rounded shadow-md">
              <img
                src={band.image}
                alt={band.name}
                className="w-full h-64 object-cover transform group-hover:scale-105 transition duration-300"
              />
            </div>
            <h2 className="mt-4 text-center font-bold text-gray-800 text-lg group-hover:text-primary uppercase">
              {band.name}
            </h2>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedBand && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 px-4">
          <div className="bg-white rounded-lg max-w-6xl w-full relative overflow-y-auto max-h-[90vh] p-6 shadow-lg">
            {/* Close */}
            <button
  className="absolute -top-1 right-4 text-xl text-gray-400 hover:text-black z-50"
  onClick={closeModal}
  aria-label="Close"
>
  &times;
</button>

            {/* Header */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
              <h2 className="text-2xl font-bold uppercase">{selectedBand.name}</h2>
              <div className="flex flex-wrap gap-4 items-center">
                <div className="flex gap-3 text-xl text-primary">
                  {selectedBand.socials?.instagram && (
                    <a href={selectedBand.socials.instagram} target="_blank" rel="noreferrer"><i className="fab fa-instagram" /></a>
                  )}
                  {selectedBand.socials?.facebook && (
                    <a href={selectedBand.socials.facebook} target="_blank" rel="noreferrer"><i className="fab fa-facebook" /></a>
                  )}
                  {selectedBand.socials?.spotify && (
                    <a href={selectedBand.socials.spotify} target="_blank" rel="noreferrer"><i className="fab fa-spotify" /></a>
                  )}
                  {selectedBand.socials?.bandcamp && (
                    <a href={selectedBand.socials.bandcamp} target="_blank" rel="noreferrer"><i className="fab fa-bandcamp" /></a>
                  )}
                  {selectedBand.socials?.bandsintown && (
                    <a href={selectedBand.socials.bandsintown} target="_blank" rel="noreferrer"><i className="fas fa-ticket-alt" /></a>
                  )}
                  {selectedBand.socials?.songkick && (
                    <a href={selectedBand.socials.songkick} target="_blank" rel="noreferrer"><i className="fas fa-calendar-alt" /></a>
                  )}
                </div>
                {selectedBand.pressKit && (
                  <a
                    href={selectedBand.pressKit}
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <img
                src={selectedBand.image}
                alt={selectedBand.name}
                className="w-full h-[320px] object-cover rounded"
              />
              {selectedBand.video && (
                <iframe
                  src={selectedBand.video}
                  title="Video"
                  allowFullScreen
                  className="w-full h-[320px] rounded"
                />
              )}
            </div>

            {/* Widget Area */}
            <div className="mt-8">
              {selectedBand.bandsintownId && (
                <iframe
                  src={`/widgets/bandsintown.html?id=${selectedBand.bandsintownId}`}
                  title="Bandsintown Widget"
                  className="w-full h-[480px] bg-white rounded"
                  frameBorder="0"
                />
              )}

              {selectedBand.songkickId && (
                <div
                  dangerouslySetInnerHTML={{
                    __html: `
                      <a 
                        href="https://www.songkick.com/artists/${selectedBand.songkickId}" 
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
                      >TOUR DATES</a>
                    `,
                  }}
                  className="mt-4"
                />
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
