"use client";
interface Product {
  id: number;
  name: string;
  price: string;
  category: string;
  colors: number | null;
  badge: string | null;
  image: string;
  isNew: boolean;
}

interface ProductCardProps {
  product: Product;
}
import { Heart } from "lucide-react";
const productCard = ({ product }: ProductCardProps) => {
  return (
    <div
      className="group cursor-pointer"
      onClick={() => console.log(`Clicked product ${product.id}`)}
    >
      <div className="relative bg-gray-100 overflow-hidden mb-4 transition-all duration-200 hover:border hover:border-black aspect-[4/5]">
        <button className="absolute top-4 right-4 z-10 p-2 hover:bg-white/20 rounded-full transition-colors">
          <Heart className="w-5 h-5 text-gray-600" />
        </button>
        <img
          src={product.image || "/placeholder.svg"}
          alt={product.name}
          className="w-full h-full object-contain p-8"
        />
      </div>

      <div className="space-y-1 px-2">
        <p className="font-bold text-sm">{product.price}</p>
        <h3 className="font-light text-sm">{product.name}</h3>
        <p className="text-gray-500 text-xs font-light">{product.category}</p>

        {product.colors && (
          <p className="text-gray-500 text-xs font-light">
            {product.colors} colours
          </p>
        )}
        {product.badge && (
          <p className="text-blue-600 text-xs font-light">{product.badge}</p>
        )}
      </div>
    </div>
  );
};

export default productCard;
