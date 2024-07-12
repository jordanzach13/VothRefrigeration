import Hero from "./components/hero";
import Services from "./components/service";
import Footer from "./components/footer";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen p-0">
      <div className="flex flex-grow flex-col w-full mt-32 space-y-6 pb-16">

        {/* Hero Section */}
        <Hero/>

        {/* Mission Statement */}
        <div className="flex-grow flex justify-center items-center px-8">
          <div className="rounded-md p-8 max-w-4xl text-primary">
            <h2 className="text-4xl font-bold mb-4 text-center">Why Choose Us</h2>
            <p className="text-lg leading-relaxed text-center">
              Voth Refrigeration specializes in your commercial and residential needs. 
              Our mission is to make it easy for our clients to do business with us. 
              We take pride in our efficiency, honesty, and our quick response to your needs. 
              We never compromise on the quality of our work and the services we provide.
            </p>
          </div>
        </div>

        {/* Services Section */}
        <div className="flex-grow text-primary px-16">
          <Services/>
        </div>

        {/* Footer */}
        <Footer/>
      </div>
    </main>
  );
}
