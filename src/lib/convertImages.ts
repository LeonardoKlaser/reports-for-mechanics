"use client"

import { useEffect, useState } from "react"

interface ConvertImagesProps {
  images: { [key: string]: File }
}

export const useConvertImages = ({ images }: ConvertImagesProps) => {
  const [imagePreviews, setImagePreviews] = useState<{ [key: string]: string }>({})

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

  useEffect(() => {
    const convertImagesToBase64 = async () => {
      const previews: { [key: string]: string } = {}

      for (const label of labels) {
        const file = images[label]
        if (file instanceof File) {
          previews[label] = await getBase64(file)
        }
      }

      setImagePreviews(previews)
    }

    if (images) {
      convertImagesToBase64()
    }
  }, [images]) // Atualiza quando `images` mudar

  const getBase64 = (file: File): Promise<string> =>
    new Promise((resolve, reject) => {
      const reader = new FileReader()
      reader.readAsDataURL(file)
      reader.onload = () => resolve(reader.result as string)
      reader.onerror = reject
    })

  return imagePreviews
}

