"use client"

import { Button } from "@/components/ui/button"
import { ShoppingCart } from "lucide-react"
import { useCartStore, type Product } from "@/lib/store"
import { useToast } from "@/hooks/use-toast"
import { useState } from "react"

interface AddToCartButtonProps {
  product: Product
}

export function AddToCartButton({ product }: AddToCartButtonProps) {
  const [quantity, setQuantity] = useState(1)
  const addItem = useCartStore((state) => state.addItem)
  const { toast } = useToast()

  const handleAddToCart = () => {
    addItem(product, quantity)
    toast({
      title: "Producto agregado",
      description: `${quantity} x ${product.name} agregado al carrito`,
    })
    setQuantity(1)
  }

  return (
    <Button
      size="lg"
      className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
      onClick={handleAddToCart}
      disabled={product.stock === 0}
    >
      <ShoppingCart className="h-5 w-5 mr-2" />
      {product.stock === 0 ? "Agotado" : "Agregar al Carrito"}
    </Button>
  )
}
