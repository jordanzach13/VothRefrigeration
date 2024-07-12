export default function Contact() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-8">
      <div className="bg-white p-8 rounded-md shadow-md w-full max-w-md mt-32 md:mt-0"> 
        <h1 className="text-3xl font-bold mb-4 text-accent text-center">Contact Us</h1>
        
        <div className="space-y-4 text-accent">
          
          <div className="flex flex-col space-y-2">
            <h2 className="text-xl font-semibold ">Phone</h2>
              <p>
                <a href="tel:+14355126185">(435)-512-6158</a>
              </p>
          </div>
          
          <div className="flex flex-col space-y-2">
            <h2 className="text-xl font-semibold ">Email</h2>
            <p>
              <a href="mailto:vothservices@gmail.com">vothservices@gmail.com</a>
            </p>
          </div>

          <div className="flex flex-col space-y-2">
            <h2 className="text-xl font-semibold">Address</h2>
            <p>P.O. Box 205</p>
            <p>Wellsville, UT, 84319</p>
          </div>
          
          <div className="flex flex-col space-y-2">
            <h2 className="text-xl font-semibold ">Hours</h2>
            <p>Monday - Friday: 7:00 AM - 5:00 PM</p>
            <p>Saturday & Sunday: Closed</p>
          </div>
        </div>
      </div>
    </main>
  );
}
