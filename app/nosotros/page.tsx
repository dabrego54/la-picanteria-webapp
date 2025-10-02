import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Flame, Heart, Leaf, Award } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <div className="max-w-4xl mx-auto text-center space-y-6 mb-16">
        <h1 className="font-heading text-5xl md:text-6xl font-bold">Nuestra Historia</h1>
        <p className="text-xl text-muted-foreground leading-relaxed">
          Somos una empresa familiar chilena dedicada a crear las mejores salsas picantes artesanales del país.
        </p>
      </div>

      {/* Story Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
        <div className="relative h-[400px] rounded-lg overflow-hidden">
          <Image src="/placeholder.svg?height=400&width=600" alt="Producción artesanal" fill className="object-cover" />
        </div>
        <div className="space-y-4">
          <h2 className="font-heading text-3xl font-bold">De Chile para el Mundo</h2>
          <p className="text-muted-foreground leading-relaxed">
            LA PICANTERÍA nació en 2020 en el corazón de Santiago, Chile. Todo comenzó en la cocina de nuestra casa,
            experimentando con diferentes ajíes y especias locales para crear salsas únicas que capturaran el espíritu
            picante de nuestra cultura.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Hoy, seguimos manteniendo ese mismo espíritu artesanal, preparando cada botella a mano con ingredientes 100%
            naturales y sin conservantes. Nuestras salsas son el resultado de años de perfeccionamiento y amor por el
            picante.
          </p>
        </div>
      </div>

      {/* Values Section */}
      <div className="mb-20">
        <h2 className="font-heading text-4xl font-bold text-center mb-12">Nuestros Valores</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card>
            <CardContent className="p-6 text-center space-y-4">
              <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                <Flame className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-heading text-xl font-semibold">Pasión</h3>
              <p className="text-sm text-muted-foreground">
                Cada salsa está hecha con dedicación y amor por el picante
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center space-y-4">
              <div className="h-16 w-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto">
                <Leaf className="h-8 w-8 text-accent" />
              </div>
              <h3 className="font-heading text-xl font-semibold">Natural</h3>
              <p className="text-sm text-muted-foreground">
                100% ingredientes naturales, sin conservantes artificiales
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center space-y-4">
              <div className="h-16 w-16 rounded-full bg-secondary/10 flex items-center justify-center mx-auto">
                <Heart className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="font-heading text-xl font-semibold">Artesanal</h3>
              <p className="text-sm text-muted-foreground">Producción en pequeños lotes para garantizar calidad</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center space-y-4">
              <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                <Award className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-heading text-xl font-semibold">Calidad</h3>
              <p className="text-sm text-muted-foreground">Los mejores ingredientes para el mejor sabor</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-secondary via-primary to-accent rounded-lg p-12 text-center text-white">
        <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">¿Listo para probar nuestras salsas?</h2>
        <p className="text-lg mb-6 text-white/90">
          Descubre por qué somos la marca favorita de los amantes del picante
        </p>
      </div>
    </div>
  )
}
