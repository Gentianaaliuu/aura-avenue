
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black text-white px-6 md:px-10 py-10 mt-10">

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* LEFT */}
        <div className="text-center md:text-left">

          <h2 className="text-lg font-semibold uppercase">
            Contact Us
          </h2>

          <div className="mt-3 text-sm text-gray-300 space-y-1">
            <p>Phone: +383 49 000 111</p>
            <p>Phone: +383 44 222 333</p>
            <p>Email: support@auraavenue.com</p>
          </div>
          </div>

            {/* Middle */}
          <div className="text-center">

          <h2 className="text-lg font-semibold uppercase">
            Social Media
          </h2>

          <div className="mt-3 text-sm text-gray-300 space-y-1">
            <p>Instagram: AuraAvenue</p>
            <p>Facebook: Aura Avenue</p>
            <p>Youtube: Aura Avenue</p>
          </div>
          </div>

         {/* QUICK LINKS */}
<div className="text-center md:text-center">
  <h2 className="text-lg font-semibold uppercase">
    Quick Links
  </h2>

  <div className="mt-3 text-sm text-gray-300 ">
    

    <Link href="/products" className="block hover:text-white transition">
      Perfumes
    </Link>

    <Link href="/products" className="block hover:text-white transition">
      Perfumes For Men
    </Link>

    <Link href="/products" className="block hover:text-white transition">
      Diffusers
    </Link>
  </div>
</div>

         

        

        {/* RIGHT */}
        <div className="max-w-md text-center md:text-right">

          <h2 className="text-lg font-semibold uppercase">
            Privacy Policy
          </h2>

          <p className="mt-3 text-sm text-gray-400 leading-6">
            We respect your privacy and protect your personal data.
            All information is used only to improve your shopping experience
            and ensure secure transactions.
          </p>

        </div>

      </div>

      {/* BOTTOM */}
      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-gray-500 text-sm">
        © 2026 Aura Avenue. All rights reserved.
      </div>

    </footer>
  );
}