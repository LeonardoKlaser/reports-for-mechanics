import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useFormContext } from "react-hook-form"
import type { VehicleInspectionData } from "@/components/vehicle-inspection-form"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { X } from "lucide-react"

export default function GeneralInfoStep() {
  const {
    register,
    setValue,
    formState: { errors },
  } = useFormContext<VehicleInspectionData>()
  
  const [previewImages, setPreviewImages] = useState<{ [key: string]: string }>({})

  const handleImageUpload = async(imageType: "frontal" | "traseira", event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      const base64 = await getBase64(file)
      setPreviewImages((prev) => ({ ...prev, [imageType]: base64 }))
      setValue(`summaryImages.${imageType}` as const, base64)
      
    }
  }

  const getBase64 = (file: File): Promise<string> =>
    new Promise((resolve, reject) => {
      const reader = new FileReader()
      reader.readAsDataURL(file)
      reader.onload = () => resolve(reader.result as string)
      reader.onerror = reject
    })

  const handleRemoveImage = (imageType: "frontal" | "traseira") => {
    setPreviewImages((prev) => {
      const newPreviews = { ...prev }
      delete newPreviews[imageType]
      return newPreviews
    })
    setValue(`summaryImages.${imageType}` as const, "")
  }
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold mb-4">Informações Gerais do Veículo</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="reportNumber" className={errors.reportNumber ? "text-destructive" : ""}>
            Número do Relatório*
          </Label>
          <Input
            id="reportNumber"
            {...register("reportNumber", {
              required: "Número do relatório é obrigatório",
            })}
            placeholder="INS-12345"
            className={errors.reportNumber ? "border-destructive" : ""}
          />
          {errors.reportNumber && <p className="text-sm text-destructive mt-1">{errors.reportNumber.message}</p>}
        </div>

        <div className="space-y-2">
          <Label htmlFor="inspectionDate">Data da Inspeção</Label>
          <Input id="inspectionDate" type="date" {...register("inspectionDate")} />
        </div>

        <div className="space-y-2">
          <Label htmlFor="make" className={errors.make ? "text-destructive" : ""}>
            Marca*
          </Label>
          <Input
            id="make"
            {...register("make", {
              required: "Marca é obrigatória",
            })}
            placeholder="Toyota"
            className={errors.make ? "border-destructive" : ""}
          />
          {errors.make && <p className="text-sm text-destructive mt-1">{errors.make.message}</p>}
        </div>

        <div className="space-y-2">
          <Label htmlFor="model" className={errors.model ? "text-destructive" : ""}>
            Modelo*
          </Label>
          <Input
            id="model"
            {...register("model", {
              required: "Modelo é obrigatório",
            })}
            placeholder="Corolla"
            className={errors.model ? "border-destructive" : ""}
          />
          {errors.model && <p className="text-sm text-destructive mt-1">{errors.model.message}</p>}
        </div>

        <div className="space-y-2">
          <Label htmlFor="color">Cor</Label>
          <Input id="color" {...register("color")} placeholder="Prata" />
        </div>

        <div className="space-y-2">
          <Label htmlFor="year" className={errors.yearFab ? "text-destructive" : ""}>
            Ano de Fabricação
          </Label>
          <Input
            id="yearFab"
            {...register("yearFab", {
              required: "Ano de fabricação é obrigatório",
              pattern: {
                value: /^\d{4}$/,
                message: "Por favor, insira um ano válido de 4 dígitos",
              },
            })}
            placeholder="2023"
            className={errors.yearFab ? "border-destructive" : ""}
          />
          {errors.yearFab && <p className="text-sm text-destructive mt-1">{errors.yearFab.message}</p>}
        </div>

        <div className="space-y-2">
          <Label htmlFor="year" className={errors.year ? "text-destructive" : ""}>
            Ano Modelo
          </Label>
          <Input
            id="year"
            {...register("year", {
              required: "Ano modelo é obrigatório",
              pattern: {
                value: /^\d{4}$/,
                message: "Por favor, insira um ano válido de 4 dígitos",
              },
            })}
            placeholder="2023"
            className={errors.year ? "border-destructive" : ""}
          />
          {errors.year && <p className="text-sm text-destructive mt-1">{errors.year.message}</p>}
        </div>

        <div className="space-y-2">
          <Label htmlFor="licensePlate">Placa</Label>
          <Input id="licensePlate" {...register("licensePlate")} placeholder="ABC-1234" />
        </div>

        <div className="space-y-2">
          <Label htmlFor="vin">Renavam</Label>
          <Input
            id="vin"
            {...register("vin", {
              pattern: {
                value: /^[A-HJ-NPR-Z0-9]{17}$/i,
                message: "Por favor, insira um VIN válido de 17 caracteres",
              },
            })}
            placeholder="1HGBH41JXMN109186"
          />
          {errors.vin && <p className="text-sm text-destructive mt-1">{errors.vin.message}</p>}
        </div>

        <div className="space-y-2">
          <Label htmlFor="odometer">Quilometragem</Label>
          <Input id="odometer" {...register("odometer")} placeholder="45.000" />
        </div>

        <div className="space-y-2">
          <Label htmlFor="combustivel" className={errors.make ? "text-destructive" : ""}>
            Combustivel
          </Label>
          <Input
            id="combustivel"
            {...register("combustivel", {
              required: "Marca é obrigatória",
            })}
            placeholder="Flex"
            className={errors.make ? "border-destructive" : ""}
          />
          {errors.combustivel && <p className="text-sm text-destructive mt-1">{errors.combustivel.message}</p>}
        </div>

        <div className="space-y-2">
          <Label htmlFor="unidade" className={errors.make ? "text-destructive" : ""}>
            Unidade
          </Label>
          <Input
            id="unidade"
            {...register("unidade", {
              required: "Marca é obrigatória",
            })}
            placeholder="Jabuaquara"
            className={errors.unidade ? "border-destructive" : ""}
          />
          {errors.unidade && <p className="text-sm text-destructive mt-1">{errors.unidade.message}</p>}
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="cliente" className={errors.make ? "text-destructive" : ""}>
            Cliente
          </Label>
          <Input
            id="cliente"
            {...register("cliente", {
              required: "Marca é obrigatória",
            })}
            placeholder="Mecaninca Rossa"
            className={errors.cliente ? "border-destructive" : ""}
          />
          {errors.cliente && <p className="text-sm text-destructive mt-1">{errors.cliente.message}</p>}
        </div>
      </div>
      <h3 className="text-lg font-semibold mt-6 mb-2">Fotos de Apresentação do Veículo</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Foto Frontal */}
        <div className="space-y-2">
          <Label htmlFor="image-frontal">Foto Frontal</Label>
          <div className="flex items-center space-x-2">
            <Input
              id="image-frontal"
              type="file"
              accept="image/*"
              onChange={(e) => handleImageUpload("frontal", e as React.ChangeEvent<HTMLInputElement>)}
              className="flex-grow"
            />
            {previewImages["frontal"] && (
              <Button type="button" variant="destructive" size="icon" onClick={() => handleRemoveImage("frontal")}>
                <X className="h-4 w-4" />
              </Button>
            )}
          </div>
          {previewImages["frontal"] && (
            <div className="mt-2 relative aspect-video">
              <img
                src={previewImages["frontal"] || "/placeholder.svg"}
                alt="Foto Frontal do Veículo"
                className="object-cover w-full h-full rounded-md"
              />
            </div>
          )}
        </div>

        {/* Foto Traseira */}
        <div className="space-y-2">
          <Label htmlFor="image-traseira">Foto Traseira</Label>
          <div className="flex items-center space-x-2">
            <Input
              id="image-traseira"
              type="file"
              accept="image/*"
              onChange={(e) => handleImageUpload("traseira", e as React.ChangeEvent<HTMLInputElement>)}
              className="flex-grow"
            />
            {previewImages["traseira"] && (
              <Button type="button" variant="destructive" size="icon" onClick={() => handleRemoveImage("traseira")}>
                <X className="h-4 w-4" />
              </Button>
            )}
          </div>
          {previewImages["traseira"] && (
            <div className="mt-2 relative aspect-video">
              <img
                src={previewImages["traseira"] || "/placeholder.svg"}
                alt="Foto Traseira do Veículo"
                className="object-cover w-full h-full rounded-md"
              />
            </div>
          )}
        </div>
      </div>
      

      <p className="text-sm text-muted-foreground mt-4">* Campos obrigatórios</p>
    </div>
  )
}

