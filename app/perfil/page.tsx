"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { User, Package, Settings, MapPin, Mail, Phone, Calendar } from "lucide-react"

// Mock order data
const mockOrders = [
  {
    id: "ORD-001",
    date: "2024-01-15",
    status: "delivered",
    total: 20970,
    items: [
      { name: "Oye te cagai wn! – Rocoto", quantity: 2, price: 6990 },
      { name: "Tamo hasta el loli! – Ají Verde", quantity: 1, price: 5990 },
    ],
  },
  {
    id: "ORD-002",
    date: "2024-01-10",
    status: "in-transit",
    total: 13980,
    items: [{ name: "Oye te cagai wn! – Chipotle", quantity: 2, price: 6990 }],
  },
  {
    id: "ORD-003",
    date: "2024-01-05",
    status: "delivered",
    total: 6990,
    items: [{ name: "Oye te cagai wn! – Rocoto", quantity: 1, price: 6990 }],
  },
]

const statusConfig = {
  delivered: { label: "Entregado", color: "bg-accent text-accent-foreground" },
  "in-transit": { label: "En Tránsito", color: "bg-primary text-primary-foreground" },
  processing: { label: "Procesando", color: "bg-secondary text-secondary-foreground" },
  cancelled: { label: "Cancelado", color: "bg-destructive text-destructive-foreground" },
}

export default function ProfilePage() {
  const [userData, setUserData] = useState({
    firstName: "Juan",
    lastName: "Pérez",
    email: "juan@ejemplo.cl",
    phone: "+56 9 1234 5678",
    address: "Av. Libertador Bernardo O'Higgins 1234",
    city: "Santiago",
    region: "Metropolitana",
    postalCode: "8320000",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const handleSaveProfile = (e: React.FormEvent) => {
    e.preventDefault()
    // In production, this would save to backend
    alert("Perfil actualizado correctamente")
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-5xl mx-auto">
        <h1 className="font-heading text-4xl md:text-5xl font-bold mb-8">Mi Perfil</h1>

        <Tabs defaultValue="orders" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="orders" className="gap-2">
              <Package className="h-4 w-4" />
              Mis Pedidos
            </TabsTrigger>
            <TabsTrigger value="profile" className="gap-2">
              <User className="h-4 w-4" />
              Información Personal
            </TabsTrigger>
            <TabsTrigger value="settings" className="gap-2">
              <Settings className="h-4 w-4" />
              Configuración
            </TabsTrigger>
          </TabsList>

          {/* Orders Tab */}
          <TabsContent value="orders" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="font-heading">Historial de Pedidos</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {mockOrders.map((order) => (
                  <div key={order.id}>
                    <div className="space-y-4">
                      <div className="flex items-start justify-between">
                        <div className="space-y-1">
                          <div className="flex items-center gap-3">
                            <h3 className="font-semibold">Pedido #{order.id}</h3>
                            <Badge className={statusConfig[order.status as keyof typeof statusConfig].color}>
                              {statusConfig[order.status as keyof typeof statusConfig].label}
                            </Badge>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Calendar className="h-3 w-3" />
                            {new Date(order.date).toLocaleDateString("es-CL", {
                              year: "numeric",
                              month: "long",
                              day: "numeric",
                            })}
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="text-2xl font-bold text-primary">${order.total.toLocaleString("es-CL")}</p>
                        </div>
                      </div>

                      <div className="space-y-2">
                        {order.items.map((item, idx) => (
                          <div key={idx} className="flex items-center justify-between text-sm">
                            <span className="text-muted-foreground">
                              {item.quantity}x {item.name}
                            </span>
                            <span className="font-medium">${(item.price * item.quantity).toLocaleString("es-CL")}</span>
                          </div>
                        ))}
                      </div>

                      <div className="flex gap-2">
                        <Button variant="outline" size="sm" className="flex-1 bg-transparent">
                          Ver Detalles
                        </Button>
                        {order.status === "delivered" && (
                          <Button variant="outline" size="sm" className="flex-1 bg-transparent">
                            Comprar de Nuevo
                          </Button>
                        )}
                      </div>
                    </div>
                    {order.id !== mockOrders[mockOrders.length - 1].id && <Separator className="mt-4" />}
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>

          {/* Profile Tab */}
          <TabsContent value="profile">
            <form onSubmit={handleSaveProfile}>
              <div className="space-y-6">
                {/* Personal Information */}
                <Card>
                  <CardHeader>
                    <CardTitle className="font-heading flex items-center gap-2">
                      <User className="h-5 w-5" />
                      Información Personal
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">Nombre</Label>
                        <Input
                          id="firstName"
                          name="firstName"
                          value={userData.firstName}
                          onChange={handleInputChange}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Apellido</Label>
                        <Input id="lastName" name="lastName" value={userData.lastName} onChange={handleInputChange} />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={userData.email}
                          onChange={handleInputChange}
                          className="pl-10"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Teléfono</Label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={userData.phone}
                          onChange={handleInputChange}
                          className="pl-10"
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Shipping Address */}
                <Card>
                  <CardHeader>
                    <CardTitle className="font-heading flex items-center gap-2">
                      <MapPin className="h-5 w-5" />
                      Dirección de Envío
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="address">Dirección</Label>
                      <Input id="address" name="address" value={userData.address} onChange={handleInputChange} />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="city">Ciudad</Label>
                        <Input id="city" name="city" value={userData.city} onChange={handleInputChange} />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="region">Región</Label>
                        <Input id="region" name="region" value={userData.region} onChange={handleInputChange} />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="postalCode">Código Postal</Label>
                        <Input
                          id="postalCode"
                          name="postalCode"
                          value={userData.postalCode}
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                >
                  Guardar Cambios
                </Button>
              </div>
            </form>
          </TabsContent>

          {/* Settings Tab */}
          <TabsContent value="settings">
            <Card>
              <CardHeader>
                <CardTitle className="font-heading">Configuración de Cuenta</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold mb-2">Cambiar Contraseña</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Actualiza tu contraseña para mantener tu cuenta segura.
                    </p>
                    <Button variant="outline">Cambiar Contraseña</Button>
                  </div>

                  <Separator />

                  <div>
                    <h3 className="font-semibold mb-2">Notificaciones</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Gestiona cómo quieres recibir notificaciones sobre tus pedidos.
                    </p>
                    <div className="space-y-2">
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input type="checkbox" defaultChecked className="rounded" />
                        <span className="text-sm">Notificaciones por email</span>
                      </label>
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input type="checkbox" defaultChecked className="rounded" />
                        <span className="text-sm">Ofertas y promociones</span>
                      </label>
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input type="checkbox" className="rounded" />
                        <span className="text-sm">Notificaciones SMS</span>
                      </label>
                    </div>
                  </div>

                  <Separator />

                  <div>
                    <h3 className="font-semibold mb-2 text-destructive">Zona de Peligro</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Elimina permanentemente tu cuenta y todos tus datos.
                    </p>
                    <Button variant="destructive">Eliminar Cuenta</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
