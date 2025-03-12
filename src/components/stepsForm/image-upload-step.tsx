"use client"

import type React from "react"

import { useFormContext } from "react-hook-form"
import type { VehicleInspectionData } from "@/components/vehicle-inspection-form"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { X } from "lucide-react"

const imageParts = [
  "Frente",
  "Traseira",
  "Placa",
  "KM",
  "Compartimento Motor",
  "Motor",
  "Câmbio",
  "Etiqueta ETA Motor",
  "Chassi",
  "Foto ETA Coluna",
  "Data Cinto de Segurança",
  "Gravação do Vidro",
  "Torre Amort. Diant./Direita",
  "Torre Amort. Diant./Esquerda",
  "Longarina Diant./Direita",
  "Longarina Diant./Esquerda",
  "Painel Dianteiro",
  "Caixa de Ar Esq.",
  "Assoalho Central",
  "Trilho Coluna Tras. Esq.",
  "Longarina Traseira/Esquerda",
  "Longarina Traseira/Direita",
  "Junção Assoalho/Painel Tras.",
  "Assoalho Int. Porta-malas",
  "Trilho Colunas Tras. Dir.",
  "Caixa de Ar Dir.",
  "Painel Geral",
  "Acabamento P.E.",
  "Multimídia/Painel Central",
  "Acabamento P.D.",
  "Banco Traseiro",
  "Pneus/Rodas Diant. Esq.",
  "Pneus/Rodas Traseiro Esq.",
  "Pneus/Rodas Traseiro Dir.",
  "Pneus/Rodas Diant. Direito",
  "Pneu Estepe",
  "Extra Impressa 1",
]

export default function ImageUploadStep() {
  const { setValue } = useFormContext<VehicleInspectionData>()
  const [previewImages, setPreviewImages] = useState<{ [key: string]: string }>({})

  const handleImageUpload = (partName: string, event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setPreviewImages((prev) => ({ ...prev, [partName]: reader.result as string }))
        setValue(`images.${partName}`, file)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleRemoveImage = (partName: string) => {
    setPreviewImages((prev) => {
      const newPreviews = { ...prev }
      delete newPreviews[partName]
      return newPreviews
    })
    setValue(`images.${partName}`, undefined)
  }

  //const images = watch("images")

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold mb-4">Upload de Imagens do Veículo</h2>
      <p className="text-sm text-muted-foreground mb-4">
        Por favor, faça o upload de imagens para cada parte do veículo listada abaixo.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {imageParts.map((part) => (
          <div key={part} className="space-y-2">
            <Label htmlFor={`image-${part}`}>{part}</Label>
            <div className="flex items-center space-x-2">
              <Input
                id={`image-${part}`}
                type="file"
                accept="image/*"
                onChange={(e) => handleImageUpload(part, e as React.ChangeEvent<HTMLInputElement>)}
                className="flex-grow"
              />
              {previewImages[part] && (
                <Button type="button" variant="destructive" size="icon" onClick={() => handleRemoveImage(part)}>
                  <X className="h-4 w-4" />
                </Button>
              )}
            </div>
            {previewImages[part] && (
              <div className="mt-2 relative aspect-video">
                <img
                  src={previewImages[part] || "/placeholder.svg"}
                  alt={`Preview de ${part}`}
                  className="object-cover w-full h-full rounded-md"
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

