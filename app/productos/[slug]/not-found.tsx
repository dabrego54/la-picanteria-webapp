import Link from "next/link"
import { Button } from "@/components/ui/button"
import { AlertCircle } from "lucide-react"

export default function NotFound() {
  return (
    <div className="container mx-auto px-4 py-20">
      <div className="max-w-md mx-auto text-center space-y-6">
        <AlertCircle className="h-16 w-16 text-muted-foreground mx-auto" />
        <h1 className="font-heading text-4xl font-bold">Producto no encontrado</h1>
        <p className="text-muted-foreground">Lo sentimos, el producto que buscas no existe o ha sido eliminado.</p>
        <Button asChild>
          <Link href="/productos">Volver a Productos</Link>
        </Button>
      </div>
    </div>
  )
}
