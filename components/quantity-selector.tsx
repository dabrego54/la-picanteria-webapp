"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Minus, Plus } from "lucide-react"

interface QuantitySelectorProps {
  productId: string
  initialQuantity?: number
  onChange?: (quantity: number) => void
}

export function QuantitySelector({ productId, initialQuantity = 1, onChange }: QuantitySelectorProps) {
  const [quantity, setQuantity] = useState(initialQuantity)

  const handleDecrease = () => {
    if (quantity > 1) {
      const newQuantity = quantity - 1
      setQuantity(newQuantity)
      onChange?.(newQuantity)
    }
  }

  const handleIncrease = () => {
    const newQuantity = quantity + 1
    setQuantity(newQuantity)
    onChange?.(newQuantity)
  }

  return (
    <div className="flex items-center gap-4">
      <span className="text-sm font-medium">Cantidad:</span>
      <div className="flex items-center border border-border rounded-lg">
        <Button
          variant="ghost"
          size="icon"
          onClick={handleDecrease}
          disabled={quantity <= 1}
          className="rounded-r-none"
        >
          <Minus className="h-4 w-4" />
        </Button>
        <span className="px-6 py-2 font-semibold min-w-[60px] text-center">{quantity}</span>
        <Button variant="ghost" size="icon" onClick={handleIncrease} className="rounded-l-none">
          <Plus className="h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}
