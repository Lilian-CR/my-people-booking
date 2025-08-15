import { useEffect, useRef, useState } from "react";

// Desktop images
const desktopRosterImages = [
  "/images/roster1.jpg",
  "/images/roster2.jpg",
  "/images/roster3.jpg",
  "/images/roster4.jpg",
  "/images/roster5.jpg",
  "/images/roster6.jpg",
  "/images/roster7.jpg",
  "/images/roster8.jpg",
];

// Mobile images: 830x1100 px
const mobileRosterImages = [
  "/images/mobile_roster_01.jpg",
  "/images/mobile_roster_02.jpg",
  "/images/mobile_roster_03.jpg",
  "/images/mobile_roster_04.jpg",
  "/images/mobile_roster_05.jpg",
  "/images/mobile_roster_06.jpg",
  "/images/mobile_roster_07.jpg",
  "/images/mobile_roster_08.jpg",
];

export default function Home() {
  const [index, setIndex] = useState(0);
  const [isInteracting, setIsInteracting] = useState(false);
  const touchStartX = useRef(null);

  // Auto-advance every 3s
  useEffect(() => {
    if (isInteracting) return;
    const interval = setInterval(() => {
      setIndex((prev) => prev + 1);
    }, 5000);
    return () => clearInterval(interval);
  }, [isInteracting]);

  const safeIndexDesktop = ((index % desktopRosterImages.length) + desktopRosterImages.length) % desktopRosterImages.length;
  const safeIndexMobile  = ((index % mobileRosterImages.length)  + mobileRosterImages.length)  % mobileRosterImages.length;

  // Touch handlers for mobile
  const onTouchStart = (e) => {
    setIsInteracting(true);
    touchStartX.current = e.touches[0].clientX;
  };

  const onTouchEnd = (e) => {
    const startX = touchStartX.current;
    const endX = e.changedTouches[0].clientX;
    const delta = endX - startX;
    const threshold = 50; // px

    if (Math.abs(delta) > threshold) {
      setIndex((prev) => prev + (delta < 0 ? 1 : -1));
    }
    setIsInteracting(false);
    touchStartX.current = null;
  };

  return (
    <main className="h-[calc(100vh-56px-48px)] overflow-hidden bg-black">
      {/* Desktop slider */}
      <section className="hidden md:block w-full h-full">
        <div className="w-full h-full overflow-hidden">
          <div
            className="flex transition-transform duration-1000 ease-in-out h-full"
            style={{
              width: `${desktopRosterImages.length * 100}%`,
              transform: `translateX(-${
                safeIndexDesktop * (100 / desktopRosterImages.length)
              }%)`,
            }}
          >
            {desktopRosterImages.map((img, i) => (
              <img
                key={i}
                src={img}
                alt={`Roster ${i + 1}`}
                className="object-cover w-full h-full"
                style={{
                  width: `${100 / desktopRosterImages.length}%`,
                  flexShrink: 0,
                }}
                loading="eager"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Mobile slider */}
      <section
        className="block md:hidden w-full h-full"
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        <div className="w-full h-full overflow-hidden">
          <div
            className="flex transition-transform duration-700 ease-in-out h-full"
            style={{
              width: `${mobileRosterImages.length * 100}%`,
              transform: `translateX(-${
                safeIndexMobile * (100 / mobileRosterImages.length)
              }%)`,
            }}
          >
            {mobileRosterImages.map((img, i) => (
              <img
                key={i}
                src={img}
                alt={`Mobile Roster ${i + 1}`}
                className="object-cover w-full h-full"
                style={{
                  width: `${100 / mobileRosterImages.length}%`,
                  flexShrink: 0,
                }}
                loading="eager"
              />
            ))}
          </div>
        </div>

        {/* Tiny dots indicator on mobile */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
          {mobileRosterImages.map((_, i) => {
            const active = i === safeIndexMobile;
            return (
              <span
                key={i}
                className={`h-1.5 w-1.5 rounded-full ${
                  active ? "bg-white" : "bg-white/40"
                }`}
              />
            );
          })}
        </div>
      </section>
    </main>
  );
}

