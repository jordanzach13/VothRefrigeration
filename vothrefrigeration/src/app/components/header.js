import Link from "next/link";

export default function Header() {
  return (
    <nav className="bg-secondary text-primary p-4 fixed w-full z-50">
      <div className="flex flex-col md:flex-row items-center justify-between mx-4">
        <div className="flex items-center space-x-4">
          <img className="h-12 w-12" src="/images/logoipsum-245.svg" alt="Logo" />
          <h1 className="text-xl font-semibold md:text-2xl">Voth Refrigeration & Services</h1>
        </div>
        <div className="flex md:flex-row items-center space-x-2 md:space-x-4 mt-4 md:mt-0">
          <Link href="/">
            <span className="cursor-pointer hover:bg-primary hover:text-secondary rounded-md px-3 py-2 text-sm md:text-base">Home</span>
          </Link>
          <Link href="/contact">
            <span className="cursor-pointer hover:bg-primary hover:text-secondary rounded-md px-3 py-2 text-sm md:text-base mt-2 md:mt-0 md:ml-2">Contact</span>
          </Link>
        </div>
      </div>
    </nav>
  );
}
