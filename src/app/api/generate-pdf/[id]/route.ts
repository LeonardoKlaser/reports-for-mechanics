import DocumentTemplate from "@/components/DocumentTemplate";
import { generatePdf } from "@/lib/generatePdf";
// import  RenderPdf  from "@/lib/renderPdf";
import { stat } from "fs";

export const POST = async (req: Request, context: { params: { id: string } }) => {
    try {
        const { params } = context; // Pega os parâmetros corretamente
        const documentId = params?.id; // Aguarda params e pega o ID

        if (!documentId) {
            return new Response("Faltando campos obrigatórios", { status: 400 });
        }

        const htmlContent = `<html>
            <head>
                <title>Teste</title>
                <style>
                    body { font-family: Arial, sans-serif; padding: 20px; }
                    h1 { color: #333; }
                </style>
            </head>
            <body>
                <h1>Teste</h1>
                <p>Teste</p>
                <hr>
                <p>Usuário: Teste</p>
            </body>
        </html>`;

        const pdfBuffer = await generatePdf(htmlContent, "aaa", true);

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

