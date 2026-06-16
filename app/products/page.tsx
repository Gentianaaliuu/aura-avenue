import Image from "next/image";
import { products } from "../data/products";
import Link from "next/link";

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-white text-black p-8">

      {/* TITLE */}
      <div className="text-center mb-6">
        <h1 className="text-4xl font-bold uppercase tracking-widest">Parfumes</h1>
        <p className="text-gray-500 mt-2">
         Carefully selected perfumes for you

        </p>
      </div>

      {/* FILTER BUTTONS */}
      <div className="flex justify-center gap-4 mb-10">
        <button className="px-5 py-2 rounded-full border hover:bg-black hover:text-white transition">
          All
        </button>

        <button className="px-5 py-2 rounded-full border hover:bg-black hover:text-white transition">
          Male
        </button>

        <button className="px-5 py-2 rounded-full border hover:bg-black hover:text-white transition">
          Female
        </button>
      </div>

      {/* PRODUCTS GRID */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        {products.map((product) => (
          <div
            key={product.id}
            className="border rounded-lg p-4 shadow hover:shadow-lg transition bg-white"
          >

            <Image
              src={product.image}
              alt={product.name}
              width={300}
              height={300}
              className="rounded-md"
            />

            <h2 className="font-bold mt-3">
              {product.name}
            </h2>

            <p className="text-gray-600">
              ${product.price}
            </p>

            <Link
            href={`/products/${product.id}`}
            className="mt-3 inline-block bg-black text-white px-4 py-2 rounded hover:opacity-80 transition"
            >
            View Product
           </Link>
          </div>
        ))}

      </div>

    </div>
  );
}