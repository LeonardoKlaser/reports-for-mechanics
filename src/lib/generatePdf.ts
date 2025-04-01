import chromium from '@sparticuz/chromium';
import puppeteer from 'puppeteer-core';
import path from "path";

// interface generatePdfProps {
//     htmlContent: string,
//     documentId: string,
//     isDownload: boolean
// }

const isProduction = process.env.NODE_ENV === 'production';

export const generatePdf = async (htmlContent: string, documentId : string, isDownload : boolean) => {
    let browser = null;
    try {
        console.log('Ambiente:', process.env.NODE_ENV);
        console.log('É produção?', isProduction);
        console.log('Iniciando Puppeteer...');
        
        const options = isProduction 
            ? {
                args: chromium.args,
                defaultViewport: chromium.defaultViewport,
                executablePath: await chromium.executablePath(),
                headless: chromium.headless,
                ignoreHTTPSErrors: true,
            }
            : {
                args: ['--no-sandbox', '--disable-setuid-sandbox'],
                executablePath: process.platform === 'win32'
                    ? 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe'
                    : process.platform === 'linux'
                    ? '/usr/bin/google-chrome'
                    : '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
                headless: true,
                ignoreHTTPSErrors: true,
            };

        console.log('Usando opções:', isProduction ? 'Produção (Vercel)' : 'Desenvolvimento (Local)');
        browser = await puppeteer.launch(options);
        
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
        if (browser) {
            await browser.close();
        }
        throw error;
    }
}