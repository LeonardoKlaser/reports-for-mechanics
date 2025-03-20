"use client"

import { useConvertImages } from "@/lib/convertImages"

interface ClientImageSectionProps {
  images: { [key: string]: File }
  labels: string[]
}

export function ClientImageSection({ images, labels }: ClientImageSectionProps) {
  const imagePreviews = useConvertImages({ images })

  return (
    <div className="w-[calc(100vw-60px)] mx-auto pt-[15px]">
      <div className="grid grid-cols-3 gap-4 break-inside-avoid">
        {labels.map((label, index) => (
          <div key={index} className="flex flex-col items-center break-inside-avoid-page">
            <span className="text-sm font-semibold mb-1">{label}</span>
            <div className="w-full h-[200px] border flex items-center justify-center bg-gray-100">
              {imagePreviews[label] ? (
                <img
                  src={imagePreviews[label] || "/placeholder.svg"}
                  alt={label}
                  className="w-full h-full object-cover"
                />
              ) : (
                <span className="text-gray-400">Imagem não disponível</span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

