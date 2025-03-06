import { useFormContext } from "react-hook-form"
import type { VehicleInspectionData } from "@/components/vehicle-inspection-form"

export default function ReviewStep() {
  const { watch } = useFormContext<VehicleInspectionData>()
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
          <h3 className="text-lg font-medium">Lista de Verificação de Condição</h3>
          <div className="space-y-3">
            {Object.entries(formData.conditionChecks).map(([key, value]) => {
              const label = key.charAt(0).toUpperCase() + key.slice(1)
              const notes = formData.conditionNotes[key]

              return (
                <div key={key} className="border rounded-md p-3">
                  <div className="flex justify-between">
                    <span className="font-medium">{label}:</span>
                    <span className={value === "issue" ? "text-destructive font-medium" : ""}>
                      {formatConditionStatus(value)}
                    </span>
                  </div>
                  {notes && <div className="mt-1 text-sm text-muted-foreground">{notes}</div>}
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

