import ProductCard from "../../components/ProductCard";
import products from "../../data/product";

export default function CategoryPage() {
  return (
    <div className="max-w-[1400px] mx-auto px-2 md:px-4 my-4">
      {/* Main container with proper spacing */}
      <div className="flex flex-col lg:flex-row gap-4">
        {/* Left navigation - sticky on desktop, scrollable on mobile */}
        <div className="lg:sticky lg:top-16 lg:h-[calc(100vh-4rem)] lg:overflow-y-auto">
          <nav className="flex lg:flex-col gap-2 overflow-x-auto lg:overflow-x-visible py-2 bg-white lg:w-48 text-sm font-medium text-gray-700 scrollbar-hide border-b lg:border-b-0 border-gray-200">
            {[
              {
                name: "OS",
                icon: "../img/products/product1.avif",
              },
              {
                name: "Dry Fruits",
                icon: "../img/products/product1.avif",
              },
              {
                name: "Ghee & Vanaspati",
                icon: "../img/products/product2.avif",
              },
              {
                name: "Powdered Spices",
                icon: "../img/products/product3.avif",
                active: true,
              },
              {
                name: "Dates & Seeds",
                icon: "../img/products/product4.avif",
              },
              {
                name: "Salt, Sugar & Jaggery",
                icon: "../img/products/product5.avif",
              },
            ].map((item) => (
              <button
                key={item.name}
                className={`flex items-center gap-3 px-3 py-2 rounded-lg whitespace-nowrap min-w-max ${
                  item.active
                    ? "bg-gray-100 font-semibold text-black"
                    : "text-gray-600 hover:bg-gray-50"
                }`}
              >
                <img
                  alt=""
                  className="w-5 h-5 md:w-6 md:h-6 flex-shrink-0"
                  src={item.icon}
                />
                <span>{item.name}</span>
              </button>
            ))}
          </nav>
        </div>

        {/* Right content area with proper top spacing */}
        <div className="flex-1 lg:pl-4">
          <h1 className="text-lg md:text-xl font-medium mb-4 md:mb-6 pt-2">
            Buy Powdered Spices online
          </h1>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 mt-4">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
