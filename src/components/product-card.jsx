import { Button } from "@/components/ui/button";

const ProductCard = ({ product }) => {
  return (
    <div className="flex h-full flex-col p-6 bg-white rounded-lg border border-gray-200 shadow-lg transition-transform transform hover:scale-105">
      <div className="relative aspect-[4/3] mb-6">
        <img
          src={product.imageUrl}
          alt={product.title}
          style={{ objectFit: "contain" }}
        />
      </div>
      <div className="space-y-4 flex-1">
        <div className="uppercase text-sm font-medium text-gray-500">
          {product.category}
        </div>
        <h3 className="text-lg font-semibold leading-tight">{product.title}</h3>
        <p className="text-sm text-gray-600 whitespace-normal">
          {product.description}
        </p>
      </div>
      <Button
        className="w-full mt-6 bg-[#7D328D] hover:bg-[#9D52AD] focus:outline-none focus:ring-2 focus:ring-[#c41773]"
        onClick={() => console.log(`Buy ${product.title}`)}
      >
        Buy Now
      </Button>
    </div>
  );
};

export default ProductCard;
