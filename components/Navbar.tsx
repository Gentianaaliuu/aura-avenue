import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="bg-white text-black shadow-md">

      {/* TOP BAR */}
      <div className="flex flex-col md:flex-row items-center justify-between px-4 md:px-8 py-4 gap-4 md:gap-0">

        {/* LOGO */}
        <Link href="/">
          <Image
            src="/Aura-Logo-Black-1.png"
            alt="Aura Avenue Logo"
            width={140}
            height={60}
          />
        </Link>

        {/* SEARCH */}
        <div className="w-full md:w-1/3">
          <input
            type="text"
            placeholder="Search perfumes..."
            className="w-full border rounded-lg px-4 py-2"
          />
        </div>

        {/* ICONS */}
        <div className="flex items-center gap-6 text-2xl">
          <button className="text-3xl hover:scale-110 transition">♡</button>
          <button className="hover:scale-110 transition">🛒</button>
          <button className="hover:scale-110 transition">👤</button>
        </div>
      </div>

      {/* MENU */}
      <nav className="border-t py-3 overflow-x-auto">
        <ul className="flex md:justify-center gap-6 md:gap-10 font-medium px-4 md:px-0 whitespace-nowrap">

          <li className="hover:underline underline-offset-4 cursor-pointer">
            <Link href="/">Home</Link>
          </li>

          <li className="hover:underline underline-offset-4 cursor-pointer">
            <Link href="/products">Perfumes</Link>
          </li>

          <li className="hover:underline underline-offset-4 cursor-pointer">
            <Link href="/products">Perfumes For Men</Link>
          </li>

          <li className="hover:underline underline-offset-4 cursor-pointer">
            <Link href="/products">Diffusers</Link>
          </li>

        </ul>
      </nav>

    </header>
  );
}