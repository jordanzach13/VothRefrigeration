import Link from "next/link";

export default function Hero() {
  return (
    <div className="relative flex flex-col items-center justify-center text-center hero-section mb-6 mt-8 md:mt-0 overflow-hidden">
      <div
        className="absolute inset-0 bg-center bg-no-repeat z-0 hero-image"
        style={{ backgroundImage: "url('images/wholelogo.png')", backgroundSize: 'contain' }}
      ></div>

      <div className="relative z-10 p-4 text-accent">
      {/* <div className="relative z-10 p-4 bg-primary-opacity text-white"> */}
        <h1 className="text-6xl font-extrabold mb-4">Welcome to Voth Refrigeration</h1>
        <p className="text-2xl leading-relaxed mb-6">
          Specializing in commercial and residential refrigeration needs.
        </p>
        {/* <button className="border hover:bg-accent text-white hero-button py-3 px-8 rounded-md shadow-md">
          <Link href="/contact">Contact Us</Link>
        </button> */}
      </div>
    </div>
  );
}
