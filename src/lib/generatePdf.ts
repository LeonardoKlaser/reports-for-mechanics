import puppeteer from "puppeteer";
import path from "path";

interface generatePdfProps {
    htmlContent: string,
    documentId: string,
    isDownload: boolean
}

export const generatePdf = async ({htmlContent, documentId, isDownload}: generatePdfProps) =>{
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    const styledHtmlContent = `
        <style>
            body {
                background-color: #525659; /* Replace with your desired background color */
                margin: 0; /* Ensure no margin */
                padding: 0; /* Ensure no padding */
                width: 100%;
                height: 100%;
            }
        </style>
        ${htmlContent}
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