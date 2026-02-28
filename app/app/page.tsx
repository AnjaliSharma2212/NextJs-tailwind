'use client'
import DashBoardCard from "./components/DashBoard.card";
import SimpleBottomNavigation from "./components/Footer";
import Header from "./components/Header";
import ProductCard from "./components/ProductPage";
import UsersPage from "./users/page";



const products = [
  {
    id: 1,
    title: "Phone",
    price: 20000,
    description: "Latest 5G smartphone",
    inStock: true,
  },
  {
    id: 2,
    title: "Laptop",
    price: 60000,
    description: "High performance laptop",
    inStock: false,
  },
]
export default function Home() {
  return (
    <>
      <Header />

      {/* HERO SECTION */}
      <section className="bg-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-gray-800">
            Build Modern UI with Tailwind
          </h2>
          <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
            Learn utility-first CSS with practical examples in React and Next.js.
          </p>
          <button className="mt-8 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
            Get Started
          </button>
        </div>
      </section>
      <div className="min-h-screen bg-gray-50 p-10 grid md:grid-cols-2 gap-6">
  <DashBoardCard />
 
</div>
    <h2>Dashboard</h2>
    <UsersPage/>
      <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">
        Featured Products
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </main>
    <SimpleBottomNavigation/>
     </>
  );
}
