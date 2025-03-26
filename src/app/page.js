import CategorySection from "@/app/components/CategorySection";
import ProductSection from "@/app/components/ProductSection";
import products from "@/app/data/products";
import Banner from "./components/Banner";
import CardSlider from "./components/CardSlider";

export default function HomePage() {
  return (
    <div className="container mx-auto px-4 py-6">
      {/* Banner */}
      <Banner />
      
      {/* Categories */}
      <CategorySection />

      {/* Products Sections */}
      <ProductSection
        title="Dairy, Bread & Eggs"
        products={products["Dairy, Bread & Eggs"]}
      />
      <ProductSection
        title="Snacks & Munchies"
        products={products["Snacks & Munchies"]}
      />

      {/* Carousel */}
      <div className="my-6">
        <CardSlider />
      </div>

      {/* More Products */}
      <ProductSection
        title="Cold Drinks & Juices"
        products={products["Cold Drinks & Juices"]}
      />
    </div>
  );
}


