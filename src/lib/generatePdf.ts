import puppeteer from "puppeteer";
import path from "path";

// interface generatePdfProps {
//     htmlContent: string,
//     documentId: string,
//     isDownload: boolean
// }

export const generatePdf = async (htmlContent: string, documentId : string, isDownload : boolean) =>{
    const browser = await puppeteer.launch({headless: "shell"});
    const page = await browser.newPage();
    debugger;
    const styledHtmlContent = htmlContent;

    await page.setContent(styledHtmlContent, {waitUntil: "networkidle0"});

    //salva o pdf em uma pasta publica 
    if(!isDownload){
        const outputPath = path.join(process.cwd(), `public/documents/document-${documentId}.pdf`);
        await page.pdf({path: outputPath, format:"A4", printBackground: true, preferCSSPageSize:true, displayHeaderFooter: true,
            headerTemplate: `<div style="font-size:10px; width:100%;text-align:center;"> Relatordasdaio Vistoria Veicular </div>`,
            footerTemplate: `<div style="font-size:10px; width:100%;text-align:center;"> Todos os direitos reservados LEOZIN </div>`
        });
        await browser.close();
        return;
    }


    const pdfBuffer = await page.pdf({
        format: "A4",
        printBackground: true,
        preferCSSPageSize: true,
        displayHeaderFooter: false
    });
    await browser.close();
    return pdfBuffer;
}