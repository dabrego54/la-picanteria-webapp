import { ProductGrid } from "@/components/product-grid"
import { ProductFilters } from "@/components/product-filters"

export default function ProductsPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="space-y-4 mb-12">
        <h1 className="font-heading text-4xl md:text-5xl font-bold">Nuestros Productos</h1>
        <p className="text-lg text-muted-foreground max-w-3xl">
          Explora nuestra colección completa de salsas picantes artesanales. Filtra por tipo, nivel de picor o precio
          para encontrar tu salsa perfecta.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <aside className="lg:col-span-1">
          <ProductFilters />
        </aside>
        <div className="lg:col-span-3">
          <ProductGrid />
        </div>
      </div>
    </div>
  )
}
