export default function Contact() {
  return (
    <div className="bg-white text-black py-10 px-4">
      <div className="max-w-5xl mx-auto text-center space-y-10">

        {/* Band Image */}
        <img
          src="/images/contact-band.jpg" // Update this path if needed
          alt="Band Performing"
          className="w-1/2 mx-auto rounded shadow"
        />

        {/* Booking Info */}
        <div className="space-y-1">
          <h2 className="text-sm uppercase tracking-wide text-center mb-1">
            Local Concert<br />EU/UK Tour Booking
          </h2>
          <p className="text-lg">
            <span>mypeoplebooking</span>
            <span className="text-black"> @ </span>
            <span>gmail</span>
            <span className="text-black"> . </span>
            <span>com</span>
          </p>
        </div>

        {/* Mailchimp Form Box */}
        <div className="bg-[#467470] p-6 rounded max-w-xl mx-auto text-left text-white border border-black space-y-4">
          <p className="text-sm leading-relaxed">
            Are you a festival booker or a promoter of club/youth centre concerts? Subscribe here to receive
            first-hand updates on upcoming tours and additions to our roster.
          </p>

          <form
            action="https://mypeoplebooking.us21.list-manage.com/subscribe/post?u=f2f9b922ad945dd5169883f59&amp;id=f5f2be952d&amp;f_id=00c4f9e6f0"
            method="post"
            target="_blank"
            rel="noopener noreferrer"
          >
            <label htmlFor="mce-EMAIL" className="block text-sm mb-1">
              Email Address <span className="text-red-300">*</span>
            </label>
            <input
              type="email"
              name="EMAIL"
              id="mce-EMAIL"
              required
              className="w-full px-3 py-2 border border-gray-300 text-black rounded mb-2"
            />

            {/* Honeypot */}
            <div style={{ position: "absolute", left: "-5000px" }} aria-hidden="true">
              <input type="text" name="b_f2f9b922ad945dd5169883f59_f5f2be952d" tabIndex="-1" />
            </div>

            <button
              type="submit"
              className="bg-black hover:bg-gray-500 text-white px-4 py-2 rounded transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>

      </div>
    </div>
  );
}
