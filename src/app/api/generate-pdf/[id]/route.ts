/* eslint-disable */
import { generatePdf } from "@/lib/generatePdf";
import RenderPdf from "@/lib/renderPdf";
import { NextRequest, NextResponse } from "next/server";
// import  RenderPdf  from "@/lib/renderPdf";
import type { VehicleInspectionData } from "@/components/vehicle-inspection-form"

interface RenderPdfProps {
  formData: VehicleInspectionData
}

export async function POST(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    console.log('Iniciando geração do PDF...');
    
    const { formData } = await request.json();
    console.log('Dados do formulário recebidos:', JSON.stringify(formData, null, 2));
    
    const { id } = await params;
    console.log('ID do documento:', id);
    
    // Configurar headers CORS
    const headers = {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    };

    console.log('Iniciando renderização do HTML...');
    const htmlContent = await RenderPdf({ formData });
    console.log('HTML renderizado com sucesso');

    console.log('Iniciando geração do PDF...');
    const pdfBuffer = await generatePdf(htmlContent.document, id, true);
    console.log('PDF gerado com sucesso');

    // Retornar o PDF com os headers corretos
    return new NextResponse(pdfBuffer, {
      headers: {
        ...headers,
        'Content-Type': 'application/pdf',
        'Content-Disposition': 'attachment; filename="relatorio.pdf"',
      },
    });
  } catch (error: any) {
    console.error('Erro detalhado ao gerar PDF:', {
      message: error.message,
      stack: error.stack,
      name: error.name
    });

    // Retornar uma resposta mais detalhada com o erro
    return NextResponse.json(
      { 
        error: 'Erro ao gerar o PDF',
        details: error.message,
        stack: process.env.NODE_ENV === 'development' ? error.stack : undefined
      },
      { 
        status: 500,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type, Authorization',
        }
      }
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

