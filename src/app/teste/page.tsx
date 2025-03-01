import DocumentTemplate from "@/components/DocumentTemplate";
import HeaderTemplate from "@/components/headerTemplate";

export default async function test(){
    return(
        <>
        {/* <HeaderTemplate></HeaderTemplate> */}
            <DocumentTemplate documentData={{ title: "Meu Documento", content: "Esse é o conteúdo do documento." }} 
        userData={{ name: "Leonardo Becker Klaser", email: "leobkklaser@gmail.com" }}></DocumentTemplate>
        </>
    )
}