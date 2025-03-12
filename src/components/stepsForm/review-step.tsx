"use client"
import { useFormContext } from "react-hook-form"
import React from "react"

import type { VehicleInspectionData } from "@/components/vehicle-inspection-form"
import Image from "next/image"
import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"

interface ExtendedVehicleInspectionData extends VehicleInspectionData {
  detailFields?: {
    [key: string]: {
      [key: string]: string | { [key: string]: string }
    }
  }
}

export default function ReviewStep() {
  const { watch, setValue } = useFormContext<ExtendedVehicleInspectionData>()
  const formData = watch()
  const [editMode, setEditMode] = useState<string | null>(null)

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

  const handleEdit = (section: string) => {
    setEditMode(section)
  }

  const handleSave = () => {
    setEditMode(null)
  }

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold mb-4">Revisar Relatório de Inspeção</h2>

      <div className="space-y-6">
        <section className="space-y-2">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-medium">Informações Gerais</h3>
            {editMode !== "general" ? (
              <Button onClick={() => handleEdit("general")}>Editar</Button>
            ) : (
              <Button onClick={handleSave}>Salvar</Button>
            )}
          </div>
          {editMode === "general" ? (
            <div className="grid grid-cols-2 gap-2 text-sm">
              {Object.entries(formData).map(([key, value]) => {
                if (
                  typeof value === "string" &&
                  !["accessories", "images", "conditionChecks", "detailFields"].includes(key)
                ) {
                  return (
                    <React.Fragment key={key}>
                      <Label htmlFor={key} className="font-medium">
                        {key}:
                      </Label>
                      <Input
                        id={key}
                        value={value}
                        onChange={(e) => setValue(key as keyof VehicleInspectionData, e.target.value)}
                      />
                    </React.Fragment>
                  )
                }
                return null
              })}
            </div>
          ) : (
            <div className="grid grid-cols-2 gap-2 text-sm">
              {Object.entries(formData).map(([key, value]) => {
                if (
                  typeof value === "string" &&
                  !["accessories", "images", "conditionChecks", "detailFields"].includes(key)
                ) {
                  return (
                    <React.Fragment key={key}>
                      <div className="font-medium">{key}:</div>
                      <div>{value || "—"}</div>
                    </React.Fragment>
                  )
                }
                return null
              })}
            </div>
          )}
        </section>

        <section className="space-y-2">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-medium">Acessórios e Equipamentos</h3>
            {editMode !== "accessories" ? (
              <Button onClick={() => handleEdit("accessories")}>Editar</Button>
            ) : (
              <Button onClick={handleSave}>Salvar</Button>
            )}
          </div>
          {editMode === "accessories" ? (
            <Textarea
              value={formData.accessories}
              onChange={(e) => setValue("accessories", e.target.value)}
              className="min-h-[100px]"
            />
          ) : (
            <div className="text-sm border rounded-md p-3 bg-muted/50">
              {formData.accessories || "Nenhum acessório listado"}
            </div>
          )}
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
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-medium">Lista de Verificação de Condição</h3>
            {editMode !== "condition" ? (
              <Button onClick={() => handleEdit("condition")}>Editar</Button>
            ) : (
              <Button onClick={handleSave}>Salvar</Button>
            )}
          </div>
          <div className="space-y-4">
            {checkItems.map((item) => {
              const status = formData.conditionChecks?.[item.id] || "na"
              const details = formData.detailFields?.[item.id]

              return (
                <div key={item.id} className="border rounded-md p-3">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium">{item.label}:</span>
                    {editMode === "condition" ? (
                      <RadioGroup
                        value={status}
                        onValueChange={(value) =>
                          setValue(`conditionChecks.${item.id}`, value as "ok" | "issue" | "na")
                        }
                        className="flex space-x-4"
                      >
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="ok" id={`${item.id}-ok`} />
                          <Label htmlFor={`${item.id}-ok`}>OK</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="issue" id={`${item.id}-issue`} />
                          <Label htmlFor={`${item.id}-issue`}>Problema</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="na" id={`${item.id}-na`} />
                          <Label htmlFor={`${item.id}-na`}>N/A</Label>
                        </div>
                      </RadioGroup>
                    ) : (
                      <span className={status === "issue" ? "text-destructive font-medium" : ""}>
                        {formatConditionStatus(status)}
                      </span>
                    )}
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
                          {editMode === "condition" ? (
                            typeof labelData === "string" ? (
                              <Input
                                value={labelData}
                                onChange={(e) => setValue(`detailFields.${item.id}.${labelKey}`, e.target.value)}
                              />
                            ) : (
                              <div className="pl-4 space-y-2">
                                {Object.entries(labelData).map(([infoKey, infoValue]) => (
                                  <div key={`${item.id}-${labelKey}-${infoKey}`}>
                                    <Label htmlFor={`${item.id}-${labelKey}-${infoKey}`}>{infoKey}</Label>
                                    <Input
                                      id={`${item.id}-${labelKey}-${infoKey}`}
                                      value={infoValue as string}
                                      onChange={(e) =>
                                        setValue(`detailFields.${item.id}.${labelKey}.${infoKey}`, e.target.value)
                                      }
                                    />
                                  </div>
                                ))}
                              </div>
                            )
                          ) : typeof labelData === "string" ? (
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
          editar as informações clicando no botão Editar em cada seção.
        </p>
      </div>
    </div>
  )
}

