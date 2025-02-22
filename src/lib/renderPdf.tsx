import DocumentTemplate from "@/components/DocumentTemplate";
import React, { createElement } from "react";


interface DocumentData {
  title: string;
  content: string;
}

interface UserData {
  name: string;
  email: string;
}

export default async function RenderPdf()  {
    const { renderToString } = await import("react-dom/server");
  return renderToString(<DocumentTemplate  documentData={{ title: "Meu Documento", content: "Esse é o conteúdo do documento." }} 
    userData={{ name: "Leonardo Becker Klaser", email: "leobkklaser@gmail.com" }}  ></DocumentTemplate>)
};
