import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-4 bg-black text-white">
      <h1 className="font-bold">Aura Avenue 🛍️</h1>

      <div className="flex gap-4">
        <Link href="/">Home</Link>
        <Link href="/products">Products</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
        <Link href="/login">Login</Link>
      </div>
    </nav>
  );
}