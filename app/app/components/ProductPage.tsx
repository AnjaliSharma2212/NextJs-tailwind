import Link from "next/link";
import clsx from "clsx";

type Product = {
  id: number;
  title: string;
  price: number;
  inStock: boolean;
};

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Link href={`/products/${product.id}`}>
      <div
        className={clsx(
          "border rounded-lg p-4 space-y-2 transition hover:shadow-lg",
          product.inStock
            ? "bg-white"
            : "bg-gray-100 opacity-60"
        )}
      >
        <h2 className="text-lg font-semibold truncate">
          {product.title}
        </h2>

        <p className="text-green-600 font-bold text-xl">
          ₹ {product.price}
        </p>

        <span
          className={clsx(
            "text-xs font-medium px-2 py-1 rounded",
            product.inStock
              ? "bg-green-100 text-green-700"
              : "bg-red-100 text-red-700"
          )}
        >
          {product.inStock ? "In Stock" : "Out of Stock"}
        </span>
      </div>
    </Link>
  );
}