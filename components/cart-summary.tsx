"use client"

import { useCartStore } from "@/lib/store"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

export function CartSummary() {
  const getTotalPrice = useCartStore((state) => state.getTotalPrice)

  const subtotal = getTotalPrice()
  const shipping = subtotal >= 15000 ? 0 : 3000
  const total = subtotal + shipping

  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-heading">Resumen</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center justify-between text-sm">
          <span className="text-muted-foreground">Subtotal</span>
          <span className="font-semibold">${subtotal.toLocaleString("es-CL")}</span>
        </div>

        <div className="flex items-center justify-between text-sm">
          <span className="text-muted-foreground">Envío</span>
          <span className="font-semibold">
            {shipping === 0 ? <span className="text-accent">Gratis</span> : `$${shipping.toLocaleString("es-CL")}`}
          </span>
        </div>

        {subtotal < 15000 && subtotal > 0 && (
          <div className="bg-muted p-3 rounded-lg">
            <p className="text-xs text-muted-foreground">
              Agrega ${(15000 - subtotal).toLocaleString("es-CL")} más para envío gratis
            </p>
          </div>
        )}

        <Separator />

        <div className="flex items-center justify-between">
          <span className="font-semibold">Total</span>
          <span className="text-2xl font-bold text-primary">${total.toLocaleString("es-CL")}</span>
        </div>
      </CardContent>
    </Card>
  )
}
