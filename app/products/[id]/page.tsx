
import { products } from "../../data/products";
import Image from "next/image";


export default async function ProductDetails({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const product = products.find(
    (p) => String(p.id) === id
  );
   

  if (!product) {
    return <h1 className="p-10">Product not found</h1>;
  }

  return (
    <div className="min-h-screen bg-white text-black p-10">

      <div className="grid md:grid-cols-2 gap-12 items-center">

        {/* IMAGE */}
        <div>
          <Image
            src={product.image}
            alt={product.name}
            width={500}
            height={500}
            className="rounded-lg"
          />
        </div>

        {/* DETAILS */}
        <div className="flex flex-col gap-4">

          <p className="text-gray-400 uppercase tracking-widest text-sm">
            PERFUMES WOMEN
          </p>

          <h1 className="text-4xl font-bold">
            {product.name}
          </h1>

          <p className="text-2xl font-semibold">
            ${product.price}
          </p>

          <p className="text-gray-600">
            Size: 100ml
          </p>

          <div className="flex items-center gap-4">
            <button className="px-3 py-1 border">-</button>
            <span>1</span>
            <button className="px-3 py-1 border">+</button>
          </div>

          <div className="flex flex-col gap-3 mt-4">
            <button className="bg-black text-white py-3 rounded">
              ADD TO CART
            </button>

            <button className="border border-black py-3 rounded">
              BUY NOW
            </button>
          </div>

          <p className="text-gray-600 mt-4 leading-7">
            Elegant fragrance designed for long-lasting freshness and luxury feel.
          </p>

        </div>

      </div>
    </div>
  );
}