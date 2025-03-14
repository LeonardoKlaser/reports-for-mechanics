import './globals.css'
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, FileText, Camera, Brain, ArrowRight } from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col gap-y-4 justify-center items-center min-h-screen">
       <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                Relatórios de avaliação automática de veículos
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                Gere relatórios profissionais de veículos com insights baseados em IA. Simplifique seu fluxo de trabalho mecânico e impressione seus clientes.
                </p>
              </div>
              <div className="space-x-4">
                <Button asChild>
                  <Link href="/formularioV2">Experimente uma demonstração</Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="#how-it-works">Saiba mais</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
        <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Principais recursos</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <FileText className="w-8 h-8 mb-2" />
                  <CardTitle>Fácil entrada de dados</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Insira rapidamente dados do veículo com nossa interface amigável projetada para mecânicos.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Camera className="w-8 h-8 mb-2" />
                  <CardTitle>Integração com fotos</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                  Capture e inclua fotos do veículo diretamente em seus relatórios para obter documentação abrangente.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Brain className="w-8 h-8 mb-2" />
                  <CardTitle>Insights baseados em Inteligencia Artificial</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Obtenha análises e recomendações inteligentes com base nos dados do veículo que você fornece.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section id="how-it-works" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Como funciona</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center mb-4">
                  1
                </div>
                <h3 className="text-xl font-bold mb-2">Insira as informações do veículo</h3>
                <p>Insira os detalhes do veículo e informações sobre a condição em nosso formulário fácil de usar.</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center mb-4">
                  2
                </div>
                <h3 className="text-xl font-bold mb-2">Insira fotos</h3>
                <p>Tire e carregue fotos do veículo para incluir no relatório.</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center mb-4">
                  3
                </div>
                <h3 className="text-xl font-bold mb-2">Generate Report</h3>
                <p>Nossa IA analisa os dados e cria um relatório PDF abrangente com insights.</p>
              </div>
            </div>
          </div>
        </section>
        <section id="demo" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Experimente nossa demonstração</h2>
            <div className="max-w-md mx-auto">
              <Card>
                <CardHeader>
                  <CardTitle>Gere um relatório de amostra</CardTitle>
                  <CardDescription>Experimente o poder da nossa geração automática de relatórios.</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button className="w-full">
                    Iniciar demonstração
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section id="pricing" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Preços</h2>
            <div className="max-w-sm mx-auto">
              <Card>
                <CardHeader>
                  <CardTitle>Plano Premium </CardTitle>
                  <CardDescription>Desbloqueie acesso total ao MechaReport</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-4">
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                      Geração ilimitada de relatórios
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                      Insights baseados em IA
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                      Integração de fotos
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                      Suporte prioritário
                    </li>
                  </ul>
                  <Button className="w-full">Obtenha agora</Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 MechaReport. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Termos de Serviço
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacidade
          </Link>
        </nav>
      </footer>
    </div>
    
  );
}
