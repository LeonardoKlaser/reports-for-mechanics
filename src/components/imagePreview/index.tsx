"use client"

import { useConvertImages } from "@/lib/convertImages"

interface ImagePreviewProps {
  images: { [key: string]: File }
}

const ImagePreview = ({ images }: ImagePreviewProps) => {
  const imagePreviews = useConvertImages({ images })
  const labels = [
    "Frente",
    "Traseira",
    "Placa",
    "KM",
    "Compartimento motor",
    "Motor",
    "Câmbio",
    "Etiqueta ETA Motor",
    "Chassi",
    "Foto eta coluna",
    "Data Cinto Segurança",
    "Gravação do vidro",
    "Torre amort diant/direita",
    "Torre amort diant/esquer",
    "Longarina diant/direita",
    "Longarina dianteira/esquerda",
    "Painel Dianteiro",
    "Caixa De Ar esq",
    "Assoalho Central",
    "Trilho Coluna Tras. Esq",
    "Longarina traseira/esquerda",
    "Longarina traseira/direita",
    "Junção Assoalho/Painel tras",
    "Assoalho Int. Portamalas",
    "Trilho Colunas Tras, Dir",
    "Caixa de Ar dir",
    "Painel Geral",
    "Acabamento P.E",
    "Multimidia/ Painel central",
    "Acabamento P.D",
    "Banco Traseiro",
    "Pneus/Rodas Diant esq.",
    "Pneus/Rodas Traseiro Esq.",
    "Pneus/Rodas Traseiro Dir",
    "Pneus/Rodas Diant. Direito",
    "Pneu Estepe",
    "Extra Impressa 1",
  ]

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

export default ImagePreview

