export default function PersonCard({ name, image }) {
    return (
      <div className="text-center hover:opacity-90 transition-all">
        <img
          src={image}
          alt={name}
          className="w-full h-60 object-cover rounded shadow-md"
        />
        <h2 className="mt-2 font-bold text-yellow-400 text-lg">{name}</h2>
      </div>
    );
  }  