import puppeteer from "puppeteer";
import path from "path";

interface generatePdfProps {
    htmlContent: string,
    documentId: string,
    isDownload: boolean
}

export const generatePdf = async (htmlContent: string, documentId : string, isDownload : boolean) =>{
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    const styledHtmlContent = `
       <html>
        <head>
            <script src="https://cdn.tailwindcss.com"></script>
            <style>
                /* Garante que o fundo do PDF seja branco */
                body {
                    background-color: white !important;
                }
            </style>
        </head>
        <body class="p-10 bg-white text-black">
            <div class="border border-gray-300 p-5 rounded-lg shadow-lg">
                <h1 class="text-2xl font-bold text-blue-600">TESTE</h1>
                <hr class="my-4 border-gray-400">
                <p class="text-lg">Usuário: <span class="font-semibold">teste</span></p>
            </div>
        </body>
    </html>
`;

    await page.setContent(styledHtmlContent, {waitUntil: "networkidle0"});

    //salva o pdf em uma pasta publica 
    if(!isDownload){
        const outputPath = path.join(process.cwd(), `public/documents/document-${documentId}.pdf`);
        await page.pdf({path: outputPath, format:"A4", printBackground: true});
        await browser.close();
        return;
    }

    const pdfBuffer = await page.pdf({format: "A4", printBackground:true});
    await browser.close();
    return pdfBuffer;
}