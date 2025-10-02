"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Slider } from "@/components/ui/slider"
import { Flame } from "lucide-react"
import { useFilterStore } from "@/lib/filter-store"

export function ProductFilters() {
  const { categories, heatLevels, priceRange, toggleCategory, toggleHeatLevel, setPriceRange } = useFilterStore()

  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-heading">Filtros</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Category Filter */}
        <div className="space-y-3">
          <Label className="text-base font-semibold">Tipo de Salsa</Label>
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <Checkbox
                id="rocoto"
                checked={categories.includes("rocoto")}
                onCheckedChange={() => toggleCategory("rocoto")}
              />
              <label
                htmlFor="rocoto"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
              >
                Rocoto
              </label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox
                id="chipotle"
                checked={categories.includes("chipotle")}
                onCheckedChange={() => toggleCategory("chipotle")}
              />
              <label
                htmlFor="chipotle"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
              >
                Chipotle
              </label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox
                id="aji-verde"
                checked={categories.includes("aji-verde")}
                onCheckedChange={() => toggleCategory("aji-verde")}
              />
              <label
                htmlFor="aji-verde"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
              >
                Ají Verde
              </label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox
                id="habanero"
                checked={categories.includes("habanero")}
                onCheckedChange={() => toggleCategory("habanero")}
              />
              <label
                htmlFor="habanero"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
              >
                Habanero
              </label>
            </div>
          </div>
        </div>

        {/* Heat Level Filter */}
        <div className="space-y-3">
          <Label className="text-base font-semibold">Nivel de Picor</Label>
          <div className="space-y-2">
            {[1, 2, 3, 4, 5].map((level) => (
              <div key={level} className="flex items-center space-x-2">
                <Checkbox
                  id={`heat-${level}`}
                  checked={heatLevels.includes(level)}
                  onCheckedChange={() => toggleHeatLevel(level)}
                />
                <label
                  htmlFor={`heat-${level}`}
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer flex items-center gap-1"
                >
                  {Array.from({ length: level }).map((_, i) => (
                    <Flame key={i} className="h-3 w-3 text-secondary" />
                  ))}
                </label>
              </div>
            ))}
          </div>
        </div>

        {/* Price Range Filter */}
        <div className="space-y-3">
          <Label className="text-base font-semibold">Rango de Precio</Label>
          <div className="space-y-4">
            <Slider value={priceRange} onValueChange={setPriceRange} max={10000} step={500} minStepsBetweenThumbs={1} />
            <div className="flex items-center justify-between text-sm text-muted-foreground">
              <span>${priceRange[0].toLocaleString("es-CL")}</span>
              <span>${priceRange[1].toLocaleString("es-CL")}</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
