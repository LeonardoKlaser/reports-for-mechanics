import DocumentTemplate from "@/components/DocumentTemplate";
import { generatePdf } from "@/lib/generatePdf";
import RenderPdf from "@/lib/renderPdf";
// import  RenderPdf  from "@/lib/renderPdf";
import { stat } from "fs";

export const POST = async (req: Request, context: { params: { id: string } }) => {
    try {
        debugger;
        const { params } = context; // Pega os parâmetros corretamente
        const documentId = params?.id; // Aguarda params e pega o ID

        if (!documentId) {
            return new Response("Faltando campos obrigatórios", { status: 400 });
        }

        const htmlContent = await RenderPdf();

        const pdfBuffer = await generatePdf(htmlContent.document, "aaa", true, htmlContent.header);

        return new Response(pdfBuffer, {
            status: 200,
            headers: {
                "Content-Type": "application/pdf",
                "Content-Disposition": `attachment; filename=document${documentId}.pdf`
            },
        });

    } catch (error: any) {
        console.error(error);
        return new Response("Erro ao gerar PDF", { status: 500 });
    }
};

