
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black text-white px-6 md:px-10 py-10 mt-10">

      <div className="flex flex-col md:flex-row justify-between gap-10">

        {/* LEFT */}
        <div className="text-center md:text-left">

          <h2 className="text-lg font-semibold">
            Contact Us
          </h2>

          <div className="mt-3 text-sm text-gray-300 space-y-1">
            <p>Phone: +383 49 000 111</p>
            <p>Phone: +383 44 222 333</p>
            <p>Email: support@auraavenue.com</p>
          </div>

          {/* SOCIAL ICONS */}
          <div className="flex justify-center md:justify-start gap-4 mt-5">

            {/* Instagram */}
            <Link href="#">
              <svg className="w-5 h-5 fill-white hover:opacity-70 transition" viewBox="0 0 24 24">
                <path d="M7 2C4.24 2 2 4.24 2 7v10c0 2.76 2.24 5 5 5h10c2.76 0 5-2.24 5-5V7c0-2.76-2.24-5-5-5H7zm10 2a3 3 0 1 1 0 6 3 3 0 0 1 0-6zM12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10z"/>
              </svg>
            </Link>

            {/* Facebook */}
            <Link href="#">
              <svg className="w-5 h-5 fill-white hover:opacity-70 transition" viewBox="0 0 24 24">
                <path d="M22 12a10 10 0 1 0-11.5 9.9v-7H8v-3h2.5V9.8c0-2.5 1.5-3.8 3.7-3.8 1 0 2 .2 2 .2v2.2H15c-1.1 0-1.5.7-1.5 1.4V12H18l-.5 3h-3v7A10 10 0 0 0 22 12z"/>
              </svg>
            </Link>

            {/* YouTube */}
            <Link href="#">
              <svg className="w-5 h-5 fill-white hover:opacity-70 transition" viewBox="0 0 24 24">
                <path d="M23 12s0-3.2-.4-4.6a3 3 0 0 0-2.1-2.1C18.3 5 12 5 12 5s-6.3 0-8.5.3a3 3 0 0 0-2.1 2.1C1 8.8 1 12 1 12s0 3.2.4 4.6a3 3 0 0 0 2.1 2.1C5.7 19 12 19 12 19s6.3 0 8.5-.3a3 3 0 0 0 2.1-2.1C23 15.2 23 12 23 12zM10 15V9l6 3-6 3z"/>
              </svg>
            </Link>

          </div>

        </div>

        {/* RIGHT */}
        <div className="max-w-md text-center md:text-right">

          <h2 className="text-lg font-semibold">
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