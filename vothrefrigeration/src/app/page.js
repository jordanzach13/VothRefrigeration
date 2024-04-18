import Services from "./components/service";

export default function Home() {


  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 pt-16">
      <div className="max-w-4xl w-full mt-16 space-y-4">
        <div className="bg-white rounded-md p-8 shadow-md">
          <h2 className="text-3xl font-bold mb-4 text-secondary">Mission Statement</h2>
          <p className="text-lg leading-relaxed text-gray-700">
            Voth Refrigeration specializes in your commercial and residential needs. Our mission is to make it easy for our clients to do business with us. We take pride in our efficiency, honesty, and quick responses to your needs. We never compromise on the quality of our work and the services we provide.
          </p>
        </div>
        <div className="text-secondary w-full">
          <Services/>
        </div>
      </div>
    </main>
  );
}
