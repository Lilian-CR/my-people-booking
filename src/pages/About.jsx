export default function About() {
  return (
    <div className="bg-white py-16 px-4 text-black">
      <div className="max-w-5xl mx-auto">
        <p className="mb-6 text-justify">
          <strong>MY PEOPLE BOOKING</strong> is the continuation of MY PEOPLE RECORDS efforts, which aims to bring more diversity to the hardcore, punk, metal and in between, alternative music scene concerts in Berlin/DE.
        </p>

        <p className="mb-6 text-justify">
          Acts also by booking well-known alternative/underground bands from Germany, Europe and other parts of the world to perform in Berlin or to Tour in the EU/UK. Bands that didn't pass the filtering process of the "white cis guy casting only", that apparently happens by a huge coincidence in all big European cities, from small club gigs to big festivals. So I have been told.
        </p>

        <div className="mb-8 text-center font-bold uppercase leading-tight">
          <p>By the people, for the people</p>
          <p>BIPoC & / or FLINTA* focused</p>
          <p>home of MY PEOPLE FEST</p>
        </div>

        <div className="text-sm">
          <p className="mb-2">
            <strong>BIPoC:</strong>{' '}
            <em>
              The acronym stands for “Black, Indigenous and People of Colour”, and it’s a term from the Anglo-American world that describes those individuals and groups who are exposed to various forms of racism, and aims to emphasize the historic oppression of black, indigenous and people of colour.
            </em>
          </p>
          <p>
            <strong>FLINTA*:</strong>{' '}
            <em>
              Stands for “women*, lesbians, inter people, non binary people, trans people and agender people”, translated from the German acronym “Frauen*, Lesben, Inter Menschen, Nichtbinäre Menschen, Trans Menschen und Agender Menschen”.
            </em>
          </p>
        </div>
      </div>
    </div>
  );
}
