/* eslint-disable */
import type React from "react"

import type { VehicleInspectionData } from "@/components/vehicle-inspection-form"

  interface RenderPdfProps {
    formData: VehicleInspectionData
  }

const DocumentTemplate: React.FC<RenderPdfProps> = ({formData}) => {
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
    <html>
      <head>
        <script src="https://cdn.tailwindcss.com"></script>
        <style>
          {`
            @media print {
              table { width: 100%; border-collapse: collapse; }
              thead { display: table-header-group; }
              tbody tr { page-break-inside: avoid; break-inside: avoid; }
            }
          `}
        </style>
      </head>
      <body>
        <div className="relative w-full h-[100px] bg-white flex items-center px-4">
          <div
            className="absolute top-0 left-0 w-full h-full bg-blue-900"
            style={{
              clipPath: "polygon(0% 0%, 65% 0%, 50% 100%, 0% 100%)",
            }}
          ></div>
          <div className="relative text-white text-xl font-semibold italic ml-6">VISTORIA CAUTELAR V2</div>
          <div className="relative ml-auto mr-6">
            <img
              src="https://img.freepik.com/vetores-premium/design-de-logotipo-de-produtos-de-alta-qualidader_984027-135394.jpg?"
              alt="Super Visão"
              className="w-[270px] h-[100px] object-cover"
            />
          </div>
        </div>

        <div className="w-[calc(100vw-60px)] mx-auto pt-[15px]">
          <table className="w-full border-collapse mt-[15px]">
            <tr className="pb-[15px]">
              <td className="border-2 border-gray-300 p-[5px]">
                <div className="bg-gray-500 text-white px-2 py-1 font-bold text-sl leading-tight">SITUAÇÃO GERAL</div>
                <div className="px-2 mt-[1px] flex items-center justify-center">
                  <p className="text-gray-700 font-bold text-3xl leading-tight text-center">
                    {formData.conditionChecks.chassi === "ok" ? "Aprovado" : "Reprovado"}
                  </p>
                </div>
              </td>
            </tr>
          </table>

          {/* Dados Gerais do Veículo */}
          <div className="border-2 border-gray-300 p-[5px] mt-4">
            <div className="bg-gray-500 text-white px-2 py-1 font-bold text-xs leading-tight">
              DADOS GERAIS DO VEÍCULO
            </div>
            <div className="px-2 mt-[1px]">
              <table className="w-full text-xs">
                <tbody>
                  <tr className="border-b border-gray-300">
                    <td className="pl-[15px] w-1/2 text-left font-semibold">Número do Laudo</td>
                    <td className="pl-[15px] w-1/2">{formData.reportNumber}</td>
                  </tr>
                  <tr className="border-b border-gray-300">
                    <td className="pl-[15px] w-1/2 text-left font-semibold">Data de Vistoria</td>
                    <td className="pl-[15px] w-1/2">{formData.inspectionDate}</td>
                  </tr>
                  <tr className="border-b border-gray-300">
                    <td className="pl-[15px] w-1/2 text-left font-semibold">Marca</td>
                    <td className="pl-[15px] w-1/2">{formData.make}</td>
                  </tr>
                  <tr className="border-b border-gray-300">
                    <td className="pl-[15px] w-1/2 text-left font-semibold">Modelo</td>
                    <td className="pl-[15px] w-1/2">{formData.model}</td>
                  </tr>
                  <tr className="border-b border-gray-300">
                    <td className="pl-[15px] w-1/2 text-left font-semibold">Cor</td>
                    <td className="pl-[15px] w-1/2">{formData.color}</td>
                  </tr>
                  <tr className="border-b border-gray-300">
                    <td className="pl-[15px] w-1/2 text-left font-semibold">Ano de Fabricação</td>
                    <td className="pl-[15px] w-1/2">{formData.year}</td>
                  </tr>
                  <tr className="border-b border-gray-300">
                    <td className="pl-[15px] w-1/2 text-left font-semibold">Placa</td>
                    <td className="pl-[15px] w-1/2">{formData.licensePlate}</td>
                  </tr>
                  <tr className="border-b border-gray-300">
                    <td className="pl-[15px] w-1/2 text-left font-semibold">VIN/Chassi</td>
                    <td className="pl-[15px] w-1/2">{formData.vin}</td>
                  </tr>
                  <tr className="border-b border-gray-300">
                    <td className="pl-[15px] w-1/2 text-left font-semibold">Quilometragem</td>
                    <td className="pl-[15px] w-1/2">{formData.odometer}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Acessórios e Equipamentos */}
          <div className="border-2 border-gray-300 p-[5px] mt-4">
            <div className="bg-gray-500 text-white px-2 py-1 font-bold text-xs leading-tight">
              ACESSÓRIOS E EQUIPAMENTOS
            </div>
            <div className="px-2 mt-[1px]">
              <p className="text-sm">{formData.accessories}</p>
            </div>
          </div>

          {/* Lista de Verificação de Condição */}
          <div className="border-2 border-gray-300 p-[5px] mt-4">
            <div className="bg-gray-500 text-white px-2 py-1 font-bold text-xs leading-tight">
              LISTA DE VERIFICAÇÃO DE CONDIÇÃO
            </div>
            <div className="px-2 mt-[1px]">
              <table className="w-full text-xs">
                <tbody>
                  {Object.entries(formData.conditionChecks).map(([key, value]) => (
                    <tr key={key} className="border-b border-gray-300">
                      <td className="pl-[15px] w-1/2 text-left font-semibold">{key}</td>
                      <td className="pl-[15px] w-1/2">{formatConditionStatus(value)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Detalhes adicionais */}
          {formData.detailFields &&
            Object.entries(formData.detailFields).map(([category, details]) => (
              <div key={category} className="border-2 border-gray-300 p-[5px] mt-4">
                <div className="bg-gray-500 text-white px-2 py-1 font-bold text-xs leading-tight">
                  {category.toUpperCase()}
                </div>
                <div className="px-2 mt-[1px]">
                  <table className="w-full text-xs">
                    <tbody>
                      {Object.entries(details).map(([key, value]) => (
                        <tr key={key} className="border-b border-gray-300">
                          <td className="pl-[15px] w-1/2 text-left font-semibold">{key}</td>
                          <td className="pl-[15px] w-1/2">
                            {typeof value === "string" ? value : JSON.stringify(value)}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            ))}

          {/* Imagens */}
          {/* <div className="w-[calc(100vw-60px)] mx-auto pt-[15px]">
            <div className="grid grid-cols-3 gap-4 break-inside-avoid">
              {labels.map((label, index) => (
                <div key={index} className="flex flex-col items-center break-inside-avoid-page">
                  <span className="text-sm font-semibold mb-1">{label}</span>
                  <div className="w-full h-[200px] border flex items-center justify-center bg-gray-100">
                    {formData.images[label] ? (
                      <img
                        src={formData.images[label] || "/placeholder.svg"}
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
          </div> */}
        </div>
      </body>
    </html>
  )
}

export default DocumentTemplate

