"use client";
import { useState } from "react";



const ProductCard = ({ product }) => {
  const [quantity, setQuantity] = useState(0);

  return (
    <div className="border border-gray-200 rounded-lg p-4 relative w-45 shadow-sm">
      {" "}
      {/* Set fixed width */}
      {product.off && (
        <div className="bg-[#FF8800] text-white text-xs px-2 py-1 rounded-full absolute top-2 left-2">
          {product.off}
        </div>
      )}
      <img
        alt={product.name}
        className="w-full h-32 object-contain mb-4"
        src={product.image}
      />
      <div className="text-gray-500 text-xs mb-2">
        <i className="far fa-clock"></i> {product.time}
      </div>
      <h2 className="text-sm font-semibold mb-2 truncate">{product.name}</h2>
      <p className="text-gray-500 text-xs mb-2">{product.size}</p>
      <div className="flex justify-between items-center">
        <span className="text-sm font-bold">₹{product.price}</span>
        <div className="h-8 flex items-center">
          {" "}
          {/* Maintain height */}
          {quantity === 0 ? (
            <button
              className="bg-[#ffffff] border-[1px] border-[#ffd400] text-sm text-black px-4 py-1 rounded-md w-full"
              onClick={() => setQuantity(1)}
            >
              ADD
            </button>
          ) : (
            <div className="flex items-center bg-amber-300  border-[1px] border-[#ffd400] text-black rounded-md">
              <button
                className="text-white text-sm px-2 py-1 rounded-l"
                onClick={() => setQuantity((q) => Math.max(0, q - 1))}
              >
                -
              </button>
              <span className="px-1 text-sm">{quantity}</span>
              <button
                className="text-white text-sm px-2 py-1 rounded-r"
                onClick={() => setQuantity((q) => q + 1)}
              >
                +
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
