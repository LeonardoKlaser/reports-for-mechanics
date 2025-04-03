import chromium from '@sparticuz/chromium-min';
import puppeteerCore from 'puppeteer-core';
import puppeteer from 'puppeteer';
import path from "path";

// interface generatePdfProps {
//     htmlContent: string,
//     documentId: string,
//     isDownload: boolean
// }

const isProduction = process.env.NODE_ENV === 'production';

export const generatePdf = async (htmlContent: string, documentId : string, isDownload : boolean) => {
    let browser = null;
    const remoteExecutablePath = "https://github.com/Sparticuz/chromium/releases/download/v121.0.0/chromium-v121.0.0-pack.tar";
    try {
        console.log('Ambiente:', process.env.NODE_ENV);
        console.log('É produção?', isProduction);
        console.log('Iniciando Playwright...');
        
        if(isProduction){
            browser = await puppeteerCore.launch({
                args: chromium.args,
                executablePath: await chromium.executablePath(remoteExecutablePath),
                headless: true,
            })
        } else {
            browser = await puppeteer.launch({
                headless: true,
                args: ['--no-sandbox', '--disable-setuid-sandbox']
            })
        }
       
        
        console.log('Criando nova página...', browser);
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
                format: "a4", 
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
            format: "a4",
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