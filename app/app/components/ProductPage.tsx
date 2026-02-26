import ProductCard from "./ProductCard";


type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
};

export default async function ProductsPage() {
  const res = await fetch("https://fakestoreapi.com/products?limit=4");
  const products: Product[] = await res.json();

  return (
    <div className="grid grid-cols-2 gap-6">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
        />
      ))}
    </div>
  );
}