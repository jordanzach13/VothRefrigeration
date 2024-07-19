export default function Footer() {
  return (
    <footer className="text-primary p-6">
      <div className="flex flex-col items-center max-w-7xl mx-auto">
        <div className="flex flex-col items-center space-y-4 mb-4">
          <div className="h-36 w-36 flex-shrink-0 rounded-lg overflow-hidden">
            <img className="h-full w-full object-cover" src="/images/Voth__Refridgeration_LLC_logo.png" alt="Logo" />
          </div>
          <h2 className="text-lg font-semibold">© Voth Refrigeration & Services 2024</h2>
        </div>
        
        <div className="flex flex-row space-x-6 text-center">
          <p>
            <a href="tel:+14355126185">(435)-512-6158</a>
          </p>
          <p>
            <a href="mailto:vothservices@gmail.com">vothservices@gmail.com</a>
          </p>
          <p href="P.O. Box 205 Wellsville, UT, 84319">P.O. Box 205 Wellsville, UT, 84319</p>
        </div>
      </div>
    </footer>
  );
}
