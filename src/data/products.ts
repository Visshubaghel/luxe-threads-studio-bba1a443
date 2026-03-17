import product1 from "@/assets/product-1.jpg";
import product2 from "@/assets/product-2.jpg";
import product3 from "@/assets/product-3.jpg";
import product4 from "@/assets/product-4.jpg";
import product5 from "@/assets/product-5.jpg";
import product6 from "@/assets/product-6.jpg";

export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  category: string;
  sizes: string[];
  image: string;
  description: string;
  fabric: string;
  isNew?: boolean;
}

export const products: Product[] = [
  {
    id: "1",
    name: "Embroidered Silk Kurta",
    price: 12500,
    category: "Kurtas",
    sizes: ["XS", "S", "M", "L", "XL"],
    image: product1,
    description: "Hand-embroidered silk kurta in deep burgundy with intricate zari work along the neckline and hem. Crafted from pure Banarasi silk with a modern silhouette.",
    fabric: "Pure Banarasi Silk",
    isNew: true,
  },
  {
    id: "2",
    name: "Sage Embroidered Lehenga",
    price: 45000,
    originalPrice: 52000,
    category: "Lehengas",
    sizes: ["S", "M", "L", "XL"],
    image: product2,
    description: "A breathtaking sage green lehenga featuring gold zardozi embroidery. The voluminous skirt falls in elegant folds, paired with a matching dupatta with a rich border.",
    fabric: "Georgette with Zardozi",
  },
  {
    id: "3",
    name: "Handblock Cotton Shirt",
    price: 4800,
    category: "Shirts",
    sizes: ["S", "M", "L", "XL", "XXL"],
    image: product3,
    description: "A relaxed-fit cotton shirt in off-white with subtle handblock printing. Perfect for both casual and semi-formal occasions.",
    fabric: "Organic Cotton",
    isNew: true,
  },
  {
    id: "4",
    name: "Silk Dupatta with Zari Border",
    price: 8500,
    category: "Accessories",
    sizes: ["One Size"],
    image: product4,
    description: "A luxurious navy blue silk dupatta featuring an ornate gold zari border with traditional motifs. Lightweight yet opulent.",
    fabric: "Pure Silk",
  },
  {
    id: "5",
    name: "Charcoal Bandhgala Jacket",
    price: 28000,
    category: "Jackets",
    sizes: ["S", "M", "L", "XL"],
    image: product5,
    description: "A meticulously tailored bandhgala jacket in charcoal grey with a subtle check pattern. Features a structured mandarin collar and a clean, architectural silhouette.",
    fabric: "Wool Blend",
    isNew: true,
  },
  {
    id: "6",
    name: "Pashmina Embroidered Shawl",
    price: 15000,
    originalPrice: 18000,
    category: "Accessories",
    sizes: ["One Size"],
    image: product6,
    description: "A handwoven pashmina shawl in dusty rose with delicate sozni embroidery. Each piece takes artisans weeks to complete.",
    fabric: "Pure Pashmina",
  },
];

export const categories = ["All", "Kurtas", "Lehengas", "Shirts", "Jackets", "Accessories"];
