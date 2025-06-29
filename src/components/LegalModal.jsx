// src/components/LegalModal.jsx
import React from "react";

export default function LegalModal({ type, onClose }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 px-4">
      <div className="bg-white text-black rounded-lg max-w-2xl w-full p-6 overflow-y-auto max-h-[90vh]">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-bold">{type === "imprint" ? "IMPRINT" : "DATA PROTECTION"}</h2>
          <button onClick={onClose} className="text-black hover:text-gray-600 text-xl">&times;</button>
        </div>

        <div className="text-sm space-y-4 text-left text-justify">
          {type === "imprint" ? (
            <>
              <p><strong>MY PEOPLE BOOKING</strong> is organised by a civil person, and it’s not (yet) a registered business.</p>
              <p><strong>L.C. Rodrigues</strong><br />
                10249 - Berlin<br />
                Email: mypeoplebooking @ gmail . com<br />
                Web: www.mypeoplebooking.net</p>
              <p><strong>Content responsibility:</strong><br />
                L.C. Rodrigues - mypeoplebooking @ gmail . com</p>
            </>
          ) : (
            <>
              <p>In this data protection declaration we inform you about the processing of personal data when using this website.</p>
              <p><strong>Responsible for data processing:</strong><br />
                L. C. Rodrigues<br />
                10249 Berlin<br />
                Email: mypeoplebooking @ gmail . com</p>
              <p>Personal data is any information relating to an identified or identifiable natural person...</p>
              <p><strong>Data when the website is accessed:</strong> If you use this website for information only, we only process:</p>
              <ul className="list-disc list-inside">
                <li>IP address</li>
                <li>Date and time of the request</li>
                <li>Amount of data transferred</li>
                <li>Website from which the request originated</li>
                <li>Browser type and version</li>
                <li>Operating system</li>
              </ul>
              <p>The legal basis for processing is our legitimate interest...</p>
              <p><strong>Your rights:</strong></p>
              <ul className="list-disc list-inside">
                <li>Right to access (Art. 15 GDPR)</li>
                <li>Right to rectification (Art. 16 GDPR)</li>
                <li>Right to erasure (Art. 17 GDPR)</li>
                <li>Right to restrict processing (Art. 18 GDPR)</li>
                <li>Right to data portability (Art. 20 GDPR)</li>
                <li>Right to object to processing (Art. 21 GDPR)</li>
                <li>Right not to be subject to automated decisions (Art. 22 GDPR)</li>
                <li>Right to lodge a complaint (Art. 77 GDPR)</li>
              </ul>
              <p><em>Source: Sample data protection declaration from anwalt.de</em></p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}