/* eslint-disable */
"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import GeneralInfoStep from "@/components/stepsForm/general-info-step"
import AccessoriesStep from "@/components/stepsForm/accessorios-step"
import ImageUploadStep from "@/components/stepsForm/image-upload-step"
import ConditionCheckStep from "@/components/stepsForm/condition-check-step"
import ReviewStep from "@/components/stepsForm/review-step"
import FinalNotesStep from "@/components/stepsForm/final-notes-step"
import StepIndicator from "@/components/step-indicator"
import { FormProvider, useForm } from "react-hook-form"
import { onDownload } from "@/actions/onDownload"
import { useToast } from "@/hooks/use-toast"
import { useSession } from "next-auth/react"
import { debug } from "console"

// Atualize a estrutura de dados do formulário
export type VehicleInspectionData = {
  
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
  accessories: string
  conditionChecks: {
    [key: string]: "ok" | "issue" | "na"
  }
  summaryImages: {
    frontal?: string
    traseira?: string
  }
  conditionNotes: {
    [key: string]: string
  }
  images: {
    [key: string]: string
  }
  detailFields?: {
    [key: string]: string[][] 
  }
  finalNotes: string
  approvalStatus: "approved" | "rejected"
  rejectionReason: string
  imageCompany: string
}
// interface RenderPdfProps {
//   formData: VehicleInspectionData
// }

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
  conditionChecks: {},
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
  // Inicialize o campo de imagens
  images: {},
  summaryImages: {
    frontal: "",
    traseira: ""
  },
  finalNotes: "",
  approvalStatus: "approved",
  rejectionReason: "",
  imageCompany: "",
}

// Função para comprimir imagens
const compressImage = async (base64String: string, maxWidth = 800, quality = 0.7): Promise<string> => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.src = base64String;
    
    img.onload = () => {
      const canvas = document.createElement('canvas');
      let width = img.width;
      let height = img.height;

      // Redimensiona mantendo a proporção
      if (width > maxWidth) {
        height = Math.round((height * maxWidth) / width);
        width = maxWidth;
      }

      canvas.width = width;
      canvas.height = height;

      const ctx = canvas.getContext('2d');
      if (!ctx) {
        reject(new Error('Could not get canvas context'));
        return;
      }

      ctx.drawImage(img, 0, 0, width, height);
      
      // Converte para JPEG com qualidade reduzida
      const compressedBase64 = canvas.toDataURL('image/jpeg', quality);
      resolve(compressedBase64);
    };

    img.onerror = (error) => {
      reject(error);
    };
  });
};

// Função para comprimir todas as imagens do formulário
const compressFormImages = async (data: VehicleInspectionData): Promise<VehicleInspectionData> => {
  const compressedData = { ...data };
  
  // Comprime imagens de resumo
  if (compressedData.summaryImages) {
    if (compressedData.summaryImages.frontal) {
      compressedData.summaryImages.frontal = await compressImage(compressedData.summaryImages.frontal);
    }
    if (compressedData.summaryImages.traseira) {
      compressedData.summaryImages.traseira = await compressImage(compressedData.summaryImages.traseira);
    }
  }

  // Comprime imagens de condição
  if (compressedData.images) {
    const compressedImages: { [key: string]: string } = {};
    for (const [key, value] of Object.entries(compressedData.images)) {
      if (value) {
        compressedImages[key] = await compressImage(value);
      }
    }
    compressedData.images = compressedImages;
  }

  return compressedData;
};

export default function VehicleInspectionForm() {
  const [currentStep, setCurrentStep] = useState(0)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const {toast} = useToast();
  const {data: session} = useSession();

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
    { name: "Observações Finais", component: FinalNotesStep, validationFields: [] },
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

  const onSubmit = async(data: VehicleInspectionData) => {
    try {
      setIsSubmitting(true);
      const email = session?.user?.email;
      
      // Busca dados do usuário
      const response = await fetch("/api/get-user", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const result = await response.json();
      const imageCompany = result.image ?? "";

      // Comprime as imagens antes de enviar
      const compressedData = await compressFormImages(data);
      const updateData = {...compressedData, imageCompany};

      // Mostra toast de carregamento
      toast({
        title: "Gerando PDF",
        description: "Por favor, aguarde enquanto processamos suas imagens...",
      });

      await onDownload({formData: updateData}, toast);
      console.log("PDF gerado com sucesso");
    } catch (error) {
      console.error("Erro ao gerar PDF:", error);
      toast({
        title: "Erro",
        description: "Ocorreu um erro ao gerar o PDF. Por favor, tente novamente.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
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
                <Button type="button" variant="outline" onClick={handlePrevious} disabled={currentStep === 0 || isSubmitting}>
                  Anterior
                </Button>

                {currentStep < steps.length - 1 ? (
                  <Button type="button" onClick={handleNext}>
                    Próximo
                  </Button>
                ) : (
                  <Button type="submit" disabled={isSubmitting}>
                    {isSubmitting ? "Gerando PDF..." : "Gerar PDF"}
                  </Button>
                )}
              </div>
            </form>
          </FormProvider>
        </CardContent>
      </Card>
    </div>
  )
}

