import { generatePdf } from "@/lib/generatePdf";
import { stat } from "fs";

export const POST = async (req : any, {params}: any) => {
    try{
        const {documentId} = await req.json();
        const userId = params.userId;

        // const userData = await getUserDataById(userId); //Busca informações do usuario
        //const documentData = await getDocumentDataById(documentId); //busca informações do documento

        if(!userId || !documentId){
            return new Response("Faltando campos obrigatórios", {status: 400});
        }

        // const htmlContent = await renderPDf(documentData, userData);
        // const pdfBuffer = await generatePdf(htmlContent, documentId, true);

        // return new Response(pdfBuffer,{
        //     status:200,
        //     headers: {
        //         "Content-Type": "application/pdf",
        //         "Content-Disposition": `attachment; filename=document${documentId}.pdf`
        //     },
        // });

    }catch(error:any){
        console.error(error);
        return new Response("Erro ao gerar PDF", {status: 500});
    }
}