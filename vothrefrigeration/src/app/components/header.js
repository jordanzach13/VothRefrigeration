import Link from "next/link";

export default function Header() {
  return (
    <nav className="text-primary p-2 fixed w-full z-50 bg-accent nav-border">
      <div className="flex flex-col md:flex-row items-center justify-between mx-4 backdrop-filter">
        <div className="flex items-center space-x-4">
          <div className="h-12 w-12 flex-shrink-0 rounded-lg overflow-hidden">
            <img className="h-full w-full object-cover" src="/images/Voth__Refridgeration_LLC_logo.png" alt="Logo" />
          </div>
          <h1 className="text-xl font-semibold md:text-2xl">Voth Refrigeration & Services</h1>
        </div>
        
        <div className="flex flex-row items-center space-x-2 mt-4 md:mt-0 w-full md:w-auto justify-start md:justify-end">
          <Link href="/">
            <span className="bg-secondary text-secondary cursor-pointer block md:inline-block hover:bg-accent2 rounded-md px-3 py-2 text-sm border">Home</span>
          </Link>
          <Link href="/contact">
            <span className="bg-secondary text-secondary cursor-pointer block md:inline-block hover:bg-accent2 rounded-md px-3 py-2 text-sm border">Contact</span>
          </Link>
        </div>
      </div>
    </nav>
  );
}
