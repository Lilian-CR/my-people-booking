import { useState } from "react";
import roster from "../data/roster";
import BandPage from "./BandPage";

export default function Roster() {
  const [selectedBand, setSelectedBand] = useState(null);

  const closeModal = () => {
    setSelectedBand(null);
  };

  return (
    <div className="bg-white min-h-[600px] py-12 px-6 relative">
      {/* Band Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {[...roster]
          .sort((a, b) => a.name.localeCompare(b.name))
          .map((band) => (
            <div
              key={band.id}
              onClick={() => setSelectedBand(band)}
              className="group cursor-pointer"
            >
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

      {/* Modal overlay */}
      {selectedBand && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 px-4">
          <div className="bg-white rounded-lg max-w-[650px] w-full relative overflow-y-auto max-h-[90vh] p-6 shadow-lg">
            {/* Close */}
            <button
              className="absolute top-8 right-12 text-xl text-gray-400 hover:text-black z-50"
              onClick={closeModal}
              aria-label="Close"
              type="button"
            >
              &times;
            </button>

            {/* Band content */}
            <BandPage band={selectedBand} />
          </div>
        </div>
      )}
    </div>
  );
}
