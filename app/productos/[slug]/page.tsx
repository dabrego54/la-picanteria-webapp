import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Flame, Package, Leaf, ChevronLeft } from "lucide-react"
import { getProductBySlug, products } from "@/lib/products"
import { AddToCartButton } from "@/components/add-to-cart-button"
import { QuantitySelector } from "@/components/quantity-selector"

export function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }))
}

export default function ProductDetailPage({ params }: { params: { slug: string } }) {
  const product = getProductBySlug(params.slug)

  if (!product) {
    notFound()
  }

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Breadcrumb */}
      <div className="mb-8">
        <Link
          href="/productos"
          className="inline-flex items-center text-sm text-muted-foreground hover:text-primary transition-colors"
        >
          <ChevronLeft className="h-4 w-4 mr-1" />
          Volver a Productos
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Product Image */}
        <div className="space-y-4">
          <div className="relative aspect-square rounded-lg overflow-hidden bg-muted">
            <Image
              src={product.image || "/placeholder.svg"}
              alt={product.name}
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* Product Info */}
        <div className="space-y-6">
          <div>
            <Badge className="mb-4 bg-secondary text-secondary-foreground">
              {Array.from({ length: product.heatLevel }).map((_, i) => (
                <Flame key={i} className="h-3 w-3" />
              ))}
              <span className="ml-2">Nivel {product.heatLevel}/5</span>
            </Badge>
            <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">{product.name}</h1>
            <p className="text-lg text-muted-foreground leading-relaxed">{product.description}</p>
          </div>

          <Separator />

          {/* Price and Stock */}
          <div className="space-y-4">
            <div className="flex items-baseline gap-4">
              <span className="text-4xl font-bold text-primary">${product.price.toLocaleString("es-CL")}</span>
              <span className="text-lg text-muted-foreground">{product.volume}</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Package className="h-4 w-4 text-accent" />
              <span className="text-muted-foreground">
                {product.stock > 0 ? (
                  <span className="text-accent font-medium">{product.stock} unidades disponibles</span>
                ) : (
                  <span className="text-destructive font-medium">Agotado</span>
                )}
              </span>
            </div>
          </div>

          <Separator />

          {/* Quantity and Add to Cart */}
          <div className="space-y-4">
            <QuantitySelector productId={product.id} />
            <AddToCartButton product={product} />
          </div>

          <Separator />

          {/* Product Details */}
          <div className="space-y-4">
            <h3 className="font-heading text-xl font-semibold">Ingredientes</h3>
            <div className="flex flex-wrap gap-2">
              {product.ingredients.map((ingredient) => (
                <Badge key={ingredient} variant="outline" className="gap-1">
                  <Leaf className="h-3 w-3" />
                  {ingredient}
                </Badge>
              ))}
            </div>
          </div>

          {/* Additional Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
            <Card>
              <CardContent className="p-4">
                <h4 className="font-semibold mb-2">100% Natural</h4>
                <p className="text-sm text-muted-foreground">Sin conservantes ni aditivos artificiales</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <h4 className="font-semibold mb-2">Hecho en Chile</h4>
                <p className="text-sm text-muted-foreground">Producción artesanal local</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Related Products */}
      <div className="mt-20">
        <h2 className="font-heading text-3xl font-bold mb-8">También te puede gustar</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {products
            .filter((p) => p.id !== product.id)
            .slice(0, 3)
            .map((relatedProduct) => (
              <Card key={relatedProduct.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <Link href={`/productos/${relatedProduct.slug}`}>
                  <div className="relative h-48 bg-muted">
                    <Image
                      src={relatedProduct.image || "/placeholder.svg"}
                      alt={relatedProduct.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-heading text-lg font-semibold mb-2">{relatedProduct.name}</h3>
                    <p className="text-xl font-bold text-primary">${relatedProduct.price.toLocaleString("es-CL")}</p>
                  </CardContent>
                </Link>
              </Card>
            ))}
        </div>
      </div>
    </div>
  )
}
