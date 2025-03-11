/* eslint-disable */
import  { AxiosError } from "axios"
import { downloadPdfServices } from "@/app/services/downloadPdfService";
import type { VehicleInspectionData } from "@/components/vehicle-inspection-form"

interface RenderPdfProps {
    formData: VehicleInspectionData
}
  interface ErrorResponse{
    message? : string
  }

export async function onDownload ({formData} : RenderPdfProps,
    toast: (args: { title: string; description: string; variant?: "destructive" }) => void
)  {
    try{
        debugger;
        const res = await downloadPdfServices.downloadPdf({formData});
        if(res){
            toast({title: "PDF gerado com sucesso", description: "Iniciaindo download"});

            const blob = new Blob([res], {type: "application/pdf"}); // converte a resposta para um blob
            const url = window.URL.createObjectURL(blob); // cria link de download temporario
            const link = document.createElement("a"); 
            link.href = url;
            link.download = `document.pdf`;
            document.body.appendChild(link);
            link.click();
            link.remove();

            toast({title:"Download iniciado", description: "Baixando PDF..."})
        }else
        {
            toast({title:"Error", description:"Falha ao gerar PDF"})
        }
    }catch(error:any){
        console.error(error);
        const axiosError = error as AxiosError<ErrorResponse>;

        toast({
            title:"Algo deu errado",
            description: axiosError.response?.data || error.message,
            variant: "destructive"
        })
    };
    
}