"use client"

import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { useFormContext, Controller } from "react-hook-form"
import type { VehicleInspectionData } from "@/components/vehicle-inspection-form"

export default function ConditionCheckStep() {
  const { control, register } = useFormContext<VehicleInspectionData>()

  type DataItem = {
    id: string
    labels: Record<number, { label: string; infos?: Record<number, string> }>
  }

  const checkItems = [
    { id: "chassi", label: "Chassi V2" },
    { id: "motor", label: "Motor V2" },
    { id: "cambio", label: "Câmbio V2" },
    { id: "eta", label: "ETA´s V2" },
    { id: "placas", label: "Placas V2" },
    { id: "vidros", label: "Vidros V2" },
    { id: "estrutura", label: "Estrutura Veicular V2" },
    { id: "historico", label: "Histórico:Leilão/Sinistro" },
    { id: "documentacao", label: "Documentação V2" },
  ]

  const dataItems: DataItem[] = [
    {
      id: "chassi",
      labels: { 1: { label: "Gravação do Chassi: ", infos: { 1: "Numeração Identificadora", 2: "Chapa Suporte: " } } },
    },
    { id: "motor", labels: { 1: { label: "Numeração do Motor" } } },
    { id: "cambio", labels: { 1: { label: "Numeração do Câmbio" } } },
    {
      id: "eta",
      labels: {
        1: {
          label: "Etiquetas de Identificação",
          infos: { 1: "ETA Motor:", 2: "ETA Batente da Porta:", 3: "ETA Assoalho:", 4: "Plaqueta Ano Fabricação:" },
        },
      },
    },
    { id: "placas", labels: { 1: { label: "Placa Dianteira" }, 2: { label: "Placa Traseira" } } },
    {
      id: "vidros",
      labels: {
        1: {
          label: "Condição do Chassi nos Vidros",
          infos: {
            1: "Parabrisa:",
            2: "Porta Diante. Esq.:",
            3: "Porta Tras. Esq./Lat Tras. Dir.:",
            4: "Vigia Traseiro:",
            5: "Porta Tras.Dir/Lat Tras.Dir.:",
            6: "Porta Diante.Dir.:",
          },
        },
      },
    },
    {
      id: "estrutura",
      labels: {
        1: {
          label: "Estrutura Veicular - Dianteira",
          infos: {
            1: "Longarina Dianteira Esquerda",
            2: "Longarina Dianteira Direita",
            3: "Torre do Amortecedor Dianteira Esquerda",
            4: "Torre do Amortecedor Dianteira Direita",
            5: "Painel Corta Fogo",
            6: "Painel Dianteiro Inferior/Superior ou Alma do Para-choque",
            7: "Crashbox (Parafusado)",
            8: "Crashbox/Quadro do Radiador (Soldado)",
            9: "Paralama Interno Dianteiro Direito",
            10: "Paralama Interno Dianteiro Esquerdo",
          },
        },
        2: {
          label: "Estrutura Veicular - Traseira",
          infos: {
            1: "Longarina Traseira Esquerda",
            2: "Longarina Traseira Direita",
            3: "Caixa de Roda Traseira Esquerda",
            4: "Caixa de Roda Traseira Direita",
            5: "Painel Traseiro",
          },
        },
        3: {
          label: "Estrutura Veicular - Laterais",
          infos: {
            1: "Folha Lateral Traseira Direita",
            2: "Folha Lateral Traseira Esquerda",
            3: "Caixa de Ar Direita",
            4: "Caixa de Ar Esquerda",
            5: "Coluna Esquerda (A)",
            6: "Coluna Esquerda (B)",
            7: "Coluna Esquerda (C)",
            8: "Coluna Direita (A)",
            9: "Coluna Direita (B)",
            10: "Coluna Direita (C)",
          },
        },
        4: {
          label: "Estrutura Veicular - Outros",
          infos: {
            1: "Assoalho do Monobloco (Habitáculo, Área Visível)",
            2: "Assoalho do Portamalas / Caçamba",
            3: "Caixa de Estepe (Divisão Assoalho do Portamalas)",
            4: "Estrutura do Teto",
            5: "Folha do Teto",
          },
        },
      },
    },
    { id: "historico", labels: { 1: { label: "Histórico Veicular:" } } },
    { id: "documentacao", labels: { 1: { label: "CRLV/Pesquisa Novo" }, 2: { label: "Veículo Novo" } } },
  ]

  // Helper function to find dataItem by id
  const findDataItemById = (id: string) => {
    return dataItems.find((item) => item.id === id)
  }

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold mb-4">Lista de Verificação de Condição do Veículo</h2>

      {checkItems.map((checkItem) => {
        const matchingDataItem = findDataItemById(checkItem.id)

        return (
          <div key={checkItem.id} className="border rounded-md p-4">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <Label className="text-base font-medium">{checkItem.label}</Label>

              <Controller
                control={control}
                name={`conditionChecks.${checkItem.id}` as any}
                render={({ field }) => (
                  <RadioGroup value={field.value} onValueChange={field.onChange} className="flex space-x-4">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="ok" id={`${checkItem.id}-ok`} />
                      <Label htmlFor={`${checkItem.id}-ok`} className="font-normal">
                        OK
                      </Label>
                    </div>

                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="issue" id={`${checkItem.id}-issue`} />
                      <Label htmlFor={`${checkItem.id}-issue`} className="font-normal">
                        Problema
                      </Label>
                    </div>
                  </RadioGroup>
                )}
              />
            </div>

            {matchingDataItem &&
              Object.entries(matchingDataItem.labels).map(([labelKey, labelData]) => (
                <div key={`${checkItem.id}-label-${labelKey}`} className="mt-4">
                  <h3 className="font-medium text-sm mb-2">{labelData.label}:</h3>

                  {labelData.infos ? (
                    <div className="grid gap-3 mt-2">
                      {Object.entries(labelData.infos).map(([infoKey, infoLabel]) => (
                        <div key={`${checkItem.id}-label-${labelKey}-info-${infoKey}`}>
                          <Label htmlFor={`${checkItem.id}-label-${labelKey}-info-${infoKey}`} className="text-[12px] font-normal">
                            {infoLabel}
                          </Label>
                          <Input
                            id={`${checkItem.id}-label-${labelKey}-info-${infoKey}`}
                            {...register(`detailFields.${checkItem.id}.${labelKey}.${infoKey}` as any)}
                            className="mt-1"
                          />
                        </div>
                      ))}
                    </div>
                  ) : (
                    <Input
                      id={`${checkItem.id}-label-${labelKey}`}
                      {...register(`detailFields.${checkItem.id}.${labelKey}` as any)}
                      className="mt-1"
                    />
                  )}
                </div>
              ))}
          </div>
        )
      })}
    </div>
  )
}

