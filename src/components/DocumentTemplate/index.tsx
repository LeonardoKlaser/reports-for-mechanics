import React from "react";

interface DocumentTemplateProps {
  documentData: {
    title: string;
    content: string;
  };
  userData: {
    name: string;
    email: string;
  };
}

const DocumentTemplate = ({ documentData, userData } : DocumentTemplateProps) => {
  return (
    <html>
      <head>
         <script src="https://cdn.tailwindcss.com"></script>
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
        <div className="w-[calc(100vw-60px)] mx-auto pt-[15px]">
          <div className="border-2 border-gray-300 p-[5px]">
            <div className="bg-gray-500 text-white px-2 py-1 font-bold text-sl leading-tight">SITUAÇÃO GERAL</div>
            <div className="px-2 mt-[1px] flex items-center justify-center">
              <p className="text-gray-700 font-bold text-3xl leading-tight text-center">Aprovado</p>
            </div>
          </div>
        </div>
        <div className="w-[calc(100vw-60px)] mx-auto pt-[15px]">
          <div className="border-2 border-gray-300 p-[5px]">
            <div className="bg-gray-500 text-white px-2 py-1 font-bold text-sl leading-tight">APRESENTAÇÃO</div>
            <div className="px-2 mt-[1px] flex items-center justify-center gap-[100px]">
              <img src="https://as1.ftcdn.net/v2/jpg/01/77/74/28/1000_F_177742846_umwpEr5OqwEQd4a9VyS7BGJX3tINNDe7.jpg" alt="Carro 1" className="w-[270px] h-[200px] object-cover" /> 
              <img src="https://as1.ftcdn.net/v2/jpg/01/26/38/26/1000_F_126382672_lwVJuub2kfDnWYtmeJjZaM05njf77iWi.jpg" alt="Carro 2" className="w-[270px] h-[200px] object-cover" />
            </div>
          </div>
        </div>
        <div className="w-[calc(100vw-60px)] mx-auto pt-[15px]">
          <div className="border-2 border-gray-300 p-[5px]">
            <div className="bg-gray-500 text-white px-2 py-1 font-bold text-xs leading-tight">
              DADOS GERAIS DO VEÍCULO
            </div>
            <div className="px-2 mt-[1px] flex flex-col">
              {[
                { label: "Número do Laudo", value: "123456" },
                { label: "Data de Vistoria", value: "Aprovada" },
                { label: "Marca", value: "25/02/2025" },
                { label: "Modelo", value: "Honda Civic" },
                { label: "Cor", value: "Honda" },
                { label: "Ano de Fabricação", value: "Michelin 205/55R16" },
                { label: "Ano Modelo", value: "123456" },
                { label: "Placa", value: "Aprovada" },
                { label: "RENAVAM", value: "25/02/2025" },
                { label: "KM", value: "Honda Civic" },
                { label: "Combustivel", value: "Honda" },
                { label: "Unidade", value: "Michelin 205/55R16" },
                { label: "Cliente", value: "Michelin 205/55R16" },
              ].map((item, index) => (
                <div key={index} className="flex items-center py-1 border-b border-gray-300 px-4">
                  <span className="text-left text-xs font-semibold pl-[15px] w-1/2">
                    {item.label}
                  </span>
                  <span className="text-xs w-1/2 pl-[15px]">{item.value}</span>
                </div>
              ))}
            </div>
            <div className="bg-gray-500 text-white mt-4 px-2 py-1 font-bold text-xs leading-tight">
              RESUMO DE STATUS
            </div>
            <div className="px-2 mt-[1px] flex flex-col">
              {[
                { label: "CHASSI 2", value: "123456", Check: true },
                { label: "MOTOR V2", value: "Aprovada", Check: true },
                { label: "CÂMBIO V2", value: "25/02/2025", Check: true },
                { label: "ETA´S V2", value: "Honda Civic", Check: true },
                { label: "PLACAS V2", value: "Honda", Check: true },
                { label: "VIDROS V2", value: "Michelin 205/55R16", Check: true },
                { label: "ESTRUTURA VEICULAR V2", value: "Honda Civic", Check: true },
                { label: "HISTORICO:LEILÃO/SINISTRO/", value: "Honda", Check: true },
                { label: "DOCUMENTAÇÃO V2", value: "Michelin 205/55R16", Check: true },
              ].map((item, index) => (
                <div key={index} className="flex items-center py-1 border-b border-gray-300 px-4">
                   {item.Check !== null && (
                    item.Check ?(
                      <span className="text-xs w-[10px] font-bold pl-[15px]"> ✔</span>
                    ): (
                      <span className="text-xs w-[10px] font-bold pl-[15px]"> ✖</span>
                    )
                   )}
                  <span className="text-left text-xs font-semibold pl-[15px] w-1/2">
                    {item.label}
                  </span>
                  <span className="text-xs w-1/2 pl-[15px]">{item.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="w-[calc(100vw-60px)] mx-auto pt-[15px]">
          <div className="border-2 border-gray-300 p-[5px]">
            <div className="bg-gray-500 text-white px-2 py-1 font-bold text-xs leading-tight">
              ACESSÓRIOS E COMPLEMENTOS
            </div>
            <div className="px-2 mt-[1px] flex flex-col">
            <div className="px-2 mt-[1px] flex justify-left ">
              <p className="text-gray-700 font-bold text-xs pl-[15px] pt-[8px] pb-[5px] leading-tight text-center"> • ACESSÓRIOS E EXTRAS</p>
            </div>
              {[
                 { label: "Direção Hidráulica/Elétrica"},
                 { label: "Retrovisores Elétricos"},
                 { label: "Alarme", },
                 { label: "Ar Quente", },
                 { label: "Banco Elétr. Motorista" },
                 { label: "Estepe", },
                 { label: "Macaco" },
                 { label: "Rádio" },
                 { label: "Teto Solar" },
                 { label: "Vidros Elétricos" },
                 { label: "Limp./Lav. Vidro Tras." },
                 { label: "Antena Elétrica" },
                 { label: "Banco Bi-Partido" },
                 { label: "Banco Elétr. Passageiro" },
                 { label: "Chave de Roda" },
                 { label: "Rodas de Liga Leve" },
                 { label: "Ar Condicionado" },
                 { label: "Travas Elétricas" },
                 { label: "Térmico Traseiro" },
                 { label: "Banco de Couro" },
                 { label: "Comp. de Bordo" },
                 { label: "Farol de Milha" },
                 { label: "Tapetes" },
                 { label: "Triângulo" },
              ].map((item, index) => (
                <div key={index} className="flex items-center py-1 border-b border-gray-300 px-4">
                  <span className="text-left text-xs font-normal pl-[15px] w-1/2">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="w-[calc(100vw-60px)] mx-auto pt-[15px]">
          <div className="border-2 border-gray-300 p-[5px]">
            <div className="bg-gray-500 text-white px-2 py-1 font-bold text-xs leading-tight">
              CHASSI V2
            </div>
            <div className="px-2 mt-[1px] flex flex-col">
                <div className="flex items-center py-1 border-b border-gray-300 px-4">
                  <span className="text-left text-xs font-bold pl-[15px] w-1/2">
                    NO. CHASSI NA BIN
                  </span>
                </div>
                <div className="flex items-center py-1 border-b border-gray-300 px-4">
                  <span className="text-left text-xs font-bold pl-[15px] w-1/2">
                    NO. CHASSI NO VEÍCULO:
                  </span>
                </div>
                <div className="flex items-center py-1 border-b border-gray-300 px-4">
                  <span className="text-left text-xs font-bold pl-[15px] w-1/2">
                    NO. CHASSI NO VEÍCULO:
                  </span>
                </div>
                <div className="px-2 mt-[1px] flex justify-left pt-[8px] pl-[25px]">
                  <p className="text-gray-700 font-bold text-xs pl-[15px] pt-[8px] pb-[5px] leading-tight text-center"> • GRAVAÇÃO DO CHASSI</p>
                </div>
                <div className="flex items-center py-1 border-b border-gray-300 px-4">
                  <span className="text-left text-xs font-normal pl-[40px] w-1/2">
                    DENTRO DOS PADRÕES HABITUAIS DO FABRICANTE
                  </span>
                </div>
                <div className="flex items-center py-1 border-b border-gray-300 px-4">
                  <span className="text-left text-xs font-normal pl-[40px] w-1/2">
                    NÃO POSSUI CADASTRO NA BIN
                  </span>
                </div>
            </div>
          </div>
        </div>
        <div className="w-[calc(100vw-60px)] mx-auto pt-[15px]">
          <div className="border-2 border-gray-300 p-[5px] page-break-after:border-b-2 border-black">
            <div className="bg-gray-500 text-white px-2 py-1 font-bold text-xs leading-tight">
              MOTOR V2 .
            </div>
            <div className="px-2 mt-[1px] flex flex-col">
                <div className="flex items-center py-1 border-b border-gray-300 px-4">
                  <span className="text-left text-xs font-bold pl-[15px] w-1/2">
                    NO. MOTOR NA BIN:
                  </span>
                </div>
                <div className="flex items-center py-1 border-b border-gray-300 px-4">
                  <span className="text-left text-xs font-bold pl-[15px] w-1/2">
                    NO. MOTOR NO VEÍCULO:
                  </span>
                </div>
                <div className="flex items-center py-1 border-b border-gray-300 px-4">
                  <span className="text-left text-xs font-bold pl-[15px] w-1/2">
                    NO. MOTOR NO DOCUMENTO:
                  </span>
                </div>
                <div className="px-2 mt-[1px] flex justify-left pt-[8px] pl-[25px]">
                  <p className="text-gray-700 font-bold text-xs pl-[15px] pt-[8px] pb-[5px] leading-tight text-center"> • NUMERAÇÃO DO MOTOR</p>
                </div>
                <div className="flex items-center py-1 border-b border-gray-300 px-4">
                  <span className="text-left text-xs font-normal pl-[40px] w-1/2">
                    DENTRO DOS PADRÕES HABITUAIS DO FABRICANTE
                  </span>
                </div>
                <div className="flex items-center py-1 border-b border-gray-300 px-4">
                  <span className="text-left text-xs font-normal pl-[40px] w-1/2">
                    É A MESMA QUE CONSTA NA BIN OU CRLV
                  </span>
                </div>
            </div>
          </div>
        </div>
        <div className="w-[calc(100vw-60px)] mx-auto pt-[15px]">
          <div className="border-2 border-gray-300 p-[5px]">
            <div className="bg-gray-500 text-white px-2 py-1 font-bold text-xs leading-tight">
              CÂMBIO V2
            </div>
            <div className="px-2 mt-[1px] flex flex-col">
                <div className="flex items-center py-1 border-b border-gray-300 px-4">
                  <span className="text-left text-xs font-bold pl-[15px] w-1/2">
                    NO. CÂMBIO NA BIN
                  </span>
                </div>
                <div className="flex items-center py-1 border-b border-gray-300 px-4">
                  <span className="text-left text-xs font-bold pl-[15px] w-1/2">
                    NO. CÂMBIO NO VEÍCULO:
                  </span>
                </div>
                <div className="px-2 mt-[1px] flex justify-left pt-[8px] pl-[25px]">
                  <p className="text-gray-700 font-bold text-xs pl-[15px] pt-[8px] pb-[5px] leading-tight text-center"> • CÂMBIO V2</p>
                </div>
                <div className="flex items-center py-1 border-b border-gray-300 px-4">
                  <span className="text-left text-xs font-normal pl-[40px] w-1/2">
                    DENTRO DOS PADRÕES HABITUAIS DO FABRICANTE
                  </span>
                </div>
                <div className="flex items-center py-1 border-b border-gray-300 px-4">
                  <span className="text-left text-xs font-normal pl-[40px] w-1/2">
                    NÃO POSSUI CADASTRO NA BIN
                  </span>
                </div>
            </div>
          </div>
        </div>
        <div className="w-[calc(100vw-60px)] mx-auto pt-[15px]">
          <div className="border-2 border-gray-300 p-[5px]">
            <div className="bg-gray-500 text-white px-2 py-1 font-bold text-xs leading-tight">
              ETA´S V2
            </div>
            <div className="px-2 mt-[1px] flex flex-col">
                <div className="px-2 mt-[1px] flex justify-left pt-[8px] pl-[25px]">
                  <p className="text-gray-700 font-bold text-xs pl-[15px] pt-[8px] pb-[5px] leading-tight text-center"> • ETIQUETAS DE IDENTIFICAÇÃO</p>
                </div>
                <div className="flex items-center py-1 border-b border-gray-300 px-4">
                  <span className="text-left text-xs font-normal pl-[40px] w-1/2">
                    ETA MOTOR:
                  </span>
                  <span className="text-xs w-1/2 pl-[15px]">ETA DENTRO DOS PADRÕES/NUMERAÇÃO COINCIDE COM O CHASSI</span>
                </div>
                <div className="flex items-center py-1 border-b border-gray-300 px-4">
                  <span className="text-left text-xs font-normal pl-[40px] w-1/2">
                    ETA BATENTE DA PORTA:
                  </span>
                  <span className="text-xs w-1/2 pl-[15px]">ETA DENTRO DOS PADRÕES/NUMERAÇÃO COINCIDE COM O CHASSI</span>
                </div>
                <div className="flex items-center py-1 border-b border-gray-300 px-4">
                  <span className="text-left text-xs font-normal pl-[40px] w-1/2">
                    ETA ASSOALHO:
                  </span>
                  <span className="text-xs w-1/2 pl-[15px]">NÃO OBRIGATÓRIO</span>
                </div>
                <div className="flex items-center py-1 border-b border-gray-300 px-4">
                  <span className="text-left text-xs font-normal pl-[40px] w-1/2">
                    PLAQUETA ANO FABRICAÇÃO :
                  </span>
                  <span className="text-xs w-1/2 pl-[15px]">PLAQUETA OK (NACIONAIS E IMPORT. APÓS 1999)</span>
                </div>
            </div>
          </div>
        </div>
        <div className="w-[calc(100vw-60px)] mx-auto pt-[15px]">
          <div className="border-2 border-gray-300 p-[5px]">
            <div className="bg-gray-500 text-white px-2 py-1 font-bold text-xs leading-tight">
              PLACAS V2
            </div>
            <div className="px-2 mt-[1px] flex flex-col">
                <div className="px-2 mt-[1px] flex justify-left pt-[8px] pl-[25px]">
                  <p className="text-gray-700 font-bold text-xs pl-[15px] pt-[8px] pb-[5px] leading-tight text-center"> • PLACA DIANTEIRA</p>
                </div>
                <div className="flex items-center py-1 border-b border-gray-300 px-4">
                  <span className="text-left text-xs font-normal pl-[40px] w-1/2">
                    PLACA DENTRO DOS PADRÕES
                  </span>
                </div>
                <div className="px-2 mt-[1px] flex justify-left pt-[8px] pl-[25px]">
                  <p className="text-gray-700 font-bold text-xs pl-[15px] pt-[8px] pb-[5px] leading-tight text-center"> • PLACA TRASEIRA</p>
                </div>
                <div className="flex items-center py-1 border-b border-gray-300 px-4">
                  <span className="text-left text-xs font-normal pl-[40px] w-1/2">
                    PLACA DENTRO DOS PADRÕES
                  </span>
                </div>
            </div>
          </div>
        </div>
        <div className="w-[calc(100vw-60px)] mx-auto pt-[15px]">
          <div className="border-2 border-gray-300 p-[5px]">
            <div className="bg-gray-500 text-white px-2 py-1 font-bold text-xs leading-tight">
              VIDROS V2
            </div>
            <div className="px-2 mt-[1px] flex flex-col">
                <div className="px-2 mt-[1px] flex justify-left pt-[8px] pl-[25px]">
                  <p className="text-gray-700 font-bold text-xs pl-[15px] pt-[8px] pb-[5px] leading-tight text-center"> • CONDIÇÃO DO CHASSI NOS VIDROS</p>
                </div>
                <div className="flex items-center py-1 border-b border-gray-300 px-4">
                  <span className="text-left text-xs font-normal pl-[40px] w-1/2">
                    PARABRISA :
                  </span>
                  <span className="text-xs w-1/2 pl-[15px]">GRAVAÇÃO NÃO ORIGINAL / COINCIDE COM O CHASSI</span>
                </div>
                <div className="flex items-center py-1 border-b border-gray-300 px-4">
                  <span className="text-left text-xs font-normal pl-[40px] w-1/2">
                    PORTA DIANTE. ESQ. :
                  </span>
                  <span className="text-xs w-1/2 pl-[15px]">GRAVAÇÃO NÃO ORIGINAL / COINCIDE COM O CHASSI</span>
                </div>
                <div className="flex items-center py-1 border-b border-gray-300 px-4">
                  <span className="text-left text-xs font-normal pl-[40px] w-1/2">
                    PORTA TRAS. ESQ / LAT TRAS. ESQ. :
                  </span>
                  <span className="text-xs w-1/2 pl-[15px]">GRAVAÇÃO NÃO ORIGINAL / COINCIDE COM O CHASSI</span>
                </div>
                <div className="flex items-center py-1 border-b border-gray-300 px-4">
                  <span className="text-left text-xs font-normal pl-[40px] w-1/2">
                    VIGIA TRASEIRO. :
                  </span>
                  <span className="text-xs w-1/2 pl-[15px]">GRAVAÇÃO NÃO ORIGINAL / COINCIDE COM O CHASSI</span>
                </div>
                <div className="flex items-center py-1 border-b border-gray-300 px-4">
                  <span className="text-left text-xs font-normal pl-[40px] w-1/2">
                    PORTA TRAS. DIR / LAT TRAS. DIR. : PORTA DIANTE. DIR. :
                  </span>
                  <span className="text-xs w-1/2 pl-[15px]">GRAVAÇÃO NÃO ORIGINAL / COINCIDE COM O CHASSI</span>
                </div>
                <div className="flex items-center py-1 border-b border-gray-300 px-4">
                  <span className="text-left text-xs font-normal pl-[40px] w-1/2">
                     PORTA DIANTE. DIR. :
                  </span>
                  <span className="text-xs w-1/2 pl-[15px]">GRAVAÇÃO NÃO ORIGINAL / COINCIDE COM O CHASSI</span>
                </div>
            </div>
          </div>
        </div>
        <div className="w-[calc(100vw-60px)] mx-auto pt-[15px]">
          <div className="border-2 border-gray-300 p-[5px]">
            <div className="bg-gray-500 text-white px-2 py-1 font-bold text-xs leading-tight">
              ESTRUTURA VEICULAR V2
            </div>
            <div className="px-2 mt-[1px] flex flex-col">
                <div className="px-2 mt-[1px] flex justify-left pt-[8px] pl-[25px]">
                  <p className="text-gray-700 font-bold text-xs pl-[15px] pt-[8px] pb-[5px] leading-tight text-center"> • ESTRUTURA VEICULAR - DIANTEIRA</p>
                </div>
                <div className="flex items-center py-1 border-b border-gray-300 px-4">
                  <span className="text-left text-xs font-normal pl-[40px] w-1/2">
                    LONGARINA DIANTEI. ESQ. :
                  </span>
                  <span className="text-xs w-1/2 pl-[15px]">SEM AVARIAS APARENTES</span>
                </div>
                <div className="flex items-center py-1 border-b border-gray-300 px-4">
                  <span className="text-left text-xs font-normal pl-[40px] w-1/2">
                    LONGARINA DIANTEI. DIR :
                  </span>
                  <span className="text-xs w-1/2 pl-[15px]">SEM AVARIAS APARENTES</span>
                </div>
                <div className="flex items-center py-1 border-b border-gray-300 px-4">
                  <span className="text-left text-xs font-normal pl-[40px] w-1/2">
                    TORRE DO AMORTECEDOR DIANTEI. ESQ. :
                  </span>
                  <span className="text-xs w-1/2 pl-[15px]">SEM AVARIAS APARENTES</span>
                </div>
                <div className="flex items-center py-1 border-b border-gray-300 px-4">
                  <span className="text-left text-xs font-normal pl-[40px] w-1/2">
                    TORRE DO AMORTECEDOR DIANTEI. DIR. :
                  </span>
                  <span className="text-xs w-1/2 pl-[15px]">SEM AVARIAS APARENTES</span>
                </div>
                <div className="flex items-center py-1 border-b border-gray-300 px-4">
                  <span className="text-left text-xs font-normal pl-[40px] w-1/2">
                    PAINEL CORTA FOGO . :
                  </span>
                  <span className="text-xs w-1/2 pl-[15px]">SEM AVARIAS APARENTES</span>
                </div>
                <div className="flex items-center py-1 border-b border-gray-300 px-4">
                  <span className="text-left text-xs font-normal pl-[40px] w-1/2">
                     PAINEL DIANT. INF./SUP. OU ALMA DO PARACHOQUE:
                  </span>
                  <span className="text-xs w-1/2 pl-[15px]">SEM AVARIAS APARENTES</span>
                </div>
                <div className="flex items-center py-1 border-b border-gray-300 px-4">
                  <span className="text-left text-xs font-normal pl-[40px] w-1/2">
                     CRASHBOX (PARAFUSADO) . :
                  </span>
                  <span className="text-xs w-1/2 pl-[15px]">SEM AVARIAS APARENTES</span>
                </div>
                <div className="flex items-center py-1 border-b border-gray-300 px-4">
                  <span className="text-left text-xs font-normal pl-[40px] w-1/2">
                     CRASHBOX/QUADRO DO RADIADOR (SOLDADO) . :
                  </span>
                  <span className="text-xs w-1/2 pl-[15px]">SEM AVARIAS APARENTES</span>
                </div>
                <div className="flex items-center py-1 border-b border-gray-300 px-4">
                  <span className="text-left text-xs font-normal pl-[40px] w-1/2">
                     PARALAMA INT. DIANTEI. DIR. :
                  </span>
                  <span className="text-xs w-1/2 pl-[15px]">SEM AVARIAS APARENTES</span>
                </div>
                <div className="flex items-center py-1 border-b border-gray-300 px-4">
                  <span className="text-left text-xs font-normal pl-[40px] w-1/2">
                     PARALAMA INT. DIANTEI. ESQ. :
                  </span>
                  <span className="text-xs w-1/2 pl-[15px]">SEM AVARIAS APARENTES</span>
                </div>
            </div>
            <div className="px-2 mt-[1px] flex flex-col">
                <div className="px-2 mt-[1px] flex justify-left pt-[8px] pl-[25px]">
                  <p className="text-gray-700 font-bold text-xs pl-[15px] pt-[8px] pb-[5px] leading-tight text-center"> • ESTRUTURA VEICULAR - TRASEIRA</p>
                </div>
                <div className="flex items-center py-1 border-b border-gray-300 px-4">
                  <span className="text-left text-xs font-normal pl-[40px] w-1/2">
                    LONGARINA TRASEI. ESQ. :
                  </span>
                  <span className="text-xs w-1/2 pl-[15px]">SEM AVARIAS APARENTES</span>
                </div>
                <div className="flex items-center py-1 border-b border-gray-300 px-4">
                  <span className="text-left text-xs font-normal pl-[40px] w-1/2">
                    LONGARINA TRASEI. DIR. : 
                  </span>
                  <span className="text-xs w-1/2 pl-[15px]">SEM AVARIAS APARENTES</span>
                </div>
                <div className="flex items-center py-1 border-b border-gray-300 px-4">
                  <span className="text-left text-xs font-normal pl-[40px] w-1/2">
                    CAIXA DE RODA TRASEI. ESQ. :
                  </span>
                  <span className="text-xs w-1/2 pl-[15px]">SEM AVARIAS APARENTES</span>
                </div>
                <div className="flex items-center py-1 border-b border-gray-300 px-4">
                  <span className="text-left text-xs font-normal pl-[40px] w-1/2">
                    CAIXA DE RODA TRASEI. DIR. : 
                  </span>
                  <span className="text-xs w-1/2 pl-[15px]">SEM AVARIAS APARENTES</span>
                </div>
                <div className="flex items-center py-1 border-b border-gray-300 px-4">
                  <span className="text-left text-xs font-normal pl-[40px] w-1/2">
                    PORTA TRAS. DIR / LAT TRAS. DIR. : PORTA DIANTE. DIR. :
                  </span>
                  <span className="text-xs w-1/2 pl-[15px]">SEM AVARIAS APARENTES</span>
                </div>
                <div className="flex items-center py-1 border-b border-gray-300 px-4">
                  <span className="text-left text-xs font-normal pl-[40px] w-1/2">
                      PAINEL TRASEIRO . :
                  </span>
                  <span className="text-xs w-1/2 pl-[15px]">SEM AVARIAS APARENTES</span>
                </div>
                <div className="flex items-center py-1 border-b border-gray-300 px-4">
                  <span className="text-left text-xs font-normal pl-[40px] w-1/2">
                      CONDIÇÕES DA CAÇAMBA (COMPART. DE CARGA) . :
                  </span>
                  <span className="text-xs w-1/2 pl-[15px]">SEM AVARIAS APARENTES</span>
                </div>
                <div className="flex items-center py-1 border-b border-gray-300 px-4">
                  <span className="text-left text-xs font-normal pl-[40px] w-1/2">
                      PAINEL TRAS. DA CABINE (SEPARAÇÃO CAÇAMBA): 
                  </span>
                  <span className="text-xs w-1/2 pl-[15px]">SEM AVARIAS APARENTES</span>
                </div>
            </div>
            <div className="px-2 mt-[1px] flex flex-col">
                <div className="px-2 mt-[1px] flex justify-left pt-[8px] pl-[25px]">
                  <p className="text-gray-700 font-bold text-xs pl-[15px] pt-[8px] pb-[5px] leading-tight text-center"> • ESTRUTURA VEICULAR - LATERAIS</p>
                </div>
                <div className="flex items-center py-1 border-b border-gray-300 px-4">
                  <span className="text-left text-xs font-normal pl-[40px] w-1/2">
                    FOLHA LAT. TRASEI. DIR. :
                  </span>
                  <span className="text-xs w-1/2 pl-[15px]">SEM AVARIAS APARENTES</span>
                </div>
                <div className="flex items-center py-1 border-b border-gray-300 px-4">
                  <span className="text-left text-xs font-normal pl-[40px] w-1/2">
                    FOLHA LAT. TRASEI. ESQ. :
                  </span>
                  <span className="text-xs w-1/2 pl-[15px]">SEM AVARIAS APARENTES</span>
                </div>
                <div className="flex items-center py-1 border-b border-gray-300 px-4">
                  <span className="text-left text-xs font-normal pl-[40px] w-1/2">
                    CAIXA DE AR DIREITA . :
                  </span>
                  <span className="text-xs w-1/2 pl-[15px]">SEM AVARIAS APARENTES</span>
                </div>
                <div className="flex items-center py-1 border-b border-gray-300 px-4">
                  <span className="text-left text-xs font-normal pl-[40px] w-1/2">
                    CAIXA DE AR ESQUERDA . :
                  </span>
                  <span className="text-xs w-1/2 pl-[15px]">SEM AVARIAS APARENTES</span>
                </div>
                <div className="flex items-center py-1 border-b border-gray-300 px-4">
                  <span className="text-left text-xs font-normal pl-[40px] w-1/2">
                    COLUNA ESQ. (A) . :
                  </span>
                  <span className="text-xs w-1/2 pl-[15px]">SEM AVARIAS APARENTES</span>
                </div>
                <div className="flex items-center py-1 border-b border-gray-300 px-4">
                  <span className="text-left text-xs font-normal pl-[40px] w-1/2">
                     COLUNA ESQ. (B) . : 
                  </span>
                  <span className="text-xs w-1/2 pl-[15px]">SEM AVARIAS APARENTES</span>
                </div>
                <div className="flex items-center py-1 border-b border-gray-300 px-4">
                  <span className="text-left text-xs font-normal pl-[40px] w-1/2">
                     COLUNA ESQ. (C) . :
                  </span>
                  <span className="text-xs w-1/2 pl-[15px]">SEM AVARIAS APARENTES</span>
                </div>
                <div className="flex items-center py-1 border-b border-gray-300 px-4">
                  <span className="text-left text-xs font-normal pl-[40px] w-1/2">
                     COLUNA DIR. (A) . : 
                  </span>
                  <span className="text-xs w-1/2 pl-[15px]">SEM AVARIAS APARENTES</span>
                </div>
                <div className="flex items-center py-1 border-b border-gray-300 px-4">
                  <span className="text-left text-xs font-normal pl-[40px] w-1/2">
                     COLUNA DIR. (B) . :
                  </span>
                  <span className="text-xs w-1/2 pl-[15px]">SEM AVARIAS APARENTES</span>
                </div>
                <div className="flex items-center py-1 border-b border-gray-300 px-4">
                  <span className="text-left text-xs font-normal pl-[40px] w-1/2">
                     COLUNA DIR. (C) . :
                  </span>
                  <span className="text-xs w-1/2 pl-[15px]">SEM AVARIAS APARENTES</span>
                </div>
            </div>
            <div className="px-2 mt-[1px] flex flex-col">
                <div className="px-2 mt-[1px] flex justify-left pt-[8px] pl-[25px]">
                  <p className="text-gray-700 font-bold text-xs pl-[15px] pt-[8px] pb-[5px] leading-tight text-center"> • ESTRUTURA VEICULAR - OUTROS</p>
                </div>
                <div className="flex items-center py-1 border-b border-gray-300 px-4">
                  <span className="text-left text-xs font-normal pl-[40px] w-1/2">
                    ASSOALHO DO MONOBLOCO (HABITÁCULO, ÁREA VISÍVEL) . :
                  </span>
                  <span className="text-xs w-1/2 pl-[15px]">SEM AVARIAS APARENTES</span>
                </div>
                <div className="flex items-center py-1 border-b border-gray-300 px-4">
                  <span className="text-left text-xs font-normal pl-[40px] w-1/2">
                    ASSOALHO DO PORTAMALAS / CAÇAMBA . :
                  </span>
                  <span className="text-xs w-1/2 pl-[15px]">SEM AVARIAS APARENTES</span>
                </div>
                <div className="flex items-center py-1 border-b border-gray-300 px-4">
                  <span className="text-left text-xs font-normal pl-[40px] w-1/2">
                    CAIXA DE ESTEPE(DIVISÃO ASSOALHO DO PORTAMALAS):
                  </span>
                  <span className="text-xs w-1/2 pl-[15px]">SEM AVARIAS APARENTES</span>
                </div>
                <div className="flex items-center py-1 border-b border-gray-300 px-4">
                  <span className="text-left text-xs font-normal pl-[40px] w-1/2">
                    ALONGAMENTO DE CHASSI (PESADOS) . :
                  </span>
                  <span className="text-xs w-1/2 pl-[15px]">SEM AVARIAS APARENTES</span>
                </div>
                <div className="flex items-center py-1 border-b border-gray-300 px-4">
                  <span className="text-left text-xs font-normal pl-[40px] w-1/2">
                    ESTRUTURA DO TETO . : 
                  </span>
                  <span className="text-xs w-1/2 pl-[15px]">SEM AVARIAS APARENTES</span>
                </div>
                <div className="flex items-center py-1 border-b border-gray-300 px-4">
                  <span className="text-left text-xs font-normal pl-[40px] w-1/2">
                     FOLHA DO TETO . :
                  </span>
                  <span className="text-xs w-1/2 pl-[15px]">SEM AVARIAS APARENTES</span>
                </div>
            </div>
          </div>
        </div>
        <div className="w-[calc(100vw-60px)] mx-auto pt-[15px]">
          <div className="border-2 border-gray-300 p-[5px]">
            <div className="bg-gray-500 text-white px-2 py-1 font-bold text-xs leading-tight">
              HISTÓRICO: LEILÃO/SINISTRO/R/F
            </div>
            <div className="px-2 mt-[1px] flex flex-col">
                <div className="px-2 mt-[1px] flex justify-left pt-[8px] pl-[25px]">
                  <p className="text-gray-700 font-bold text-xs pl-[15px] pt-[8px] pb-[5px] leading-tight text-center"> •  HISTÓRICO VEICULAR</p>
                </div>
                <div className="flex items-center py-1 border-b border-gray-300 px-4">
                  <span className="text-left text-xs font-normal pl-[40px] w-1/2">
                  NENHUM REGISTRO ENCONTRADO
                  </span>
                </div>
            </div>
          </div>
        </div>
        <div className="w-[calc(100vw-60px)] mx-auto pt-[15px]">
          <div className="border-2 border-gray-300 p-[5px]">
            <div className="bg-gray-500 text-white px-2 py-1 font-bold text-xs leading-tight">
              DOCUMENTAÇÃO V2
            </div>
            <div className="px-2 mt-[1px] flex flex-col">
                <div className="px-2 mt-[1px] flex justify-left pt-[8px] pl-[25px]">
                  <p className="text-gray-700 font-bold text-xs pl-[15px] pt-[8px] pb-[5px] leading-tight text-center"> •  CRLV/PESQUISA NOVO</p>
                </div>
                <div className="flex items-center py-1 border-b border-gray-300 px-4">
                  <span className="text-left text-xs font-normal pl-[40px] w-1/2">
                    NENHUM REGISTRO ENCONTRADO
                  </span>
                </div>
                <div className="px-2 mt-[1px] flex justify-left pt-[8px] pl-[25px]">
                  <p className="text-gray-700 font-bold text-xs pl-[15px] pt-[8px] pb-[5px] leading-tight text-center"> •  VEÍCULO NOVO</p>
                </div>
                <div className="flex items-center py-1 border-b border-gray-300 px-4">
                  <span className="text-left text-xs font-normal pl-[40px] w-1/2">
                    NENHUM REGISTRO ENCONTRADO
                  </span>
                </div>
            </div>
          </div>
        </div>
        <div className="w-[calc(100vw-60px)] mx-auto pt-[15px]">
          <div className="border-2 border-gray-300 p-[5px]">
            <div className="bg-gray-500 text-white px-2 py-1 font-bold text-xs leading-tight">
              OBSERVAÇÃO
            </div>
            <div className="px-2 mt-[1px] flex flex-col">
                <div className="px-2 mt-[1px] flex justify-left pt-[8px] pl-[25px]">
                  <p className="text-gray-700 font-bold text-xs pl-[15px] pt-[8px] pb-[5px] leading-tight text-center">NADA CONSTA</p>
                </div>
            </div>
          </div>
        </div>
        <div className="w-[calc(100vw-60px)] mx-auto pt-[15px]">
          <div className="border-2 border-gray-300 p-[5px]">
            <div className="bg-gray-500 text-white px-2 py-1 font-bold text-xs leading-tight">
              OBSERVAÇÕES GERAIS
            </div>
            <div className="px-2 mt-[1px] flex flex-col">
                <div className="px-2 mt-[1px] flex justify-left pt-[8px] pl-[25px]">
                  <p className="text-gray-700 font-bold text-xs pl-[15px] pt-[8px] pb-[5px] leading-tight text-center">- A PRESENTE VISTORIA POSSUI CARÁTER INFORMATIVO DE ANÁLISE PARTICULAR DO VEÍCULO VISTORIADO, NÃO SUBSTITUINDO A
PERÍCIA OFICIAL DO INSTITUTO DE CRIMINALÍSTICA OU QUALQUER LAUDO OFICIAL DE ORGÃOS COMPETENTES. OS ORGÃOS OFICIAIS
POSSUEM FERRAMENTAS PRÓPRIAS DE ANÁLISE, NÃO DISPONÍVEIS PARA EMPRESAS DE VISTORIA;
- A UNIDADE SUPER VISÃO PRESTADORA DE SERVIÇO ABAIXO DESCRITA NÃO SE RESPONSABILIZA POR QUAISQUER MODIFICAÇÕES
POSTERIORES A REALIZAÇÃO DA VISTORIA. ESTE DOCUMENTO POSSUI SUA VALIDADE NO EXATO MOMENTO DA VISTORIA;
- OS ITENS ANALISADOS RESPEITAM O ESCOPO DO RESPECTIVO SERVIÇO CONTRATADO, QUE SÃO APENAS OS ITENS INDICADOS NO
PRESENTE DOCUMENTO, DENTRO DOS CRITÉRIOS ESTABELECIDOS EM CADA UM DELES, NÃO ABRAGENDO NENHUM ITEM QUE NÃO ESTEJA
PRESENTE NESTA VISTORIA;
- O STATUS/RESULTADO FINAL SEGUE O CRITÉRIO DE AVALIAÇÃO DESENVOLVIDO PELA SUPER VISÃO PERÍCIAS E VISTORIAS LTDA,
PODENDO ESTE SER ALTERADO SEM PRÉVIA COMUNICAÇÃO (ÚLTIMA ATUALIZAÇÃO 18/11/2023);
- OS ITENS ESTRUTURAIS ANALISADOS COMTEMPLAM AS REGIÕES VISÍVEIS, PASSIVEIS DE SEREM ANALISADAS SEM DESMONTAGEM DE
PEÇAS;
- A SUPER VISÃO DISPONIBILIZA NA ÍNTEGRA OS DADOS FORNECIDOS PELAS EMPRESAS DE PESQUISA, NÃO SE RESPONSABILIZANDO POR
INFORMAÇÕES VINDAS DESTES FORNECEDORES POR SE TRATAREM DE BASES DE TERCEIROS;
- CRITÉRIO DE AVALIAÇÃO DAS SEGURADORAS: AS COMPANHIAS DE SEGURO POSSUEM SEUS PRÓPRIOS MÉTODOS E CRITÉRIOS DE
AVALIAÇÃO DE RISCO PARA ACEITAÇÃO OU NÃO DA COBERTURA SECURITÁRIA, POR ESSE MOTIVO INFORMAMOS QUE O RESULTADO
DESTA VISTORIA, INDEPENDE DA ACEITAÇÃO OU NÃO DA SEGURADORA;
- A SUPER VISÃO NÃO VALIDA A EXISTÊNCIA OU O FUNCIONAMENTO DAS BOLSAS DE AIRBAG NO VEÍCULO;
- MULTAS, DÉBITOS, RESTRIÇÕES FINANCEIRAS COMO GRAVAME OU OUTROS, NÃO FAZEM PARTE DO ESCOPO DA VISTORIA. PARA
LEVANTAMENTO DE DÉBITOS DO VEÍCULO, PROCURAR UM PROFISSIONAL ESPECIALIZADO;
- NÃO VERIFICAMOS A PROCEDÊNCIA DA INFORMAÇÃO DE HODOMETRO EM NOSSAS VISTORIAS DEVIDO A INEXISTÊNCIA DE FERRAMENTAS
QUE PERMITAM 100% DE ASSERTIVIDADE</p>
                </div>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
};

export default DocumentTemplate;
