import axios, { AxiosError } from "axios"
import { useToast } from "@/hooks/use-toast"
import { downloadPdfServices } from "@/app/services/downloadPdfService";
interface DownloadParams{
    userId: string,
    documentId: string
}

interface ErrorResponse{
    message?: string
}

export async function onDownload ({userId, documentId} : DownloadParams,
    toast: (args: { title: string; description: string; variant?: "destructive" }) => void
)  {
    try{
        debugger;
        const res = await downloadPdfServices.downloadPdf({userId: userId, documentId: documentId});
        if(res){
            toast({title: "PDF gerado com sucesso", description: "Iniciaindo download"});

            const blob = new Blob([res], {type: "application/pdf"}); // converte a resposta para um blob
            const url = window.URL.createObjectURL(blob); // cria link de download temporario
            const link = document.createElement("a"); 
            link.href = url;
            link.download = `document-${documentId}.pdf`;
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