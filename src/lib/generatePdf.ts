import puppeteer from "puppeteer";
import path from "path";

// interface generatePdfProps {
//     htmlContent: string,
//     documentId: string,
//     isDownload: boolean
// }

export const generatePdf = async (htmlContent: string, documentId : string, isDownload : boolean) => {
    try {
        console.log('Iniciando Puppeteer...');
        const browser = await puppeteer.launch({
            headless: true,
            args: [
                '--no-sandbox',
                '--disable-setuid-sandbox',
                '--disable-dev-shm-usage',
                '--disable-accelerated-2d-canvas',
                '--disable-gpu'
            ]
        });
        
        console.log('Criando nova página...');
        const page = await browser.newPage();
        
        console.log('Configurando viewport...');
        await page.setViewport({
            width: 1200,
            height: 800
        });

        console.log('Definindo conteúdo HTML...');
        await page.setContent(htmlContent, {
            waitUntil: "networkidle0",
            timeout: 30000
        });

        //salva o pdf em uma pasta publica 
        if(!isDownload){
            const outputPath = path.join(process.cwd(), `public/documents/document-${documentId}.pdf`);
            await page.pdf({
                path: outputPath, 
                format: "A4", 
                printBackground: true, 
                preferCSSPageSize: true, 
                displayHeaderFooter: true,
                headerTemplate: `<div style="font-size:10px; width:100%;text-align:center;"> Relatordasdaio Vistoria Veicular </div>`,
                footerTemplate: `<div style="font-size:10px; width:100%;text-align:center;"> Todos os direitos reservados LEOZIN </div>`
            });
            await browser.close();
            return;
        }

        console.log('Gerando PDF...');
        const pdfBuffer = await page.pdf({
            format: "A4",
            printBackground: true,
            preferCSSPageSize: true,
            displayHeaderFooter: false
        });
        
        console.log('Fechando navegador...');
        await browser.close();
        
        return pdfBuffer;
    } catch (error) {
        console.error('Erro ao gerar PDF:', error);
        throw error;
    }
}