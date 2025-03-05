import type { Metadata } from "next"
import { CreditCard, DollarSign, Download, Users, FileText, Plus, Settings, Lock, Car } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CalendarDateRangePicker } from "@/app/dashboard/components/date-range-picker"
import { MainNav } from "@/app/dashboard/components/main-nav"
import { Overview } from "@/app/dashboard/components/overview"
import { RecentReports } from "@/app/dashboard/components/recent-reports"
import { Search } from "@/app/dashboard/components/search"
import TeamSwitcher from "@/app/dashboard/components/team-switcher"
import { UserNav } from "@/app/dashboard/components/user-nav"

export const metadata: Metadata = {
  title: "Dashboard",
  description: "MechaReport user dashboard",
}

export default function DashboardPage() {
    return (
      <div className="flex min-h-screen flex-col">
        <div className="border-b">
          <div className="flex h-16 items-center px-4">
            <TeamSwitcher />
            <MainNav className="mx-6" />
            <div className="ml-auto flex items-center space-x-4">
              <Search />
              <UserNav />
            </div>
          </div>
        </div>
        <div className="flex-1 space-y-4 p-4 pt-6 md:p-8">
          <div className="flex flex-col space-y-2 md:flex-row md:items-center md:justify-between">
            <h2 className="text-3xl font-bold tracking-tight">Painel de Controle</h2>
            <div className="flex flex-col space-y-2 md:flex-row md:space-x-2 md:space-y-0">
              <CalendarDateRangePicker />
              <Button>
                <Download className="mr-2 h-4 w-4" />
                Baixar Relatórios
              </Button>
            </div>
          </div>
          <Tabs defaultValue="overview" className="space-y-4">
            <TabsList className="flex flex-wrap">
              <TabsTrigger value="overview">Visão Geral</TabsTrigger>
              <TabsTrigger value="analytics" disabled>
                Análises
              </TabsTrigger>
              <TabsTrigger value="reports">Relatórios</TabsTrigger>
              <TabsTrigger value="notifications">Notificações</TabsTrigger>
            </TabsList>
            <TabsContent value="overview" className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Total de Relatórios</CardTitle>
                    <FileText className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">245</div>
                    <p className="text-xs text-muted-foreground">+20% em relação ao mês passado</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Clientes Ativos</CardTitle>
                    <Users className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">42</div>
                    <p className="text-xs text-muted-foreground">+15% em relação ao mês passado</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Receita</CardTitle>
                    <DollarSign className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">$5,231</div>
                    <p className="text-xs text-muted-foreground">+10% em relação ao mês passado</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Assinaturas Ativas</CardTitle>
                    <CreditCard className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">38</div>
                    <p className="text-xs text-muted-foreground">+7 desde o mês passado</p>
                  </CardContent>
                </Card>
              </div>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                <Card className="col-span-4">
                  <CardHeader>
                    <CardTitle>Visão Geral</CardTitle>
                  </CardHeader>
                  <CardContent className="pl-2">
                    <Overview />
                  </CardContent>
                </Card>
                <Card className="col-span-3">
                  <CardHeader>
                    <CardTitle>Relatórios Recentes</CardTitle>
                    <CardDescription>Você gerou 12 relatórios este mês.</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <RecentReports />
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            <TabsContent value="reports" className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <Card className="col-span-2">
                  <CardHeader>
                    <CardTitle>Ações Rápidas</CardTitle>
                  </CardHeader>
                  <CardContent className="grid gap-4 md:grid-cols-2">
                    <Button className="w-full">
                      <Plus className="mr-2 h-4 w-4" /> Novo Relatório
                    </Button>
                    <Button variant="outline" className="w-full">
                      <FileText className="mr-2 h-4 w-4" /> Ver Todos os Relatórios
                    </Button>
                    <Button variant="outline" className="w-full">
                      <Settings className="mr-2 h-4 w-4" /> Configurações de Relatório
                    </Button>
                    <Button variant="outline" className="w-full">
                      <Lock className="mr-2 h-4 w-4" /> Gerenciar Acesso
                    </Button>
                  </CardContent>
                </Card>
                <Card className="col-span-2">
                  <CardHeader>
                    <CardTitle>Manutenção Programada</CardTitle>
                    <CardDescription>Manutenção agendada para seus clientes</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center">
                        <Car className="mr-2 h-4 w-4 text-muted-foreground" />
                        <div className="flex-1 space-y-1">
                          <p className="text-sm font-medium leading-none">Toyota Camry - Troca de Óleo</p>
                          <p className="text-sm text-muted-foreground">Em 3 dias</p>
                        </div>
                        <Button variant="outline" size="sm">
                          Lembrar
                        </Button>
                      </div>
                      <div className="flex items-center">
                        <Car className="mr-2 h-4 w-4 text-muted-foreground" />
                        <div className="flex-1 space-y-1">
                          <p className="text-sm font-medium leading-none">Ford F-150 - Rodízio de Pneus</p>
                          <p className="text-sm text-muted-foreground">Em 5 dias</p>
                        </div>
                        <Button variant="outline" size="sm">
                          Lembrar
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    )
  }

