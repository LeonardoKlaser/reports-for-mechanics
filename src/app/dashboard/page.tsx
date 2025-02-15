import type { Metadata } from "next"
import Image from "next/image"
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
    <>
      <div className="md:hidden">
        <Image
          src="/examples/dashboard-light.png"
          width={1280}
          height={866}
          alt="Dashboard"
          className="block dark:hidden"
        />
        <Image
          src="/examples/dashboard-dark.png"
          width={1280}
          height={866}
          alt="Dashboard"
          className="hidden dark:block"
        />
      </div>
      <div className="hidden flex-col md:flex">
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
        <div className="flex-1 space-y-4 p-8 pt-6">
          <div className="flex items-center justify-between space-y-2">
            <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
            <div className="flex items-center space-x-2">
              <CalendarDateRangePicker />
              <Button>
                <Download className="mr-2 h-4 w-4" />
                Download Reports
              </Button>
            </div>
          </div>
          <Tabs defaultValue="overview" className="space-y-4">
            <TabsList>
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="analytics" disabled>
                Analytics
              </TabsTrigger>
              <TabsTrigger value="reports">Reports</TabsTrigger>
              <TabsTrigger value="notifications">Notifications</TabsTrigger>
            </TabsList>
            <TabsContent value="overview" className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Total Reports</CardTitle>
                    <FileText className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">245</div>
                    <p className="text-xs text-muted-foreground">+20% from last month</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Active Clients</CardTitle>
                    <Users className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">42</div>
                    <p className="text-xs text-muted-foreground">+15% from last month</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Revenue</CardTitle>
                    <DollarSign className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">$5,231</div>
                    <p className="text-xs text-muted-foreground">+10% from last month</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Active Subscriptions</CardTitle>
                    <CreditCard className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">38</div>
                    <p className="text-xs text-muted-foreground">+7 since last month</p>
                  </CardContent>
                </Card>
              </div>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                <Card className="col-span-4">
                  <CardHeader>
                    <CardTitle>Overview</CardTitle>
                  </CardHeader>
                  <CardContent className="pl-2">
                    <Overview />
                  </CardContent>
                </Card>
                <Card className="col-span-3">
                  <CardHeader>
                    <CardTitle>Recent Reports</CardTitle>
                    <CardDescription>You have generated 12 reports this month.</CardDescription>
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
                    <CardTitle>Quick Actions</CardTitle>
                  </CardHeader>
                  <CardContent className="grid gap-4 md:grid-cols-2">
                    <Button className="w-full">
                      <Plus className="mr-2 h-4 w-4" /> New Report
                    </Button>
                    <Button variant="outline" className="w-full">
                      <FileText className="mr-2 h-4 w-4" /> View All Reports
                    </Button>
                    <Button variant="outline" className="w-full">
                      <Settings className="mr-2 h-4 w-4" /> Report Settings
                    </Button>
                    <Button variant="outline" className="w-full">
                      <Lock className="mr-2 h-4 w-4" /> Manage Access
                    </Button>
                  </CardContent>
                </Card>
                <Card className="col-span-2">
                  <CardHeader>
                    <CardTitle>Upcoming Maintenance</CardTitle>
                    <CardDescription>Scheduled maintenance for your clients</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center">
                        <Car className="mr-2 h-4 w-4 text-muted-foreground" />
                        <div className="flex-1 space-y-1">
                          <p className="text-sm font-medium leading-none">Toyota Camry - Oil Change</p>
                          <p className="text-sm text-muted-foreground">Due in 3 days</p>
                        </div>
                        <Button variant="outline" size="sm">
                          Remind
                        </Button>
                      </div>
                      <div className="flex items-center">
                        <Car className="mr-2 h-4 w-4 text-muted-foreground" />
                        <div className="flex-1 space-y-1">
                          <p className="text-sm font-medium leading-none">Ford F-150 - Tire Rotation</p>
                          <p className="text-sm text-muted-foreground">Due in 5 days</p>
                        </div>
                        <Button variant="outline" size="sm">
                          Remind
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
    </>
  )
}

