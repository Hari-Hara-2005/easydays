import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import ProductCard from "./product-card";

const products = [
  {
    id: "1",
    category: "SANITARY NAPKINS",
    title: "Easydays® Secure Nights",
    description: "Get worry free sleep with up to 100% leakage protection^",
    imageUrl: "Img/product_img.jpg",
  },
  {
    id: "2",
    category: "SANITARY NAPKINS",
    title: "Easydays® Secure Cottony XL",
    description: "The Best Ever* Easydays® Secure with Cottony Cover",
    imageUrl: "Img/product_img.jpg",
  },
  {
    id: "3",
    category: "SANITARY NAPKINS",
    title: "Easydays® Dry-Max All Night",
    description: "All round leakage protection through the night*",
    imageUrl: "Img/product_img.jpg",
  },
  {
    id: "4",
    category: "SANITARY NAPKINS",
    title: "Easydays® Secure Dry XL",
    description: "The Best Ever* Easydays® Secure with Dry Cover",
    imageUrl: "Img/product_img.jpg",
  },
  {
    id: "5",
    category: "SANITARY NAPKINS",
    title: "Easydays® Secure Dry XL",
    description: "The Best Ever* Easydays® Secure with Dry Cover",
    imageUrl: "Img/product_img.jpg",
  },
  {
    id: "6",
    category: "SANITARY NAPKINS",
    title: "Easydays® Secure Dry XL",
    description: "The Best Ever* Easydays® Secure with Dry Cover",
    imageUrl: "Img/product_img.jpg",
  },
  {
    id: "7",
    category: "SANITARY NAPKINS",
    title: "Easydays® Secure Dry XL",
    description: "The Best Ever* Easydays® Secure with Dry Cover",
    imageUrl: "Img/product_img.jpg",
  },
  {
    id: "8",
    category: "SANITARY NAPKINS",
    title: "Easydays® Secure Dry XL",
    description: "The Best Ever* Easydays® Secure with Dry Cover",
    imageUrl: "Img/product_img.jpg",
  },
];

export default function ProductGrid() {
  return (
    <div className="container mx-auto px-4 py-8">
      <ScrollArea className="w-full whitespace-nowrap rounded-lg">
        <div className="flex lg:gap-10 w-max space-x-6 p-4 py-10">
          {products.map((product) => (
            <div key={product.id} className="lg:w-[400px] w-[300px] md:w-[350px] shrink-0">
            <ProductCard product={product} />
          </div>          
          ))}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </div>
  );
}
