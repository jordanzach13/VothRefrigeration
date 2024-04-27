import Link from "next/link";

export default function Hero() {
  return (
    <div className="relative flex flex-col items-center justify-center text-center h-screen mb-16 overflow-y-scroll">
      {/* Background image with gradient overlay */}
      <div className="absolute inset-0 bg-cover bg-center z-0">
        {/* <img src="/path/to/your/background-image.jpg" alt="Background" className="w-full h-full object-cover opacity-60" /> */}
        {/* <div className="absolute inset-0 bg-gradient-to-t from-gray-800 via-gray-900 to-transparent opacity-90"></div> */}
      </div>

      {/* Content */}
      <div className="relative z-10 pb-16"> {/* Added padding to the bottom */}
        <h1 className="text-5xl font-extrabold mb-4 text-white">Welcome to Voth Refrigeration</h1>
        <p className="text-xl leading-relaxed mb-6 text-white">
          Specializing in commercial and residential refrigeration needs.
        </p>
        <button className="border hover:bg-accent text-white hero-button py-3 px-8 rounded-md shadow-md">
          <Link href="/contact">Contact Us</Link>
        </button>
      </div>
    </div>
  );
}
