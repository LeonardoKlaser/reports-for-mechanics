/* eslint-disable */
import { generatePdf } from "@/lib/generatePdf";
import RenderPdf from "@/lib/renderPdf";
import { NextRequest, NextResponse } from "next/server";
// import  RenderPdf  from "@/lib/renderPdf";
import type { VehicleInspectionData } from "@/components/vehicle-inspection-form"

interface RenderPdfProps {
  formData: VehicleInspectionData
}

export async function POST(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const { formData } = await request.json();
    
    // Configurar headers CORS
    const headers = {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    };

    // Gerar o PDF
    const htmlContent = await RenderPdf({ formData });
    const pdfBuffer = await generatePdf(htmlContent.document, params.id, true);

    // Retornar o PDF com os headers corretos
    return new NextResponse(pdfBuffer, {
      headers: {
        ...headers,
        'Content-Type': 'application/pdf',
        'Content-Disposition': 'attachment; filename="relatorio.pdf"',
      },
    });
  } catch (error) {
    console.error('Erro ao gerar PDF:', error);
    return NextResponse.json(
      { error: 'Erro ao gerar o PDF' },
      { status: 500 }
    );
  }
}

// Adicionar handler OPTIONS para CORS
export async function OPTIONS() {
  return new NextResponse(null, {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    },
  });
}

