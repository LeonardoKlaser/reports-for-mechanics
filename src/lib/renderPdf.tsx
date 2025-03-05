import DocumentTemplate from "@/components/DocumentTemplate";
import HeaderTemplate from "@/components/headerTemplate";
import React from "react";


// interface DocumentData {
//   title: string;
//   content: string;
// }

// interface UserData {
//   name: string;
//   email: string;
// }

export default async function RenderPdf()  {
    const { renderToString } = await import("react-dom/server");
    const document = renderToString(<DocumentTemplate  documentData={{ title: "Meu Documento", content: "Esse é o conteúdo do documento." }} 
    userData={{ name: "Leonardo Becker Klaser", email: "leobkklaser@gmail.com" }}  ></DocumentTemplate>)

    const header = renderToString(<HeaderTemplate></HeaderTemplate>)
    return {header: header, document: document}
};
