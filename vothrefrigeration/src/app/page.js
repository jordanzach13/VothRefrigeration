import Services from "./components/service";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen p-0">
      <div className="flex flex-grow flex-col w-full mt-16 space-y-8 pb-16">

        {/* Hero Section */}
        <div className="flex flex-col items-center justify-center text-center h-screen mb-16 bg-hero rounded-md shadow-lg hero-text">
          <h1 className="text-5xl font-extrabold mb-4">Welcome to Voth Refrigeration</h1>
          <p className="text-xl leading-relaxed mb-6">
            Specializing in commercial and residential refrigeration needs.
          </p>
          <button className="hero-button py-3 px-8 rounded-md shadow-md">
            <Link href="/contact">Contact Us</Link>
          </button>
        </div>

        {/* Mission Statement */}
        <div className="flex-grow flex justify-center items-center px-8">
          <div className="bg-white rounded-md p-8 shadow-md max-w-4xl">
            <h2 className="text-4xl font-bold mb-4 text-secondary text-center">Why Choose Us</h2>
            <p className="text-lg leading-relaxed text-gray-700 text-center">
              Voth Refrigeration specializes in your commercial and residential needs. Our mission is to make it easy for our clients to do business with us. We take pride in our efficiency, honesty, and quick responses to your needs. We never compromise on the quality of our work and the services we provide.
            </p>
          </div>
        </div>

        {/* Services Section */}
        <div className="flex-grow text-secondary px-16">
          <Services/>
        </div>
      </div>
    </main>
  );
}
