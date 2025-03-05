'use client'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { LogOut } from "lucide-react"
import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"

export default function AccountPage() {
  const {data} = useSession();
  const router = useRouter();
  if(!data?.user){
    router.push('/')
  }
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-6">Minha conta</h1>
      <Tabs defaultValue="profile" className="w-full">
        <TabsList className="grid w-full grid-cols-4 mb-8">
          <TabsTrigger value="Perfil">Perfil</TabsTrigger>
          <TabsTrigger value="Inscricao">Assinatura</TabsTrigger>
          <TabsTrigger value="settings">Configurações</TabsTrigger>
          <TabsTrigger value="billing">Pagamento</TabsTrigger>
        </TabsList>
        <TabsContent value="Perfil">
          <Card>
            <CardHeader>
              <CardTitle>Informações de perfil</CardTitle>
              <CardDescription>Atualize suas informações de perfil aqui.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Nome</Label>
                <Input id="name" placeholder={data?.user?.name as string} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">E-mail</Label>
                <Input id="email" type="email" placeholder={data?.user?.email as string} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="company">Empresa</Label>
                <Input id="company" placeholder={data?.user?.name as string} />
              </div>
            </CardContent>
            <CardFooter>
              <Button>Salva alterações</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="Inscricao">
          <Card>
            <CardHeader>
              <CardTitle>Detalhes da assinatura </CardTitle>
              <CardDescription>Gerencie seu plano de assinatura aqui</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <p>
                  <strong>Plano atual:</strong> Profissional
                </p>
                <p>
                  <strong>Status:</strong> Ativo
                </p>
                <p>
                  <strong>Proxima data de pagamento:</strong> 1 de Junho de 2025
                </p>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline">Atualizar plano</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="settings">
          <Card>
            <CardHeader>
              <CardTitle>Configurações da conta</CardTitle>
              <CardDescription>Gerencie as preferencias da sua conta.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center space-x-2">
                <Label htmlFor="notifications">Notificações de e-mail</Label>
                <Input type="checkbox" id="notifications" />
              </div>
              <div className="flex items-center space-x-2">
                <Label htmlFor="twoFactor">Autenticações de dois fatores</Label>
                <Input type="checkbox" id="twoFactor" />
              </div>
            </CardContent>
            <CardFooter>
              <Button>Salvar preferencias</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="billing">
          <Card>
            <CardHeader>
              <CardTitle>Informações de pagamento</CardTitle>
              <CardDescription>Gerencie seus metodos de pagamento e histórico</CardDescription>
            </CardHeader>
            <CardContent>
              <p>
              Suas informações de faturamento e histórico de pagamentos serão exibidos aqui.</p>
            </CardContent>
            <CardFooter>
              <Button variant="outline">Ver histórico de pagamentos</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
      <div className="mt-8">
        <Button variant="destructive">
          <LogOut className="mr-2 h-4 w-4" /> Logout
        </Button>
      </div>
    </div>
  )
}

