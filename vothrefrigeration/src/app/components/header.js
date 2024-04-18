import Link from "next/link";

export default function Header(){
  return(
    <nav className="bg-secondary text-primary p-4 fixed w-full z-50">
      <div className="flex items-center justify-between mx-4">
        <div className="flex items-center space-x-4">
          <img className="h-12 w-12" src="/images/logoipsum-245.svg"/>
          <h1 className="text-2xl font-semibold">Voth Refrigeration & Services</h1>
        </div>
        <div className="flex items-baseline space-x-2 text-1xl">
          <Link href="/" className="hover:bg-primary hover:text-secondary rounded-md px-3 py-2">Home</Link>
          <Link href="/contact" className="hover:bg-primary hover:text-secondary rounded-md px-3 py-2">Contact</Link>
        </div>
      </div>
    </nav>
  )
}
