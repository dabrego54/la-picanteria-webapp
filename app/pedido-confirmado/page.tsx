import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Package, Mail, Home } from "lucide-react"

export default function OrderConfirmationPage() {
  return (
    <div className="container mx-auto px-4 py-20">
      <div className="max-w-2xl mx-auto">
        <Card>
          <CardContent className="p-12 text-center space-y-6">
            <div className="flex justify-center">
              <div className="h-20 w-20 rounded-full bg-accent/10 flex items-center justify-center">
                <CheckCircle className="h-12 w-12 text-accent" />
              </div>
            </div>

            <div className="space-y-2">
              <h1 className="font-heading text-4xl font-bold">Pedido Confirmado</h1>
              <p className="text-lg text-muted-foreground">
                Gracias por tu compra. Tu pedido ha sido recibido y está siendo procesado.
              </p>
            </div>

            <div className="bg-muted p-6 rounded-lg space-y-4">
              <div className="flex items-start gap-3 text-left">
                <Mail className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <p className="font-semibold">Confirmación por Email</p>
                  <p className="text-sm text-muted-foreground">
                    Recibirás un email con los detalles de tu pedido y el número de seguimiento.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 text-left">
                <Package className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <p className="font-semibold">Tiempo de Entrega</p>
                  <p className="text-sm text-muted-foreground">
                    Tu pedido llegará en 3-5 días hábiles a la dirección proporcionada.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                <Link href="/productos">Seguir Comprando</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/">
                  <Home className="h-4 w-4 mr-2" />
                  Volver al Inicio
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
