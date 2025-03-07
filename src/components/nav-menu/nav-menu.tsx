'use client'
import Link from "next/link"
import { User, Home, Users, LogIn, LogOut, UserPlus, Settings } from "lucide-react"

import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { redirect } from "next/navigation";
import logoutAction from "@/app/(auth)/(logout)/logoutAction";
import { useSession } from "next-auth/react"
import { onDownload } from "@/actions/onDownload"
import { useToast } from "@/hooks/use-toast"

export function NavMenu() {
  const {data} = useSession();
  const {toast} = useToast();
  return (
    <nav className="flex items-center justify-between p-4 bg-navMenu">
      <div className="flex items-center space-x-5">
            <Link href="/" className="flex items-center space-x-2 text-white hover:text-gray-600">
            <Home className="w-5 h-5" />
            <span>Home</span>
            </Link>
            <Link href="" className="flex items-center space-x-2 text-white hover:text-gray-600">
            <Users className="w-5 h-5" />
            <span>Planos</span>
            </Link>
            <Link href="" className="flex items-center space-x-2 text-white hover:text-gray-600">
            <Users className="w-5 h-5" />
            <span>Sobre Nós</span>
            </Link>
            <Button onClick={() => {onDownload({userId: '12', documentId: "12"}, toast)}}>
              Teste PDF
            </Button>
            {data?.user && (
              <Button onClick={() => redirect("/dashboard")}>
                Dashboard
              </Button>
            )}
      </div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button className="bg-white" variant="ghost" size="icon">
            <User className="w-5 h-5" />
            <span className="sr-only">User menu</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          {data?.user ? (
            <>
              <DropdownMenuItem onClick={() => redirect('/accountPage')}>
                <Settings className="w-4 h-4 mr-2" />
                <span>Access Account</span>
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => logoutAction()}>
                <LogOut className="w-4 h-4 mr-2" />
                <span>Logout</span>
              </DropdownMenuItem>
            </>
          ) : (
            <>
              <DropdownMenuItem onClick={() => redirect('/login')}>
                <LogIn className="w-4 h-4 mr-2" />
                <span>Login</span>
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => redirect('/cadastro')}>
                <UserPlus className="w-4 h-4 mr-2" />
                <span>Register</span>
              </DropdownMenuItem>
            </>
          )}
        </DropdownMenuContent>
      </DropdownMenu>
    </nav>
  )
}