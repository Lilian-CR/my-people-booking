import { useParams } from "react-router-dom";
import { useEffect, useMemo, useState } from "react";
import roster from "../data/roster";

function getYoutubeIdFromEmbedUrl(url = "") {
  const match = url.match(/\/embed\/([^?]+)/);
  return match?.[1] || null;
}

export default function BandPage({ band: bandFromProps }) {
  const { bandSlug } = useParams();

  // SUPPORT BOTH MODES: modal OR direct URL
  const band =
    bandFromProps ||
    roster.find((b) => b.slug?.toLowerCase() === bandSlug?.toLowerCase());

  const [activeVideoIndex, setActiveVideoIndex] = useState(null);
  const videos = useMemo(() => band?.videos || [], [band]);

  /* ---------- VIDEO HELPERS ---------- */
  const openVideo = (index) => setActiveVideoIndex(index);
  const closeVideo = () => setActiveVideoIndex(null);
  const goPrev = () =>
    setActiveVideoIndex((i) => (i - 1 + videos.length) % videos.length);
  const goNext = () =>
    setActiveVideoIndex((i) => (i + 1) % videos.length);

  /* ---------- LOCK SCROLL + KEYBOARD NAV ---------- */
  useEffect(() => {
    const onKeyDown = (e) => {
      if (activeVideoIndex === null) return;
      if (e.key === "Escape") closeVideo();
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "ArrowRight") goNext();
    };

    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow =
      activeVideoIndex !== null ? "hidden" : "";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [activeVideoIndex, videos.length]);

  /* ---------- ✅ SONGKICK: ARTIST-SPECIFIC INJECTOR ---------- */
  useEffect(() => {
    if (!band?.songkickId) return;

    // Remove any previous Songkick injectors
    document
      .querySelectorAll('script[src*="widget-app.songkick.com/injector"]')
      .forEach((s) => s.remove());

    const script = document.createElement("script");
    script.src = `https://widget-app.songkick.com/injector/${band.songkickId}`;
    script.async = true;
    document.body.appendChild(script);

    return () => {
      script.remove();
    };
  }, [band?.songkickId]);

  if (!band) {
    return (
      <div className="text-center text-black p-20 text-2xl">
        Band not found
      </div>
    );
  }

  return (
    <div className="bg-white min-h-[600px] py-10 px-6">

      {/* TITLE */}
      <h1 className="text-2xl md:text-3xl font-bold uppercase text-center mb-6">
        {band.name}
      </h1>

      {/* MAIN IMAGE */}
      <div className="flex justify-center">
        <div className="w-full max-w-[600px] aspect-[4/3] overflow-hidden rounded">
          <img
            src={band.image}
            alt={band.name}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* ICONS + PRESSKIT */}
      <div className="max-w-[600px] mx-auto mt-4 flex items-center justify-between">
        <div className="flex gap-4 text-xl text-primary">
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
        </div>

        {band.pressKit && (
          <a
            href={band.pressKit}
            target="_blank"
            rel="noreferrer"
            className="bg-primary text-white px-4 py-1 text-sm rounded whitespace-nowrap"
          >
            PressKit
          </a>
        )}
      </div>

      {/* BIO */}
      {band.bio && (
        <div className="max-w-[600px] mx-auto mt-6 text-sm md:text-base leading-relaxed text-justify text-black whitespace-pre-line">
          {band.bio}
        </div>
      )}

      {/* VIDEOS */}
      {videos.length > 0 && (
        <div className="max-w-[600px] mx-auto mt-10">
          <div className="grid grid-cols-3 gap-3">
            {videos.map((url, idx) => {
              const id = getYoutubeIdFromEmbedUrl(url);
              const thumb = id
                ? `https://img.youtube.com/vi/${id}/hqdefault.jpg`
                : null;

              return (
                <button
                  key={idx}
                  onClick={() => openVideo(idx)}
                  className="relative w-full aspect-video rounded overflow-hidden bg-black/10"
                >
                  {thumb && (
                    <img
                      src={thumb}
                      alt={`Video ${idx + 1}`}
                      className="w-full h-full object-cover"
                    />
                  )}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-10 h-10 rounded-full bg-black/60 text-white flex items-center justify-center">
                      ▶
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* BANDSINTOWN */}
      {band.bandsintownId && (
        <div className="max-w-[600px] mx-auto mt-10 overflow-x-hidden">
          <iframe
            src={`/widgets/bandsintown.html?id=${band.bandsintownId}`}
            title="Bandsintown Widget"
            className="w-full h-[480px] rounded bg-white block"
            frameBorder="0"
          />
        </div>
      )}

      {/* ✅ SONGKICK (THIS NOW WORKS) */}
      {band.songkickId && (
        <div className="max-w-[600px] mx-auto mt-10">
          <a
            href={`https://www.songkick.com/artists/${band.songkickId}`}
            className="songkick-widget"
            data-theme="light" 
            data-track-button="off" 
            data-detect-style="off" 
            data-background-color="#3C6760" 
            data-font-color="#ffffff" 
            data-button-bg-color="#000000" 
            data-button-text-color="#ffffff" 
            data-locale="en" 
            data-other-artists="off" 
            data-share-button="off" 
            data-country-filter="off" 
            data-rsvp="off" 
            data-request-show="off" 
            data-past-events="on" 
            data-past-events-offtour="on" 
            data-remind-me="off"
          >
            TOUR DATES
          </a>
        </div>
      )}

      {/* VIDEO MODAL */}
      {activeVideoIndex !== null && (
        <div className="fixed inset-0 z-[9999] bg-black/80 flex items-center justify-center px-4">
          <button
            onClick={closeVideo}
            className="absolute top-4 right-4 text-white text-3xl"
          >
            &times;
          </button>

          {videos.length > 1 && (
            <>
              <button
                onClick={goPrev}
                className="absolute left-4 md:left-8 text-white text-5xl"
              >
                ‹
              </button>
              <button
                onClick={goNext}
                className="absolute right-4 md:right-8 text-white text-5xl"
              >
                ›
              </button>
            </>
          )}

          <div className="w-full max-w-5xl aspect-video bg-black rounded overflow-hidden">
            <iframe
              src={videos[activeVideoIndex]}
              title="Video"
              className="w-full h-full"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </div>
  );
}
