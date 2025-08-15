import { useEffect, useState } from "react";

const rosterImages = [
  "/images/roster1.jpg",
  "/images/roster2.jpg",
  "/images/contact-band.jpg",
  "/images/roster3.jpg",
  "/images/roster4.jpg",
  "/images/roster5.jpg",
  "/images/roster6.jpg",
  "/images/roster7.jpg",
  "/images/roster8.jpg",
];

export default function Home() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % rosterImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
  <div className="h-[calc(100vh-56px-48px)] overflow-hidden"> {/* 56px nav + 48px footer */}
    {/* Desktop Slider */}
    <div className="hidden md:block w-full h-full">
      <div className="w-full h-full overflow-hidden">
        <div
          className="flex transition-transform duration-1000 ease-in-out h-full"
          style={{
            width: `${rosterImages.length * 100}%`,
            transform: `translateX(-${index * (100 / rosterImages.length)}%)`,
          }}
        >
          {rosterImages.map((img, i) => (
            <img
              key={i}
              src={img}
              alt={`Roster ${i + 1}`}
              className="object-cover w-full h-full"
              style={{
                width: `${100 / rosterImages.length}%`,
                flexShrink: 0,
              }}
            />
          ))}
        </div>
      </div>
    </div>

    {/* Mobile Hero Pic */}
    <img
      src="/images/Mobile-Hero.jpg"
      alt="Mobile Hero"
      className="block md:hidden h-full w-full object-cover"  // <- cover, no white bars
    />
  </div>
);
}

