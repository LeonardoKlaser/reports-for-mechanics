import { useFormContext } from "react-hook-form"
import type { VehicleInspectionData } from "@/components/vehicle-inspection-form"
import Image from "next/image"

// Atualize a interface VehicleInspectionData para incluir detailFields
interface ExtendedVehicleInspectionData extends VehicleInspectionData {
  detailFields?: {
    [key: string]: {
      [key: string]: string | { [key: string]: string }
    }
  }
}

export default function ReviewStep() {
  const { watch } = useFormContext<ExtendedVehicleInspectionData>()
  const formData = watch()

  const formatConditionStatus = (status: string) => {
    switch (status) {
      case "ok":
        return "OK ✓"
      case "issue":
        return "Problema ⚠️"
      case "na":
        return "N/A"
      default:
        return status
    }
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

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold mb-4">Revisar Relatório de Inspeção</h2>

      <div className="space-y-6">
        <section className="space-y-2">
          <h3 className="text-lg font-medium">Informações Gerais</h3>
          <div className="grid grid-cols-2 gap-2 text-sm">
            <div className="font-medium">Número do Relatório:</div>
            <div>{formData.reportNumber || "—"}</div>

            <div className="font-medium">Data da Inspeção:</div>
            <div>{formData.inspectionDate || "—"}</div>

            <div className="font-medium">Marca:</div>
            <div>{formData.make || "—"}</div>

            <div className="font-medium">Modelo:</div>
            <div>{formData.model || "—"}</div>

            <div className="font-medium">Cor:</div>
            <div>{formData.color || "—"}</div>

            <div className="font-medium">Ano:</div>
            <div>{formData.year || "—"}</div>

            <div className="font-medium">Placa:</div>
            <div>{formData.licensePlate || "—"}</div>

            <div className="font-medium">Número do Chassi (VIN):</div>
            <div>{formData.vin || "—"}</div>

            <div className="font-medium">Quilometragem:</div>
            <div>{formData.odometer || "—"}</div>
          </div>
        </section>

        <section className="space-y-2">
          <h3 className="text-lg font-medium">Acessórios e Equipamentos</h3>
          <div className="text-sm border rounded-md p-3 bg-muted/50">
            {formData.accessories || "Nenhum acessório listado"}
          </div>
        </section>

        <section className="space-y-2">
          <h3 className="text-lg font-medium">Imagens Carregadas</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {Object.entries(formData.images || {}).map(([partName, file]) => (
              <div key={partName} className="text-sm">
                <p className="font-medium mb-1">{partName}</p>
                <div className="relative aspect-video">
                  <Image
                    src={URL.createObjectURL(file as File) || "/placeholder.svg"}
                    alt={`Imagem de ${partName}`}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-md"
                  />
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-2">
          <h3 className="text-lg font-medium">Lista de Verificação de Condição</h3>
          <div className="space-y-4">
            {checkItems.map((item) => {
              const status = formData.conditionChecks?.[item.id] || "na"
              const details = formData.detailFields?.[item.id]

              return (
                <div key={item.id} className="border rounded-md p-3">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium">{item.label}:</span>
                    <span className={status === "issue" ? "text-destructive font-medium" : ""}>
                      {formatConditionStatus(status)}
                    </span>
                  </div>
                  {details && (
                    <div className="text-sm space-y-2">
                      {Object.entries(details).map(([labelKey, labelData]) => (
                        <div key={`${item.id}-${labelKey}`}>
                          <p className="font-medium">
                            {typeof labelData === "object"
                              ? labelData.label || `Detalhe ${labelKey}`
                              : `Detalhe ${labelKey}`}
                            :
                          </p>
                          {typeof labelData === "string" ? (
                            <p>{labelData}</p>
                          ) : (
                            <div className="pl-4">
                              {Object.entries(labelData).map(([infoKey, infoValue]) => (
                                <p key={`${item.id}-${labelKey}-${infoKey}`}>
                                  <span className="font-medium">{infoKey}:</span> {infoValue as string}
                                </p>
                              ))}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </section>
      </div>

      <div className="bg-muted p-4 rounded-md mt-6">
        <p className="text-sm text-muted-foreground">
          Por favor, revise todas as informações para garantir a precisão antes de gerar o relatório em PDF. Você pode
          voltar aos passos anteriores para fazer as correções necessárias.
        </p>
      </div>
    </div>
  )
}

