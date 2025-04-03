import { CheckIcon } from "lucide-react"

interface StepIndicatorProps {
  steps: string[]
  currentStep: number
}

export default function StepIndicator({ steps, currentStep }: StepIndicatorProps) {
  return (
    <div className="flex items-center justify-center">
      {steps.map((step, index) => (
        <div key={step} className="flex items-center">
          <div
            className={`flex items-center justify-center w-6 h-6 sm:w-8 sm:h-8 rounded-full border-2 ${
              index < currentStep
                ? "bg-primary border-primary text-primary-foreground"
                : index === currentStep
                  ? "border-primary text-primary"
                  : "border-muted-foreground text-muted-foreground"
            }`}
          >
            {index < currentStep ? (
              <CheckIcon className="w-3 h-3 sm:w-4 sm:h-4" />
            ) : (
              <span className="text-xs sm:text-sm">{index + 1}</span>
            )}
          </div>

          {index < steps.length - 1 && (
            <div className={`w-8 sm:w-12 h-1 ${index < currentStep ? "bg-primary" : "bg-muted"}`} />
          )}
        </div>
      ))}
    </div>
  )
}

