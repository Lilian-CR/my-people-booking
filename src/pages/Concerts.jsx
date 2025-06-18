export default function Concerts() {
  return (
    <div className="bg-white py-12 px-6">
      <div className="max-w-4xl mx-auto text-black">
        {/* Top Main Image - centered */}
        <div className="flex justify-center mb-8">
          <img
            src="/images/concerts-main.jpg"
            alt="Concert crowd"
            className="w-full max-w-3xl rounded"
          />
        </div>

        {/* Centered Title */}
        <h1 className="text-4xl font-black uppercase mb-6 text-center">
          2025 Series | FLINTA* IM KIEZ
        </h1>

        {/* Justified Paragraphs */}
        <div className="text-justify">
          <p className="mb-4">
            <strong>FLINTA* IM KIEZ</strong> is a monthly concert series organized by <strong>MY PEOPLE BOOKING</strong> in Berlin, aimed at providing a platform for underrepresented musicians in the city's alternative rock and punk scenes. The series specifically focuses on <strong>FLINTA*</strong> (women, lesbians, inter people, non-binary people, trans people, and agender people) artists who often face challenges in spaces dominated by cisgender male musicians.
          </p>

          <p className="mb-4">
            The concert series will take place across Berlin, reaching different communities and supporting the city’s rich underground music culture. The initiative also responds to the struggles faced by small venues, which have been hit by rising costs and economic downturns.
          </p>

          <p className="mb-4">
            Additionally, <strong>FLINTA* IM KIEZ</strong> will implement <strong>sliding scale pricing</strong> for tickets, making shows more accessible to a wider range of people — particularly those from marginalized communities such as FLINTA*, BIPoC, and migrants.
          </p>

          <p className="mb-4 bg-teal-800 text-white font-semibold p-4 rounded">
            The concert series is made possible in part by the support of <strong>MusicBoard Berlin</strong>, as part of the <em>Pop Im Kiez</em> funding programme, without which this project would not be possible.
          </p>
        </div>

        {/* Side by side logos */}
        <div className="flex justify-center items-center gap-6 mt-10 flex-wrap">
          <img
            src="/images/concerts-popimkiez-banner.png"
            alt="Pop im Kiez Banner"
            className="h-24 object-contain"
          />
          <img
            src="/images/musicboard-logo.jpg"
            alt="Musicboard Berlin Logo"
            className="h-24 object-contain"
          />
        </div>
      </div>
    </div>
  );
}
