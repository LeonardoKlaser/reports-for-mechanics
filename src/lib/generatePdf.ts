import puppeteer from "puppeteer";
import path from "path";

interface generatePdfProps {
    htmlContent: string,
    documentId: string,
    isDownload: boolean
}

export const generatePdf = async (htmlContent: string, documentId : string, isDownload : boolean, headerTemplate: string) =>{
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

    var cssb = [];
    cssb.push('<style>');
    cssb.push('h1 { font-size:10px; margin-left:30px; padding-top:20px;}');
    cssb.push('</style>');
    var css = cssb.join('');
    var cssbH = [];
    cssbH.push('<style>');
    cssbH.push('div {width:100%; height: 2px; background-color; #A9A9A9; position: fixed; left: 40px; right: 40px;}');
    cssbH.push('</style>');
    var cssH = cssbH.join('');

    const pdfBuffer = await page.pdf({
        format: "A4",
        printBackground: true,
        preferCSSPageSize: true,
        displayHeaderFooter: true,
        headerTemplate: cssH + '<div></div>',
        footerTemplate: css + '<h1>Page <span class="pageNumber"></span> of <span class="totalPages"></span></h1>',
        margin: {top: "40px", bottom: "40px" }
    });
    await browser.close();
    return pdfBuffer;
}