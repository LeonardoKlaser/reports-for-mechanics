import './globals.css'
import Button from "../components/Button";

export default function Home() {
  return (
    <div className="flex flex-col gap-y-4 justify-center items-center min-h-screen">
      <div className="flex flex-col gap-y-4 justify-center items-center ">
        <h1 className="text-center font-bold pb-16 text-5xl">Crie seus laúdos de Vistoria Veicular de forma pratica</h1>
        <Button style='primary' label="Criar Formulario"></Button>
        <Button style='secondary' label="Ver Planos"></Button>
        <Button style='secondary' label="Sobre"></Button>
        <Button style='secondary' label="Crir conta"></Button>
      </div>
    </div>
    
  );
}
