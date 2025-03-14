import Image from "next/image";
import categories from "@/app/data/categories";

const CategorySection = () => {
  return (
    <div className="overflow-x-auto whitespace-nowrap py-4 px-4 scrollbar-hide">
      <div className="flex space-x-4">
        {categories.map((category) => (
          <div key={category.id} className="min-w-[80px] text-center">
            <Image
              src={category.image}
              alt={category.name}
              width={80}
              height={80}
              className="mx-auto"
            />
            {/* <p className="text-sm mt-1">{category.name}</p> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategorySection;
