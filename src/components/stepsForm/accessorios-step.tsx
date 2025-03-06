import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { useFormContext } from "react-hook-form"
import type { VehicleInspectionData } from "@/components/vehicle-inspection-form"

export default function AccessoriesStep() {
  const { register } = useFormContext<VehicleInspectionData>()

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold mb-4">Acessórios e Equipamentos do Veículo</h2>

      <div className="space-y-2">
        <Label htmlFor="accessories">Liste todos os acessórios e equipamentos presentes no veículo</Label>
        <Textarea
          id="accessories"
          {...register("accessories")}
          placeholder="Sistema de navegação GPS, sistema de som premium, teto solar, bancos de couro, etc."
          className="min-h-[200px]"
        />
      </div>

      <div className="bg-muted p-4 rounded-md mt-4">
        <p className="text-sm text-muted-foreground">
          Inclua opções instaladas de fábrica, adições pós-venda e quaisquer recursos notáveis. Seja específico sobre
          marcas e condições quando aplicável.
        </p>
      </div>
    </div>
  )
}

