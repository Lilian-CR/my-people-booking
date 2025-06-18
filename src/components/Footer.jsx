import { useState } from "react";

export default function Footer() {
  const [openModal, setOpenModal] = useState(null); // 'imprint' or 'data'

  const closeModal = () => setOpenModal(null);

  return (
    <>
      <footer className="bg-primary text-black text-sm py-2 px-4">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-center">
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

          {/* Copyright */}
          <div className="text-xs">MY PEOPLE BOOKING - ©2025</div>

          {/* Legal Links */}
          <div className="flex gap-4 text-xs">
            <button
              className="underline hover:text-white"
              onClick={() => setOpenModal("imprint")}
            >
              IMPRINT
            </button>
            <button
              className="underline hover:text-white"
              onClick={() => setOpenModal("data")}
            >
              DATA PROTECTION
            </button>
          </div>
        </div>
      </footer>

      {/* IMPRINT MODAL */}
      {openModal === "imprint" && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 px-4">
          <div className="bg-white text-black rounded-lg max-w-2xl w-full p-6 overflow-y-auto max-h-[90vh]">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-bold">IMPRINT</h2>
              <button onClick={closeModal} className="text-black text-xl">&times;</button>
            </div>
            <div className="text-sm space-y-4 text-left text-justify">
              <p><strong>MY PEOPLE BOOKING</strong> is organised by a civil person, and it's not (yet) a registered business.</p>
              <p><strong>L.C. Rodrigues</strong><br />
              10249 - Berlin<br />
              Email: mypeoplebooking @ gmail . com<br />
              Web: www.mypeoplebooking.net</p>
              <p><strong>Content responsibility:</strong><br />
              L.C. Rodrigues - mypeoplebooking @ gmail . com</p>
            </div>
          </div>
        </div>
      )}

      {/* DATA PROTECTION MODAL */}
      {openModal === "data" && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 px-4">
          <div className="bg-white text-black rounded-lg max-w-2xl w-full p-6 overflow-y-auto max-h-[90vh]">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-bold">DATA PROTECTION</h2>
              <button onClick={closeModal} className="text-black text-xl">&times;</button>
            </div>
            <div className="text-sm space-y-4 text-left text-justify">
              <p>In this data protection declaration we inform you about the processing of personal data when using this website.</p>

              <p><strong>Responsible for data processing:</strong><br />
              L. C. Rodrigues<br />
              10249 Berlin<br />
              Email: mypeoplebooking @ gmail . com</p>

              <p>Personal data is any information relating to an identified or identifiable natural person. An identifiable person can be identified, directly or indirectly, particularly by reference to a name, ID number, location data, online identifier, or one or more features relating to their identity.</p>

              <p><strong>Data when the website is accessed:</strong> If you use this website for information only, we only process the data required to display the site on your device. These include:</p>
              <ul className="list-disc list-inside">
                <li>IP address</li>
                <li>Date and time of the request</li>
                <li>Amount of data transferred</li>
                <li>Website from which the request originated</li>
                <li>Browser type and version</li>
                <li>Operating system</li>
              </ul>

              <p>The legal basis for processing is our legitimate interest according to Article 6(1)(f) GDPR to enable website functionality.</p>

              <p>You may also use various services on the site where additional personal or non-personal data may be processed.</p>

              <p><strong>Your rights:</strong></p>
              <ul className="list-disc list-inside">
                <li>Right to access (Art. 15 GDPR)</li>
                <li>Right to rectification (Art. 16 GDPR)</li>
                <li>Right to erasure (Art. 17 GDPR)</li>
                <li>Right to restrict processing (Art. 18 GDPR)</li>
                <li>Right to data portability (Art. 20 GDPR)</li>
                <li>Right to object to processing (Art. 21 GDPR)</li>
                <li>Right not to be subject to automated decisions (Art. 22 GDPR)</li>
                <li>Right to lodge a complaint with a supervisory authority (Art. 77 GDPR)</li>
              </ul>

              <p><em>Source: Sample data protection declaration from anwalt.de</em></p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
