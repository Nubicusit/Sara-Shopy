import React from "react";

const categories = [
  {
    title: "Chicken, Meat & Fish",
    items: [
      "Exotic Meat",
      "Chicken",
      "Sausage, Salami & Ham",
      "Fish & Seafood",
      "Mutton",
    ],
  },
  {
    title: "Pet Care",
    items: [
      "Dog Food & Treats",
      "Pet Grooming & Accessories",
      "Accessories & Other Supplies",
      "Other Pet Supplies",
      "Pet Litter",
      "Cat Food & Treats",
      "Cat Treats",
      "Dog Treat",
      "Pet Health & Supplements",
      "Pet Toys",
    ],
  },
  {
    title: "Baby Care",
    items: [
      "Baby Diapers",
      "Baby Wipes",
      "Baby's Health & Safety Tools",
      "Baby Gift Hampers",
      "Baby Bathing Needs",
      "Baby Food",
      "Other Diapering Needs",
      "Baby Feeding Needs",
      "Hygiene",
      "Oral & Nasal Care",
      "Diapers & Wipes",
      "Baby Skin & Hair Care",
      "Mom Care",
      "Nursing",
    ],
  },
  {
    title: "Magazines",
    items: [
      "Current Affairs & Business",
      "Current Affairs Books",
      "Lifestyle Books",
      "Architecture Books",
      "Business Books",
      "Children's Books",
      "Hobby Books",
    ],
  },
  {
    title: "Sweet Tooth",
    items: [
      "Flavoured Yogurts",
      "Indian Sweets",
      "Chocolate Packs",
      "Ice Cream & Frozen Dessert",
      "Chocolates",
      "Chocolate Syrup",
    ],
  },
];

const CategoryList = () => {
  return (
    <div className="bg-white text-black font-sans p-6 max-w-6xl mx-auto">
      <h2 className="font-bold text-2xl mb-8 pb-3 border-b border-gray-200">
        Categories
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-8">
        {categories.map((category) => (
          <div key={category.title} className="space-y-2">
            <h3 className="font-semibold text-lg text-gray-800 mb-3 pb-1 border-b border-gray-100">
              {category.title}
            </h3>
            <ul className="space-y-2">
              {category.items.map((item) => (
                <li
                  key={item}
                  className="text-gray-600 hover:text-yellow-500 transition-colors duration-200 pl-3 -ml-3 hover:pl-4 hover:font-medium"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryList;
