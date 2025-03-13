/* eslint-disable */
import { generatePdf } from "@/lib/generatePdf";
import RenderPdf from "@/lib/renderPdf";
import { NextRequest, NextResponse } from "next/server";
// import  RenderPdf  from "@/lib/renderPdf";
import type { VehicleInspectionData } from "@/components/vehicle-inspection-form"

  interface RenderPdfProps {
    formData: VehicleInspectionData
  }

export const POST = async (req: NextRequest, {params}: { params: Promise<{ id: string }> }) => {
    try {
        debugger;
        const documentId = (await params).id; // Aguarda params e pega o ID

        if (!documentId) {
            return new Response("Faltando campos obrigatórios", { status: 400 });
        }

        const formData: RenderPdfProps = await req.json()

        const htmlContent = await RenderPdf(formData);

        const pdfBuffer = await generatePdf(htmlContent.document, "aaa", true);

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

