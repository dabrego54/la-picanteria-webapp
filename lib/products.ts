import type { Product } from "./store"

export const products: Product[] = [
  {
    id: "1",
    name: "Oye te cagai wn! – Rocoto",
    slug: "oye-te-cagai-wn-rocoto",
    description:
      "Salsa de rocoto con un picor intenso y sabor original. Perfecta para los que buscan un desafío picante.",
    price: 4000,
    image: "/red-hot-sauce-bottle-with-rocoto-peppers.jpg",
    category: "rocoto",
    heatLevel: 5,
    stock: 25,
    ingredients: ["Rocoto", "Vinagre", "Ajo", "Sal", "Especias"],
    volume: "150ml",
  },
  {
    id: "2",
    name: "Oye te cagai wn! – Chipotle",
    slug: "oye-te-cagai-wn-chipotle",
    description: "Salsa de chipotle ahumado con un equilibrio perfecto entre picor y sabor. Ideal para carnes y tacos.",
    price: 4000,
    image: "/brown-chipotle-hot-sauce-bottle-with-smoke.jpg",
    category: "chipotle",
    heatLevel: 4,
    stock: 30,
    ingredients: ["Chipotle", "Tomate", "Cebolla", "Vinagre", "Especias"],
    volume: "150ml",
  },
  {
    id: "3",
    name: "Tamo hasta el loli! – Ají Verde",
    slug: "tamo-hasta-el-loli-aji-verde",
    description: "Salsa verde fresca y picante de ají verde. Perfecta para pescados y mariscos.",
    price: 3500,
    image: "/green-hot-sauce-bottle-with-cilantro-and-green-pep.jpg",
    category: "aji-verde",
    heatLevel: 3,
    stock: 40,
    ingredients: ["Ají verde", "Cilantro", "Limón", "Ajo", "Aceite de oliva"],
    volume: "150ml",
  },
]

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((product) => product.slug === slug)
}

export function getProductsByCategory(category: string): Product[] {
  return products.filter((product) => product.category === category)
}

export function getProductsByHeatLevel(level: number): Product[] {
  return products.filter((product) => product.heatLevel === level)
}
