"use client"

import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Textarea } from "@/components/ui/textarea"
import { useFormContext, Controller } from "react-hook-form"
import type { VehicleInspectionData } from "@/components/vehicle-inspection-form"

export default function ConditionCheckStep() {
  const { control, register } = useFormContext<VehicleInspectionData>()

  const checkItems = [
    { id: "exterior", label: "Carroceria e Pintura Externa" },
    { id: "chassis", label: "Chassi e Estrutura" },
    { id: "engine", label: "Motor" },
    { id: "transmission", label: "Transmissão e Câmbio" },
    { id: "brakes", label: "Freios" },
    { id: "suspension", label: "Suspensão e Direção" },
    { id: "electrical", label: "Sistema Elétrico" },
    { id: "interior", label: "Interior" },
    { id: "lights", label: "Luzes e Sinalizações" },
    { id: "tires", label: "Pneus e Rodas" },
  ]

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold mb-4">Lista de Verificação de Condição do Veículo</h2>

      {checkItems.map((item) => (
        <div key={item.id} className="border rounded-md p-4">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <Label className="text-base font-medium">{item.label}</Label>

            <Controller
              control={control}
              name={`conditionChecks.${item.id}` as any}
              render={({ field }) => (
                <RadioGroup value={field.value} onValueChange={field.onChange} className="flex space-x-4">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="ok" id={`${item.id}-ok`} />
                    <Label htmlFor={`${item.id}-ok`} className="font-normal">
                      OK
                    </Label>
                  </div>

                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="issue" id={`${item.id}-issue`} />
                    <Label htmlFor={`${item.id}-issue`} className="font-normal">
                      Problema
                    </Label>
                  </div>

                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="na" id={`${item.id}-na`} />
                    <Label htmlFor={`${item.id}-na`} className="font-normal">
                      N/A
                    </Label>
                  </div>
                </RadioGroup>
              )}
            />
          </div>

          <div className="mt-3">
            <Label htmlFor={`${item.id}-notes`} className="text-sm">
              Observações
            </Label>
            <Textarea
              id={`${item.id}-notes`}
              {...register(`conditionNotes.${item.id}` as any)}
              placeholder="Adicione detalhes sobre a condição, danos ou problemas..."
              className="mt-1"
            />
          </div>
        </div>
      ))}
    </div>
  )
}

