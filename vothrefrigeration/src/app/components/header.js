import Link from "next/link";

export default function Header() {
  return (
    <nav className="text-primary p-2 fixed w-full z-50 bg-primary md:bg-transparent md:backdrop-filter md:backdrop-blur-sm nav-border">
      <div className="flex flex-col md:flex-row items-center justify-between mx-4 backdrop-filter">
        <div className="flex items-center space-x-4">
          <img className="h-12 w-12" src="/images/logoipsum-245.svg" alt="Logo" />
          <h1 className="text-xl font-semibold md:text-2xl">Voth Refrigeration & Services</h1>
        </div>
        
        <div className="flex md:flex-row items-center space-x-2 mt-4 md:mt-0">
          <Link href="/">
            <span className="cursor-pointer block md:inline-block hover:bg-accent rounded-md px-3 py-2 text-sm border md:mr-2">Home</span>
          </Link>
          <Link href="/contact">
            <span className="bg-secondary text-secondary cursor-pointer block md:inline-block hover:bg-accent2 rounded-md px-3 py-2 text-sm border">Contact</span>
          </Link>
        </div>
      </div>
    </nav>
  );
}
