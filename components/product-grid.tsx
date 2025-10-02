"use client"

import { useMemo } from "react"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Flame } from "lucide-react"
import { products } from "@/lib/products"
import { useCartStore } from "@/lib/store"
import { useToast } from "@/hooks/use-toast"
import { useFilterStore } from "@/lib/filter-store"

export function ProductGrid() {
  const { categories, heatLevels, priceRange } = useFilterStore()
  const addItem = useCartStore((state) => state.addItem)
  const { toast } = useToast()

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      // Category filter
      if (categories.length > 0 && !categories.includes(product.category)) {
        return false
      }

      // Heat level filter
      if (heatLevels.length > 0 && !heatLevels.includes(product.heatLevel)) {
        return false
      }

      // Price range filter
      if (product.price < priceRange[0] || product.price > priceRange[1]) {
        return false
      }

      return true
    })
  }, [categories, heatLevels, priceRange])

  const handleAddToCart = (product: (typeof products)[0]) => {
    addItem(product)
    toast({
      title: "Producto agregado",
      description: `${product.name} se agregó al carrito`,
    })
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <p className="text-sm text-muted-foreground">
          Mostrando {filteredProducts.length} producto{filteredProducts.length !== 1 ? "s" : ""}
        </p>
      </div>

      {filteredProducts.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-lg text-muted-foreground">No se encontraron productos con los filtros seleccionados.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <Card key={product.id} className="overflow-hidden hover:shadow-lg transition-shadow group">
              <CardHeader className="p-0">
                <Link href={`/productos/${product.slug}`}>
                  <div className="relative h-64 bg-muted overflow-hidden">
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <Badge className="absolute top-4 right-4 bg-secondary text-secondary-foreground">
                      {Array.from({ length: product.heatLevel }).map((_, i) => (
                        <Flame key={i} className="h-3 w-3" />
                      ))}
                    </Badge>
                  </div>
                </Link>
              </CardHeader>
              <CardContent className="p-6">
                <Link href={`/productos/${product.slug}`}>
                  <CardTitle className="font-heading text-xl mb-2 hover:text-primary transition-colors">
                    {product.name}
                  </CardTitle>
                </Link>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{product.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-primary">${product.price.toLocaleString("es-CL")}</span>
                  <span className="text-sm text-muted-foreground">{product.volume}</span>
                </div>
              </CardContent>
              <CardFooter className="p-6 pt-0 flex gap-2">
                <Button
                  className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90"
                  onClick={() => handleAddToCart(product)}
                >
                  Agregar al Carrito
                </Button>
                <Button variant="outline" asChild>
                  <Link href={`/productos/${product.slug}`}>Ver</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      )}
    </div>
  )
}
