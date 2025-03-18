/* eslint-disable */
import React from "react";
import type { VehicleInspectionData } from "@/components/vehicle-inspection-form"

  interface RenderPdfProps {
    formData: VehicleInspectionData
  }



const DocumentTemplate = ({ formData } : RenderPdfProps) => {
  const labels = [
    "Frente", "Traseira", "Placa", "KM", "Compartimento motor", "Motor",
    "Câmbio", "Etiqueta ETA Motor", "Chassi", "Foto eta coluna", "Data Cinto Segurança", "Gravação do vidro", "Torre amort diant/direita", "Torre amort diant/esquer",
    "Longarina diant/direita", "Longarina dianteira/esquerda", "Painel Dianteiro", "Caixa De Ar esq", "Assoalho Central", "Trilho Coluna Tras. Esq", "Longarina traseira/esquerda",
    "Longarina traseira/direita", "Junção Assoalho/Painel tras", "Assoalho Int. Portamalas", "Trilho Colunas Tras, Dir", "Caixa de Ar dir", "Painel Geral", "Acabamento P.E", "Multimidia/ Painel central",
    "Acabamento P.D", "Banco Traseiro", "Pneus/Rodas Diant esq.", "Pneus/Rodas Traseiro Esq.", "Pneus/Rodas Traseiro Dir", "Pneus/Rodas Diant. Direito", "Pneu Estepe", "Extra Impressa 1"
  ];
  const acessories = formData.accessories.split(",");
  return (
    <html>
      <head>
        <script src="https://cdn.tailwindcss.com"></script>
        <style>
          {`
            @media print {
              table {
                width: 100%;
                border-collapse: collapse;
              }

              thead {
                display: table-header-group;
              }

              /* Regra para garantir que a borda apareça apenas quando uma tabela for quebrada */
              tbody tr {
                page-break-inside: avoid;
                break-inside: avoid;
              }
            }
          `}
        </style>
      </head>
      <body>
        <div className="relative w-full h-[100px] bg-white flex items-center px-4">
          {/* Faixa diagonal */}
          <div className="absolute top-0 left-0 w-full h-full bg-blue-900" style={{
            clipPath: "polygon(0% 0%, 65% 0%, 50% 100%, 0% 100%)"
          }}></div>

          {/* Texto no lado esquerdo */}
          <div className="relative text-white text-xl font-semibold italic ml-6">
            VISTORIA CAUTELAR V2
          </div>

          {/* Logo no lado direito */}
          <div className="relative ml-auto mr-6">
            <img src="https://img.freepik.com/vetores-premium/design-de-logotipo-de-produtos-de-alta-qualidader_984027-135394.jpg?" alt="Super Visão" className="w-[270px] h-[100px] object-cover" />
          </div>
        </div>
        <div>
          <table className="w-[calc(100vw-60px)] mx-auto border-collapse mt-[15px]">
            {/* SITUAÇÃO GERAL */}
            <tr className="pb-[15px]">
              <td className="border-2 border-gray-300 p-[5px]">
                <div className="bg-gray-500 text-white px-2 py-1 font-bold text-sl leading-tight">
                  SITUAÇÃO GERAL
                </div>
                <div className="px-2 mt-[1px] flex items-center justify-center">
                  <p className="text-gray-700 font-bold text-3xl leading-tight text-center">
                    Aprovado
                  </p>
                </div>
              </td>
            </tr>
          </table>
          
          <table className="w-[calc(100vw-60px)] mx-auto border-collapse mt-[15px] ">
            {/* APRESENTAÇÃO */}
            <tr>
              <td className="border-2 border-gray-300 p-[5px]">
                <div className="bg-gray-500 text-white px-2 py-1 font-bold text-sl leading-tight">
                  APRESENTAÇÃO
                </div>
                <div className="px-2 mt-[1px] flex items-center justify-center gap-[100px]">
                  {/* Imagens comentadas */}
                  <img src="https://as1.ftcdn.net/v2/jpg/01/77/74/28/1000_F_177742846_umwpEr5OqwEQd4a9VyS7BGJX3tINNDe7.jpg" alt="Carro 1" className="w-[270px] h-[200px] object-cover" />
                  <img src="https://as1.ftcdn.net/v2/jpg/01/26/38/26/1000_F_126382672_lwVJuub2kfDnWYtmeJjZaM05njf77iWi.jpg" alt="Carro 2" className="w-[270px] h-[200px] object-cover" />
                </div>
              </td>
            </tr>
          </table>
        </div>
        <div className="w-[calc(100vw-60px)] mx-auto pt-[15px]">
          <div className="border-2 border-gray-300 p-[5px]">
            <div className="bg-gray-500 text-white px-2 py-1 font-bold text-xs leading-tight">
              DADOS GERAIS DO VEÍCULO
            </div>
            <div className="px-2 mt-[1px]">
              <table className="w-full text-[9px]">
                <tbody>
                  {[
                    { label: "Número do Laudo", value: `${formData.reportNumber}` },
                    { label: "Data de Vistoria", value:  `${formData.inspectionDate}`},
                    { label: "Marca", value:  `${formData.make}` },
                    { label: "Modelo", value:  `${formData.model}` },
                    { label: "Cor", value:  `${formData.color}` },
                    { label: "Ano de Fabricação", value:  `${formData.yearFab}` },
                    { label: "Ano Modelo", value:  `${formData.year}` },
                    { label: "Placa", value:  `${formData.licensePlate}` },
                    { label: "RENAVAM", value:  `${formData.vin}` },
                    { label: "KM", value:  `${formData.odometer}` },
                    { label: "Combustivel", value:  `${formData.combustivel}` },
                    { label: "Unidade", value:  `${formData.unidade}` },
                    { label: "Cliente", value:  `${formData.cliente}` }
                  ].map((item, index) => (
                    <tr key={index} className="border-b border-gray-300">
                      <td className="pl-[15px] w-1/2 text-left font-semibold">{item.label}</td>
                      <td className="pl-[15px] w-1/2">{item.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="bg-gray-500 text-white mt-4 px-2 py-1 font-bold text-xs leading-tight">
              RESUMO DE STATUS
            </div>
            <div className="px-2 mt-[1px]">
              <table className="w-full text-[9px]">
                <tbody>
                  {[
                     { label: "CHASSI 2", value: "ANALISA AS CONDIÇÕES DA GRAVAÇÃO DO CHASSI DO VEÍCULO. ITEM DE IDENTIFICAÇÃO OBRIGATÓRIO.", checkKey: "chassi" },
                     { label: "MOTOR V2", value: "ANALISA AS CONDIÇÕES DA NUMERAÇÃO IDENTIFICADORA DO MOTOR.", checkKey: "motor" },
                     { label: "CÂMBIO V2", value: "ANALISA AS CONDIÇÕES DA NUMERAÇÃO IDENTIFICADORA DO CÂMBIO, QUANDO PRESENTE E VISÍVEL.", checkKey: "cambio" },
                     { label: "ETA'S V2", value: "ANALISA AS ETIQUETAS DE IDENTIFICAÇÃO AUTODESTRUTÍVEIS, QUANDO EXISTENTES E OBRIGATÓRIAS.", checkKey: "eta" },
                     { label: "PLACAS V2", value: "VERIFICA AS CONDIÇÕES DAS PLACAS IDENTIFICADORAS DIANTEIRA E TRASEIRA.", checkKey: "placas" },
                     { label: "VIDROS V2", value: "ANALISA A GRAVAÇÃO DA PORÇÃO VIS DO CHASSI NOS VIDROS QUANDO OBRIGATÓRIOS.", checkKey: "vidros" },
                     { label: "ESTRUTURA VEICULAR V2", value: "ANALISA, NAS PARTES VISÍVEIS, AS CONDIÇÕES DOS PRINCIPAIS PONTOS ESTRUTURAIS DA CARROCERIA, TRAZENDO POSSÍVEIS INDICAÇÕES DE REPAROS.", checkKey: "exterior" },
                     { label: "HISTORICO: LEILÃO/SINISTRO", value: "O HISTÓRICO VEICULAR, QUANDO CONTRATADO, TRAZ OS DADOS DISPONÍVEIS NAQUELE MOMENTO DAS PRINCIPAIS BASES INFORMATIVAS.", checkKey: "historico" },
                     { label: "DOCUMENTAÇÃO V2", value: "VERIFICA SE O VEÍCULO POSSUI ALGUMA MODIFICAÇÃO PASSÍVEL DE ANÁLISE REGULARIZADA NO CRLV.", checkKey: "documentacao" }
                  ].map((item, index) => (
                    <tr key={index} className="border-b border-gray-300">
                      <td className="pl-[15px] w-[5%] text-left">
                        {formData.conditionChecks[item.checkKey] !== null && (
                          formData.conditionChecks[item.checkKey] == "ok" ? (
                            <span className="text-xs font-bold">✔</span>
                          ) : (
                            <span className="text-xs font-bold">✖</span>
                          )
                        )}
                      </td>
                      <td className="pl-[15px] w-[30%] text-left font-semibold">{item.label}</td>
                      <td className="pl-[15px] w-[60%]">{item.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="w-[calc(100vw-60px)] mx-auto pt-[15px]">
          <div className="border-2 border-gray-300 p-[5px]">
            <div className="bg-gray-500 text-white px-2 py-1 font-bold text-xs leading-tight">
              ACESSÓRIOS E COMPLEMENTOS
            </div>
            <div className="px-2 mt-[1px]">
              <table className="w-full text-[9px]">
                <tbody>
                  <tr>
                    <td className="text-gray-700 font-bold text-xs pl-[15px] pt-[8px] pb-[5px] leading-tight text-left">
                      • ACESSÓRIOS E EXTRAS
                    </td>
                  </tr>
                  {acessories.map((item, index) => (
                    <tr key={index} className="border-b border-gray-300">
                      <td className="pl-[15px] w-1/2 text-left">{item}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="w-[calc(100vw-60px)] mx-auto pt-[15px]">
          {/* CHASSI V2 */}
          <div className="border-2 border-gray-300 p-[5px]">
            <div className="bg-gray-500 text-white px-2 py-1 font-bold text-xs leading-tight">
              CHASSI V2
            </div>
            <div className="px-2 mt-[1px]">
              <table className="w-full text-[9px]">
                <tbody>
                  <tr>
                    <td className="text-left font-bold pl-[15px] py-1 border-b border-gray-300"colSpan={2}>
                      NO. CHASSI NA BIN
                    </td>
                  </tr>
                  <tr>
                    <td className="text-left font-bold pl-[15px] py-1 border-b border-gray-300"colSpan={2}>
                      NO. CHASSI NO VEÍCULO:
                    </td>
                  </tr>
                  <tr>
                    <td className="text-left font-bold pl-[15px] py-1 border-b border-gray-300"colSpan={2}>
                      NO. CHASSI NO VEÍCULO:
                    </td>
                  </tr>
                  <tr>
                    <td className="pl-[25px] py-1 text-left font-bold">
                      • GRAVAÇÃO DO CHASSI
                    </td>
                  </tr>
                  <tr className="border-b border-gray-300">
                    <td className="pl-[40px] ">NUMERAÇÃO IDENTIFICADORA:</td>
                    <td className="pl-[15px] ">{formData?.detailFields?.chassi[0][0]}</td>
                  </tr>
                  <tr className="border-b border-gray-300">
                    <td className="pl-[40px] ">CHAPA SUPORTE:</td>
                    <td className="pl-[15px] ">{formData?.detailFields?.chassi[0][1]}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* MOTOR V2 */}
          <div className="border-2 border-gray-300 p-[5px]  mt-[15px]">
            <div className="bg-gray-500 text-white px-2 py-1 font-bold text-xs leading-tight">
              MOTOR V2 .
            </div>
            <div className="px-2 mt-[1px]">
              <table className="w-full text-[9px]">
                <tbody>
                  <tr>
                    <td className="text-left font-bold pl-[15px] py-1 border-b border-gray-300">
                      NO. MOTOR NA BIN:
                    </td>
                  </tr>
                  <tr>
                    <td className="text-left font-bold pl-[15px] py-1 border-b border-gray-300">
                      NO. MOTOR NO VEÍCULO:
                    </td>
                  </tr>
                  <tr>
                    <td className="text-left font-bold pl-[15px] py-1 border-b border-gray-300">
                      NO. MOTOR NO DOCUMENTO:
                    </td>
                  </tr>
                  <tr>
                    <td className="pl-[25px] py-1 text-left font-bold">
                      • NUMERAÇÃO DO MOTOR
                    </td>
                  </tr>
                  <tr className="border-b border-gray-300">
                    <td className="pl-[40px] ">{formData?.detailFields?.motor[0]}</td>
                  </tr>
                  {/* <tr className="border-b border-gray-300">
                    <td className="pl-[40px]  ">É A MESMA QUE CONSTA NA BIN OU CRLV</td>
                  </tr> */}
                </tbody>
              </table>
            </div>
          </div>

          {/* CÂMBIO V2 */}
          <div className="border-2 border-gray-300 p-[5px] mt-[15px]">
            <div className="bg-gray-500 text-white px-2 py-1 font-bold text-xs leading-tight">
              CÂMBIO V2
            </div>
            <div className="px-2 mt-[1px]">
              <table className="w-full text-[9px]">
                <tbody>
                  <tr>
                    <td className="text-left font-bold pl-[15px] py-1 border-b border-gray-300">
                      NO. CÂMBIO NA BIN
                    </td>
                  </tr>
                  <tr>
                    <td className="text-left font-bold pl-[15px] py-1 border-b border-gray-300">
                      NO. CÂMBIO NO VEÍCULO:
                    </td>
                  </tr>
                  <tr>
                    <td className="pl-[25px] py-1 text-left font-bold">
                      • CÂMBIO V2
                    </td>
                  </tr>
                  <tr className="border-b border-gray-300">
                    <td className="pl-[40px] ">{formData?.detailFields?.cambio[0]}</td>
                  </tr>
                  {/* <tr className="border-b border-gray-300">
                    <td className="pl-[40px] ">NÃO POSSUI CADASTRO NA BIN</td>
                  </tr> */}
                </tbody>
              </table>
            </div>
          </div>

          {/* ETA´S V2 */}
          <div className="border-2 border-gray-300 p-[5px] mt-[15px]">
            <div className="bg-gray-500 text-white px-2 py-1 font-bold text-xs leading-tight">
              ETA´S V2
            </div>
            <div className="px-2 mt-[1px]">
              <table className="w-full text-[9px]">
                <tbody>
                  <tr>
                    <td className="pl-[25px] py-1 text-left font-bold">
                      • ETIQUETAS DE IDENTIFICAÇÃO
                    </td>
                  </tr>
                  <tr className="border-b border-gray-300">
                    <td className="pl-[40px] ">ETA MOTOR:</td>
                    <td className="pl-[15px] ">{formData?.detailFields?.eta[0][0]}</td>
                  </tr>
                  <tr className="border-b border-gray-300">
                    <td className="pl-[40px] ">ETA BATENTE DA PORTA:</td>
                    <td className="pl-[15px] ">{formData?.detailFields?.eta[0][1]}</td>
                  </tr>
                  <tr className="border-b border-gray-300">
                    <td className="pl-[40px] ">ETA ASSOALHO:</td>
                    <td className="pl-[15px] ">{formData?.detailFields?.eta[0][2]}</td>
                  </tr>
                  <tr className="border-b border-gray-300">
                    <td className="pl-[40px] ">PLAQUETA ANO FABRICAÇÃO:</td>
                    <td className="pl-[15px] ">{formData?.detailFields?.eta[0][3]}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* PLACAS V2 */}
          <div className="border-2 border-gray-300 p-[5px] mt-[15px]">
            <div className="bg-gray-500 text-white px-2 py-1 font-bold text-xs leading-tight">
              PLACAS V2
            </div>
            <div className="px-2 mt-[1px]">
              <table className="w-full text-[9px]">
                <tbody>
                  <tr>
                    <td className="pl-[25px] py-1 text-left font-bold">
                      • PLACA DIANTEIRA
                    </td>
                  </tr>
                  <tr className="border-b border-gray-300">
                    <td className="pl-[40px]  ">{formData?.detailFields?.placas[0]}</td>
                  </tr>
                  <tr >
                    <td className="pl-[25px] py-1 text-left font-bold">
                      • PLACA TRASEIRA
                    </td>
                  </tr>
                  <tr className="border-b border-gray-300">
                    <td className="pl-[40px] ">{formData?.detailFields?.placas[1]}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>


        <div className="w-[calc(100vw-60px)] mx-auto pt-[15px]">
          <div className="border-2 border-gray-300 p-[5px] ">
            <div className="bg-gray-500 text-white px-2 py-1 font-bold text-xs leading-tight mb-[5px]">
              VIDROS V2
            </div>
            <table className="w-full mt-[1px] text-[9px]">
              <tbody>
                <tr className="border-b border-gray-300">
                  <td className="pl-[40px] ">PARABRISA :</td>
                  <td className="pl-[15px] ">{formData?.detailFields?.vidros[0][0]}</td>
                </tr>
                <tr className="border-b border-gray-300">
                  <td className="pl-[40px]">PORTA DIANTE. ESQ. :</td>
                  <td className="pl-[15px]">{formData?.detailFields?.vidros[0][1]}</td>
                </tr>
                <tr className="border-b border-gray-300">
                  <td className="pl-[40px]">PORTA TRAS. ESQ / LAT TRAS. ESQ. :</td>
                  <td className="pl-[15px]">{formData?.detailFields?.vidros[0][2]}</td>
                </tr>
                <tr className="border-b border-gray-300">
                  <td className="pl-[40px]">VIGIA TRASEIRO. :</td>
                  <td className="pl-[15px]">{formData?.detailFields?.vidros[0][3]}</td>
                </tr>
                <tr className="border-b border-gray-300">
                  <td className="pl-[40px]">PORTA TRAS. DIR / LAT TRAS. DIR. : PORTA DIANTE. DIR. :</td>
                  <td className="pl-[15px]">{formData?.detailFields?.vidros[0][4]}</td>
                </tr>
                <tr className="border-b border-gray-300">
                  <td className="pl-[40px]">PORTA DIANTE. DIR. :</td>
                  <td className="pl-[15px]">{formData?.detailFields?.vidros[0][5]}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="w-[calc(100vw-60px)] mx-auto pt-[15px]">
          <div className="border-2 border-gray-300 p-[5px] ">
            <div className="bg-gray-500 text-white px-2 py-1 font-bold text-xs leading-tight">
              ESTRUTURA VEICULAR V2
            </div>
            <div className="px-2 mt-[1px]">
              <p className="text-gray-700 font-bold text-xs pl-[15px] pt-[8px] pb-[5px] leading-tight text-left">
                • ESTRUTURA VEICULAR - DIANTEIRA
              </p>
              <table className="w-full text-[9px]">
                <tbody>
                  <tr className="border-b border-gray-300">
                    <td className="pl-[40px] w-[50%]">LONGARINA DIANTEI. ESQ. :</td>
                    <td className="pl-[15px] w-[50%]">{formData?.detailFields?.estrutura[0][0]}</td>
                  </tr>
                  <tr className="border-b border-gray-300">
                    <td className="pl-[40px] w-[50%]">LONGARINA DIANTEI. DIR :</td>
                    <td className="pl-[15px] w-[50%]">{formData?.detailFields?.estrutura[0][1]}</td>
                  </tr>
                  <tr className="border-b border-gray-300">
                    <td className="pl-[40px] w-[50%]">TORRE DO AMORTECEDOR DIANTEI. ESQ. :</td>
                    <td className="pl-[15px] w-[50%]">{formData?.detailFields?.estrutura[0][2]}</td>
                  </tr>
                  <tr className="border-b border-gray-300">
                    <td className="pl-[40px] w-[50%]">TORRE DO AMORTECEDOR DIANTEI. DIR. :</td>
                    <td className="pl-[15px] w-[50%]">{formData?.detailFields?.estrutura[0][3]}</td>
                  </tr>
                  <tr className="border-b border-gray-300">
                    <td className="pl-[40px] w-[50%]">PAINEL CORTA FOGO . :</td>
                    <td className="pl-[15px] w-[50%]">{formData?.detailFields?.estrutura[0][4]}</td>
                  </tr>
                  <tr className="border-b border-gray-300">
                    <td className="pl-[40px] w-[50%]">PAINEL DIANT. INF./SUP. OU ALMA DO PARACHOQUE:</td>
                    <td className="pl-[15px] w-[50%]">{formData?.detailFields?.estrutura[0][5]}</td>
                  </tr>
                  <tr className="border-b border-gray-300">
                    <td className="pl-[40px] w-[50%]">CRASHBOX (PARAFUSADO) . :</td>
                    <td className="pl-[15px] w-[50%]">{formData?.detailFields?.estrutura[0][6]}</td>
                  </tr>
                  <tr className="border-b border-gray-300">
                    <td className="pl-[40px] w-[50%]">CRASHBOX/QUADRO DO RADIADOR (SOLDADO) . :</td>
                    <td className="pl-[15px] w-[50%]">{formData?.detailFields?.estrutura[0][7]}</td>
                  </tr>
                  <tr className="border-b border-gray-300">
                    <td className="pl-[40px] w-[50%]">PARALAMA INT. DIANTEI. DIR. :</td>
                    <td className="pl-[15px] w-[50%]">{formData?.detailFields?.estrutura[0][8]}</td>
                  </tr>
                  <tr className="border-b border-gray-300">
                    <td className="pl-[40px] w-[50%]">PARALAMA INT. DIANTEI. ESQ. :</td>
                    <td className="pl-[15px] w-[50%]">{formData?.detailFields?.estrutura[0][9]}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="px-2 mt-[1px]">
              <p className="text-gray-700 font-bold text-xs pl-[15px] pt-[8px] pb-[5px] leading-tight text-left">
                • ESTRUTURA VEICULAR - TRASEIRA
              </p>
              <table className="w-full text-[9px]">
                <tbody>
                  <tr className="border-b border-gray-300">
                    <td className="pl-[40px] w-[50%]">LONGARINA TRASEI. ESQ. :</td>
                    <td className="pl-[15px] w-[50%]">{formData?.detailFields?.estrutura[1][0]}</td>
                  </tr>
                  <tr className="border-b border-gray-300">
                    <td className="pl-[40px] w-[50%]">LONGARINA TRASEI. DIR. :</td>
                    <td className="pl-[15px] w-[50%]">{formData?.detailFields?.estrutura[1][1]}</td>
                  </tr>
                  <tr className="border-b border-gray-300">
                    <td className="pl-[40px] w-[50%]">CAIXA DE RODA TRASEI. ESQ. :</td>
                    <td className="pl-[15px] w-[50%]">{formData?.detailFields?.estrutura[1][2]}</td>
                  </tr>
                  <tr className="border-b border-gray-300">
                    <td className="pl-[40px] w-[50%]">CAIXA DE RODA TRASEI. DIR. :</td>
                    <td className="pl-[15px] w-[50%]">{formData?.detailFields?.estrutura[1][3]}</td>
                  </tr>
                  <tr className="border-b border-gray-300">
                    <td className="pl-[40px] w-[50%]">PORTA TRAS. DIR / LAT TRAS. DIR. :</td>
                    <td className="pl-[15px] w-[50%]">{formData?.detailFields?.estrutura[1][4]}</td>
                  </tr>
                  <tr className="border-b border-gray-300">
                    <td className="pl-[40px] w-[50%]">PAINEL TRASEIRO . :</td>
                    <td className="pl-[15px] w-[50%]">{formData?.detailFields?.estrutura[1][5]}</td>
                  </tr>
                  <tr className="border-b border-gray-300">
                    <td className="pl-[40px] w-[50%]">CONDIÇÕES DA CAÇAMBA (COMPART. DE CARGA) . :</td>
                    <td className="pl-[15px] w-[50%]">{formData?.detailFields?.estrutura[1][6]}</td>
                  </tr>
                  <tr className="border-b border-gray-300">
                    <td className="pl-[40px] w-[50%]">PAINEL TRAS. DA CABINE (SEPARAÇÃO CAÇAMBA):</td>
                    <td className="pl-[15px] w-[50%]">{formData?.detailFields?.estrutura[1][7]}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="px-2 mt-[1px]">
              <p className="text-gray-700 font-bold text-xs pl-[15px] pt-[8px] pb-[5px] leading-tight text-left">
                • ESTRUTURA VEICULAR - LATERAIS
              </p>
              <table className="w-full text-[9px]">
                <tbody>
                  <tr className="border-b border-gray-300">
                    <td className="pl-[40px] w-[50%]">FOLHA LAT. TRASEI. DIR. :</td>
                    <td className="pl-[15px] w-[50%]">{formData?.detailFields?.estrutura[2][0]}</td>
                  </tr>
                  <tr className="border-b border-gray-300">
                    <td className="pl-[40px] w-[50%]">FOLHA LAT. TRASEI. ESQ. :</td>
                    <td className="pl-[15px] w-[50%]">{formData?.detailFields?.estrutura[2][1]}</td>
                  </tr>
                  <tr className="border-b border-gray-300">
                    <td className="pl-[40px] w-[50%]">CAIXA DE AR DIREITA . :</td>
                    <td className="pl-[15px] w-[50%]">{formData?.detailFields?.estrutura[2][2]}</td>
                  </tr>
                  <tr className="border-b border-gray-300">
                    <td className="pl-[40px] w-[50%]">CAIXA DE AR ESQUERDA . :</td>
                    <td className="pl-[15px] w-[50%]">{formData?.detailFields?.estrutura[2][3]}</td>
                  </tr>
                  <tr className="border-b border-gray-300">
                    <td className="pl-[40px] w-[50%]">COLUNA ESQ. (A) . :</td>
                    <td className="pl-[15px] w-[50%]">{formData?.detailFields?.estrutura[2][4]}</td>
                  </tr>
                  <tr className="border-b border-gray-300">
                    <td className="pl-[40px] w-[50%]">COLUNA ESQ. (B) . :</td>
                    <td className="pl-[15px] w-[50%]">{formData?.detailFields?.estrutura[2][5]}</td>
                  </tr>
                  <tr className="border-b border-gray-300">
                    <td className="pl-[40px] w-[50%]">COLUNA ESQ. (C) . :</td>
                    <td className="pl-[15px] w-[50%]">{formData?.detailFields?.estrutura[2][6]}</td>
                  </tr>
                  <tr className="border-b border-gray-300">
                    <td className="pl-[40px] w-[50%]">COLUNA DIR. (A) . :</td>
                    <td className="pl-[15px] w-[50%]">{formData?.detailFields?.estrutura[2][7]}</td>
                  </tr>
                  <tr className="border-b border-gray-300">
                    <td className="pl-[40px] w-[50%]">COLUNA DIR. (B) . :</td>
                    <td className="pl-[15px] w-[50%]">{formData?.detailFields?.estrutura[2][8]}</td>
                  </tr>
                  <tr className="border-b border-gray-300">
                    <td className="pl-[40px] w-[50%]">COLUNA DIR. (C) . :</td>
                    <td className="pl-[15px] w-[50%]">{formData?.detailFields?.estrutura[2][9]}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="px-2 mt-[1px]">
              <p className="text-gray-700 font-bold text-xs pl-[15px] pt-[8px] pb-[5px] leading-tight text-left">
                • ESTRUTURA VEICULAR - OUTROS
              </p>
              <table className="w-full text-[9px]">
                <tbody>
                  <tr className="border-b border-gray-300">
                    <td className="pl-[40px] w-[50%]">ASSOALHO DO MONOBLOCO (HABITÁCULO, ÁREA VISÍVEL) . :</td>
                    <td className="pl-[15px] w-[50%]">{formData?.detailFields?.estrutura[3][0]}</td>
                  </tr>
                  <tr className="border-b border-gray-300">
                    <td className="pl-[40px] w-[50%]">ASSOALHO DO PORTAMALAS / CAÇAMBA . :</td>
                    <td className="pl-[15px] w-[50%]">{formData?.detailFields?.estrutura[3][1]}</td>
                  </tr>
                  <tr className="border-b border-gray-300">
                    <td className="pl-[40px] w-[50%]">CAIXA DE ESTEPE(DIVISÃO ASSOALHO DO PORTAMALAS):</td>
                    <td className="pl-[15px] w-[50%]">{formData?.detailFields?.estrutura[3][2]}</td>
                  </tr>
                  <tr className="border-b border-gray-300">
                    <td className="pl-[40px] w-[50%]">ALONGAMENTO DE CHASSI (PESADOS) . :</td>
                    <td className="pl-[15px] w-[50%]">{formData?.detailFields?.estrutura[3][3]}</td>
                  </tr>
                  <tr className="border-b border-gray-300">
                    <td className="pl-[40px] w-[50%]">ESTRUTURA DO TETO . :</td>
                    <td className="pl-[15px] w-[50%]">{formData?.detailFields?.estrutura[3][4]}</td>
                  </tr>
                  <tr className="border-b border-gray-300">
                    <td className="pl-[40px] w-[50%]">FOLHA DO TETO . :</td>
                    <td className="pl-[15px] w-[50%]">{formData?.detailFields?.estrutura[3][5]}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="w-[calc(100vw-60px)] mx-auto pt-[15px]">
          {/* HISTÓRICO */}
          <div className="border-2 border-gray-300 p-[5px] mb-[10px]">
            <div className="bg-gray-500 text-white px-2 py-1 font-bold text-xs leading-tight">
              HISTÓRICO: LEILÃO/SINISTRO/R/F
            </div>
            <table className="w-full mt-[1px] text-[9px]">
              <tbody>
                <tr>
                  <td className="text-gray-700 font-bold pl-[15px] pt-[8px] pb-[5px] text-left" >
                    • HISTÓRICO VEICULAR
                  </td>
                </tr>
                <tr>
                  <td className="text-left font-normal pl-[40px] w-1/2  border-b border-gray-300">
                    NENHUM REGISTRO ENCONTRADO
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* DOCUMENTAÇÃO V2 */}
          <div className="border-2 border-gray-300 p-[5px] mb-[10px]">
            <div className="bg-gray-500 text-white px-2 py-1 font-bold text-xs leading-tight">
              DOCUMENTAÇÃO V2
            </div>
            <table className="w-full mt-[1px] text-[9px]">
              <tbody>
                <tr>
                  <td className="text-gray-700 font-bold  pl-[15px] pt-[8px] pb-[5px] text-left" >
                    • CRLV/PESQUISA NOVO
                  </td>
                </tr>
                <tr>
                  <td className="text-left  font-normal pl-[40px] w-1/2  border-b border-gray-300">
                    NENHUM REGISTRO ENCONTRADO
                  </td>
                </tr>
                <tr>
                  <td className="text-gray-700 font-bold  pl-[15px] pt-[8px] pb-[5px] text-left" >
                    • VEÍCULO NOVO
                  </td>
                </tr>
                <tr>
                  <td className="text-left font-normal pl-[40px] w-1/2 border-b border-gray-300">
                    NENHUM REGISTRO ENCONTRADO
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* OBSERVAÇÃO */}
          <div className="border-2 border-gray-300 p-[5px] mb-[10px]">
            <div className="bg-gray-500 text-white px-2 py-1 font-bold text-xs leading-tight">
              OBSERVAÇÃO
            </div>
            <table className="w-full mt-[1px] text-[9px]">
              <tbody>
                <tr>
                  <td className="text-gray-700 font-bold pl-[15px] pt-[8px] pb-[5px] text-left" >
                    NADA CONSTA
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* OBSERVAÇÕES GERAIS */}
          <div className="border-2 border-gray-300 p-[5px]">
            <div className="bg-gray-500 text-white px-2 py-1 font-bold text-xs leading-tight">
              OBSERVAÇÕES GERAIS
            </div>
            <table className="w-full mt-[1px] text-[9px]">
              <tbody>
                <tr>
                  <td className="text-gray-700 font-bold  pl-[15px] pt-[8px] pb-[5px]">
                    - A PRESENTE VISTORIA POSSUI CARÁTER INFORMATIVO DE ANÁLISE PARTICULAR DO VEÍCULO VISTORIADO, NÃO SUBSTITUINDO A
                    PERÍCIA OFICIAL DO INSTITUTO DE CRIMINALÍSTICA OU QUALQUER LAUDO OFICIAL DE ÓRGÃOS COMPETENTES. OS ÓRGÃOS OFICIAIS
                    POSSUEM FERRAMENTAS PRÓPRIAS DE ANÁLISE, NÃO DISPONÍVEIS PARA EMPRESAS DE VISTORIA;
                  </td>
                </tr>
                <tr>
                  <td className="text-gray-700 font-bold  pl-[15px] pt-[8px] pb-[5px]">
                    - A UNIDADE SUPER VISÃO PRESTADORA DE SERVIÇO ABAIXO DESCRITA NÃO SE RESPONSABILIZA POR QUAISQUER MODIFICAÇÕES
                    POSTERIORES À REALIZAÇÃO DA VISTORIA. ESTE DOCUMENTO POSSUI SUA VALIDADE NO EXATO MOMENTO DA VISTORIA;
                  </td>
                </tr>
                <tr>
                  <td className="text-gray-700 font-bold  pl-[15px] pt-[8px] pb-[5px]">
                    - OS ITENS ANALISADOS RESPEITAM O ESCOPO DO RESPECTIVO SERVIÇO CONTRATADO, QUE SÃO APENAS OS ITENS INDICADOS NO
                    PRESENTE DOCUMENTO, DENTRO DOS CRITÉRIOS ESTABELECIDOS EM CADA UM DELES, NÃO ABRANGENDO NENHUM ITEM QUE NÃO ESTEJA
                    PRESENTE NESTA VISTORIA;
                  </td>
                </tr>
                <tr>
                  <td className="text-gray-700 font-bold  pl-[15px] pt-[8px] pb-[5px]">
                    - O STATUS/RESULTADO FINAL SEGUE O CRITÉRIO DE AVALIAÇÃO DESENVOLVIDO PELA SUPER VISÃO PERÍCIAS E VISTORIAS LTDA,
                    PODENDO ESTE SER ALTERADO SEM PRÉVIA COMUNICAÇÃO (ÚLTIMA ATUALIZAÇÃO 18/11/2023);
                  </td>
                </tr>
                <tr>
                  <td className="text-gray-700 font-bold  pl-[15px] pt-[8px] pb-[5px]">
                    - OS ITENS ESTRUTURAIS ANALISADOS CONTEMPLAM AS REGIÕES VISÍVEIS, PASSÍVEIS DE SEREM ANALISADAS SEM DESMONTAGEM DE
                    PEÇAS;
                  </td>
                </tr>
                <tr>
                  <td className="text-gray-700 font-bold  pl-[15px] pt-[8px] pb-[5px]">
                    - A SUPER VISÃO DISPONIBILIZA NA ÍNTEGRA OS DADOS FORNECIDOS PELAS EMPRESAS DE PESQUISA, NÃO SE RESPONSABILIZANDO POR
                    INFORMAÇÕES VINDAS DESTES FORNECEDORES POR SE TRATAREM DE BASES DE TERCEIROS;
                  </td>
                </tr>
                <tr>
                  <td className="text-gray-700 font-bold  pl-[15px] pt-[8px] pb-[5px]">
                    - CRITÉRIO DE AVALIAÇÃO DAS SEGURADORAS: AS COMPANHIAS DE SEGURO POSSUEM SEUS PRÓPRIOS MÉTODOS E CRITÉRIOS DE
                    AVALIAÇÃO DE RISCO PARA ACEITAÇÃO OU NÃO DA COBERTURA SECURITÁRIA, POR ESSE MOTIVO INFORMAMOS QUE O RESULTADO
                    DESTA VISTORIA, INDEPENDE DA ACEITAÇÃO OU NÃO DA SEGURADORA;
                  </td>
                </tr>
                <tr>
                  <td className="text-gray-700 font-bold  pl-[15px] pt-[8px] pb-[5px]">
                    - A SUPER VISÃO NÃO VALIDA A EXISTÊNCIA OU O FUNCIONAMENTO DAS BOLSAS DE AIRBAG NO VEÍCULO;
                  </td>
                </tr>
                <tr>
                  <td className="text-gray-700 font-bold  pl-[15px] pt-[8px] pb-[5px]">
                    - MULTAS, DÉBITOS, RESTRIÇÕES FINANCEIRAS COMO GRAVAME OU OUTROS, NÃO FAZEM PARTE DO ESCOPO DA VISTORIA. PARA
                    LEVANTAMENTO DE DÉBITOS DO VEÍCULO, PROCURAR UM PROFISSIONAL ESPECIALIZADO;
                  </td>
                </tr>
                <tr>
                  <td className="text-gray-700 font-bold  pl-[15px] pt-[8px] pb-[5px]">
                    - NÃO VERIFICAMOS A PROCEDÊNCIA DA INFORMAÇÃO DE HODÔMETRO EM NOSSAS VISTORIAS DEVIDO A INEXISTÊNCIA DE FERRAMENTAS
                    QUE PERMITAM 100% DE ASSERTIVIDADE.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        {/* <div className="w-[calc(100vw-60px)] mx-auto pt-[15px]">
          <div className="grid grid-cols-3 gap-4 break-inside-avoid">
            {labels.map((label, index) => (
              <div key={index} className="flex flex-col items-center break-inside-avoid-page">
                <span className="text-sm font-semibold mb-1">{label}</span>
                <div className="w-full h-[200px] border flex items-center justify-center bg-gray-100">
                  {images && images[index] ? (
                    <img src={images[index]} alt={label} className="w-full h-full object-cover" />
                  ) : (
                    <span className="text-gray-400">Imagem aqui</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div> */}
      </body>
    </html>
  );
};

export default DocumentTemplate;
