"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Trash2, Plus, Minus } from "lucide-react"
import type { CartItem } from "@/lib/store"

interface CartItemProps {
  item: CartItem
  onUpdateQuantity: (productId: string, quantity: number) => void
  onRemove: (productId: string) => void
}

export function CartItemComponent({ item, onUpdateQuantity, onRemove }: CartItemProps) {
  return (
    <div className="flex gap-4 p-4 border border-border rounded-lg">
      {/* Product Image */}
      <div className="relative h-20 w-20 flex-shrink-0 rounded-lg overflow-hidden bg-muted">
        <Image src={item.product.image || "/placeholder.svg"} alt={item.product.name} fill className="object-cover" />
      </div>

      {/* Product Info */}
      <div className="flex-1 space-y-2">
        <div className="flex items-start justify-between gap-4">
          <div>
            <Link href={`/productos/${item.product.slug}`}>
              <h3 className="font-heading text-base font-semibold hover:text-primary transition-colors">
                {item.product.name}
              </h3>
            </Link>
            <p className="text-xs text-muted-foreground">{item.product.volume}</p>
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => onRemove(item.product.id)}
            className="h-8 w-8 text-destructive hover:text-destructive hover:bg-destructive/10"
          >
            <Trash2 className="h-4 w-4" />
            <span className="sr-only">Eliminar</span>
          </Button>
        </div>

        <div className="flex items-center justify-between">
          {/* Quantity Controls */}
          <div className="flex items-center border border-border rounded-lg">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => onUpdateQuantity(item.product.id, item.quantity - 1)}
              disabled={item.quantity <= 1}
              className="h-7 w-7 rounded-r-none"
            >
              <Minus className="h-3 w-3" />
            </Button>
            <span className="px-3 py-1 text-sm font-semibold min-w-[35px] text-center">{item.quantity}</span>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => onUpdateQuantity(item.product.id, item.quantity + 1)}
              disabled={item.quantity >= item.product.stock}
              className="h-7 w-7 rounded-l-none"
            >
              <Plus className="h-3 w-3" />
            </Button>
          </div>

          {/* Price */}
          <div className="text-right">
            <p className="text-base font-bold text-primary">
              ${(item.product.price * item.quantity).toLocaleString("es-CL")}
            </p>
            {item.quantity > 1 && (
              <p className="text-xs text-muted-foreground">${item.product.price.toLocaleString("es-CL")} c/u</p>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
