import Link from "next/link";

export default function Header() {
  return (
    <nav className="text-primary p-2 fixed w-full z-50 bg-primary md:bg-transparent md:backdrop-filter md:backdrop-blur-sm nav-border">
      <div className="flex flex-col md:flex-row items-center justify-between mx-4 backdrop-filter">
        <div className="flex items-center space-x-4">
          <div className="h-12 w-12 flex-shrink-0 rounded-lg overflow-hidden">
            <img className="h-full w-full object-cover" src="/images/voth_logo.svg" alt="Logo" />
          </div>
          <h1 className="text-xl font-semibold md:text-2xl">Voth Refrigeration & Services</h1>
        </div>

        <div className="flex flex-col md:flex-row items-start md:items-center mt-4 md:mt-0 space-y-2 md:space-y-0 space-x-0 md:space-x-2 w-full md:w-auto">
          <Link href="/">
            <span className="cursor-pointer block hover:bg-accent rounded-md px-3 py-2 text-sm border md:mr-2 w-full md:w-auto">Home</span>
          </Link>
          <Link href="/contact">
            <span className="bg-secondary text-secondary cursor-pointer block hover:bg-accent2 rounded-md px-3 py-2 text-sm border w-full md:w-auto">Contact</span>
          </Link>
        </div>
      </div>
    </nav>
  );
}
