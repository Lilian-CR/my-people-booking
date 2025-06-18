import { useState } from "react";

export default function LegalModal() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => setIsOpen(!isOpen);

  return (
    <>
      <button
        onClick={toggleModal}
        className="text-xs underline hover:text-primary transition-colors"
      >
        IMPRINT & DATA PROTECTION
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 px-4">
          <div className="bg-white text-black rounded-lg max-w-2xl w-full p-6 overflow-y-auto max-h-[90vh]">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-bold">IMPRINT & DATA PROTECTION</h2>
              <button
                onClick={toggleModal}
                className="text-black hover:text-gray-600 text-xl"
              >
                &times;
              </button>
            </div>

            <div className="space-y-4 text-sm">
              <p><strong>Imprint</strong><br />
              My People Booking<br />
              Berlin, Germany<br />
              Email: hello@mypeoplebooking.com</p>

              <p><strong>Data Protection</strong><br />
              We do not collect personal data beyond what's required for the mailing list. No cookies. No analytics. Your email is only used for newsletters.</p>

              <p>
                If you wish to unsubscribe or request deletion of your data, contact us directly at the email above.
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
