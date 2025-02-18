import axios, { AxiosError } from "axios"
import { useToast } from "@/hooks/use-toast"

const {toast} = useToast();
interface DownloadParams{
    userId: string,
    documentId: string
}

interface ErrorResponse{
    message?: string
}

export const onDownload = async ({userId, documentId} : DownloadParams) => {
    try{
        const res = await axios.post(
            `/api/generate-pdf/${userId}`, 
            {documentId}, 
            {responseType: "arraybuffer"} //manipular dados binários para o PDF
        );
        if(res.status == 200){
            toast({title: "PDF gerado com sucesso", description: "Iniciaindo download"});

            const blob = new Blob([res.data], {type: "application/pdf"}); // converte a resposta para um blob
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