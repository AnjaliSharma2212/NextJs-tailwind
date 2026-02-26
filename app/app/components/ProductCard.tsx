type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
};

type Props = {
  product: Product;
};

export default function ProductCard({ product }: Props) {
  return (
    <div className="border rounded-lg p-4 shadow-md">
      <h2 className="text-lg font-semibold text-sky-600">
        {product.title}
      </h2>

      <p className="text-gray-600 text-sm mt-2">
        {product.description}
      </p>

      <p className="text-green-600 font-bold mt-3">
        ₹ {product.price}
      </p>
    </div>
  );
}