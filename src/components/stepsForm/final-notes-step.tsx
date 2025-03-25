"use client"

import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { useFormContext } from "react-hook-form"
import type { VehicleInspectionData } from "@/components/vehicle-inspection-form"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Controller } from "react-hook-form"

export default function FinalNotesStep() {
  const { register, control } = useFormContext<VehicleInspectionData>()

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold mb-4">Observações Finais</h2>

      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="finalNotes">Observações Gerais</Label>
          <Textarea
            id="finalNotes"
            {...register("finalNotes")}
            placeholder="Adicione observações gerais sobre o veículo, condições específicas ou recomendações..."
            className="min-h-[200px]"
          />
        </div>

        <div className="border rounded-md p-4 space-y-4">
          <h3 className="text-lg font-semibold">Situação Geral do Veículo</h3>

          <Controller
            control={control}
            name="approvalStatus"
            render={({ field }) => (
              <RadioGroup value={field.value} onValueChange={field.onChange} className="space-y-2">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="approved" id="approved" />
                  <Label htmlFor="approved" className="font-medium text-green-600">
                    Aprovado
                  </Label>
                </div>

                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="rejected" id="rejected" />
                  <Label htmlFor="rejected" className="font-medium text-red-600">
                    Reprovado
                  </Label>
                </div>
              </RadioGroup>
            )}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="rejectionReason">Motivo da Reprovação (se aplicável)</Label>
          <Textarea
            id="rejectionReason"
            {...register("rejectionReason")}
            placeholder="Descreva os motivos da reprovação, se o veículo foi reprovado..."
            className="min-h-[100px]"
          />
        </div>
      </div>

      <div className="bg-muted p-4 rounded-md mt-4">
        <p className="text-sm text-muted-foreground">
          Estas observações finais e o status de aprovação serão incluídos no relatório final de inspeção. Certifique-se
          de que todas as informações estão corretas antes de prosseguir.
        </p>
      </div>
    </div>
  )
}

