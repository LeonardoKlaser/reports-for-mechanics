"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import GeneralInfoStep from "@/components/stepsForm/general-info-step"
import AccessoriesStep from "@/components/stepsForm/accessorios-step"
import ImageUploadStep from "@/components/stepsForm/image-upload-step"
import ConditionCheckStep from "@/components/stepsForm/condition-check-step"
import ReviewStep from "@/components/stepsForm/review-step"
import StepIndicator from "@/components/step-indicator"
import { FormProvider, useForm } from "react-hook-form"

export type VehicleInspectionData = {
  // Informações Gerais
  reportNumber: string
  inspectionDate: string
  make: string
  model: string
  color: string
  year: string
  yearFab: string
  licensePlate: string
  vin: string
  odometer: string
  combustivel: string
  unidade: string
  cliente: string

  // Acessórios
  accessories: string

  // Verificações de Condição
  conditionChecks: {
    [key: string]: "ok" | "issue" | "na"
  }
  conditionNotes: {
    [key: string]: string
  }

  // campo para imagens
  images: {
    [key: string]: File | undefined
  }
}

const initialData: VehicleInspectionData = {
  // Informações Gerais
  reportNumber: "",
  inspectionDate: new Date().toISOString().split("T")[0],
  make: "",
  model: "",
  color: "",
  yearFab: "",
  year: "",
  licensePlate: "",
  vin: "",
  odometer: "",
  combustivel:"",
  unidade: "",
  cliente: "",
  accessories: "",
  conditionChecks: {
    exterior: "na",
    chassis: "na",
    engine: "na",
    transmission: "na",
    brakes: "na",
    suspension: "na",
    electrical: "na",
    interior: "na",
    lights: "na",
    tires: "na",
  },
  conditionNotes: {
    exterior: "",
    chassis: "",
    engine: "",
    transmission: "",
    brakes: "",
    suspension: "",
    electrical: "",
    interior: "",
    lights: "",
    tires: "",
  },
  
  images: {},
}

export default function VehicleInspectionForm() {
  const [currentStep, setCurrentStep] = useState(0)

  const methods = useForm<VehicleInspectionData>({
    defaultValues: initialData,
    mode: "onBlur",
  })

  const steps = [
    {
      name: "Informações Gerais",
      component: GeneralInfoStep,
      validationFields: ["reportNumber", "make", "model", "year"],
    },
    { name: "Acessórios", component: AccessoriesStep, validationFields: [] },
    { name: "Upload de Imagens", component: ImageUploadStep, validationFields: [] },
    { name: "Verificação de Condição", component: ConditionCheckStep, validationFields: [] },
    { name: "Revisão", component: ReviewStep, validationFields: [] },
  ]

  const CurrentStepComponent = steps[currentStep].component

  const handleNext = async () => {
    const fieldsToValidate = steps[currentStep].validationFields

    // Valida apenas os campos do passo atual
    const isValid = await methods.trigger(fieldsToValidate as any)

    if (isValid && currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1)
      window.scrollTo(0, 0)
    }
  }

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
      window.scrollTo(0, 0)
    }
  }

  const onSubmit = (data: VehicleInspectionData) => {
    // Isso se conectaria ao seu serviço de geração de PDF
    console.log("Gerando PDF com os dados:", data)
    alert("A geração do PDF aconteceria aqui com os dados coletados.")
  }

  return (
    <div className="max-w-3xl mx-auto">
      <StepIndicator steps={steps.map((step) => step.name)} currentStep={currentStep} />

      <Card className="mt-6">
        <CardContent className="pt-6">
          <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(onSubmit)}>
              <CurrentStepComponent />

              <div className="flex justify-between mt-6">
                <Button type="button" variant="outline" onClick={handlePrevious} disabled={currentStep === 0}>
                  Anterior
                </Button>

                {currentStep < steps.length - 1 ? (
                  <Button type="button" onClick={handleNext}>
                    Próximo
                  </Button>
                ) : (
                  <Button type="submit">Gerar PDF</Button>
                )}
              </div>
            </form>
          </FormProvider>
        </CardContent>
      </Card>
    </div>
  )
}

