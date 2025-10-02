import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Flame, Truck, Shield, Heart } from "lucide-react"
import { products } from "@/lib/products"

export default function HomePage() {
  const featuredProducts = products.slice(0, 3)

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/20 via-background to-secondary/10 py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge className="w-fit bg-secondary text-secondary-foreground">
                <Flame className="h-3 w-3 mr-1" />
                100% Artesanal
              </Badge>
              <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold text-balance leading-tight">
                Oye te <span className="text-secondary">cagai</span> lo increibles que son!
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground text-pretty leading-relaxed">
                Salsas picantes artesanales hechas en Chile con ingredientes naturales. Perfectas para
                darle <span className="text-secondary">picor</span> a tu vida.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
                  <Link href="/productos">Ver Productos</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/nosotros">Conoce Nuestra Historia</Link>
                </Button>
              </div>
            </div>
            <div className="relative h-[400px] lg:h-[500px]">
              <Image
                src="/artisanal-hot-sauce-bottles-with-flames-and-pepper.png"
                alt="Salsas LA PICANTERÍA"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center">
                <Truck className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-heading text-xl font-semibold">Envío Gratis</h3>
              <p className="text-muted-foreground text-sm">En compras sobre $15.000 a todo Chile</p>
            </div>
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="h-16 w-16 rounded-full bg-accent/10 flex items-center justify-center">
                <Shield className="h-8 w-8 text-accent" />
              </div>
              <h3 className="font-heading text-xl font-semibold">100% Natural</h3>
              <p className="text-muted-foreground text-sm">Sin conservantes ni aditivos artificiales</p>
            </div>
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="h-16 w-16 rounded-full bg-secondary/10 flex items-center justify-center">
                <Heart className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="font-heading text-xl font-semibold">Creado para ti</h3>
              <p className="text-muted-foreground text-sm">Cada botella es preparada artesanalmente</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-12">
            <h2 className="font-heading text-4xl md:text-5xl font-bold">Nuestras Salsas</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Descubre nuestra selección de salsas picantes artesanales, cada una con su propio carácter y nivel de
              picor.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <Card key={product.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <CardHeader className="p-0">
                  <div className="relative h-64 bg-muted">
                    <Image src={product.image || "/placeholder.svg"} alt={product.name} fill className="object-cover" />
                    <Badge className="absolute top-4 right-4 bg-secondary text-secondary-foreground">
                      {Array.from({ length: product.heatLevel }).map((_, i) => (
                        <Flame key={i} className="h-3 w-3" />
                      ))}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <CardTitle className="font-heading text-xl mb-2">{product.name}</CardTitle>
                  <p className="text-sm text-muted-foreground mb-4">{product.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-primary">${product.price.toLocaleString("es-CL")}</span>
                    <span className="text-sm text-muted-foreground">{product.volume}</span>
                  </div>
                </CardContent>
                <CardFooter className="p-6 pt-0">
                  <Button asChild className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                    <Link href={`/productos/${product.slug}`}>Ver Detalles</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" variant="outline" asChild>
              <Link href="/productos">Ver Todos los Productos</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-secondary via-primary to-accent">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-6">
            ¿Listo para el desafío picante?
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Únete a nuestra comunidad de amantes del picante y recibe ofertas exclusivas.
          </p>
          <Button size="lg" className="bg-white text-foreground hover:bg-white/90">
            <Link href="/productos">Comprar Ahora</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
