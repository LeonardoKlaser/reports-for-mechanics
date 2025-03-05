/* eslint-disable */
import axios from "axios";

interface DownloadParams{
    userId: string,
    documentId: string
}

export const downloadPdfServices = {
    downloadPdf: async ({userId, documentId} : DownloadParams) =>{
       try{
        debugger;
        console.log(documentId)
        const res = await axios.post(
            `http://localhost:3000/api/generate-pdf/${userId}`, 
            {}, 
            {responseType: "arraybuffer"} //manipular dados binários para o PDF
        );

        return res.data;
       }catch(error: any){
            console.log(error);
            throw new Error();
       }
    }
}