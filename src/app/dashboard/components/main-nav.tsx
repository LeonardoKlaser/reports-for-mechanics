"use client"
import Link from "next/link"
import type React from "react"
import { useState } from "react" 
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function MainNav({ className, ...props }: React.HTMLAttributes<HTMLElement>) {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <nav className={cn("flex items-center space-x-4 lg:space-x-6", className)} {...props}>
          <Button variant="ghost" size="sm" className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            <Menu className="h-5 w-5" />
          </Button>
          <div className={cn("flex-col items-start gap-2 md:flex-row md:items-center", isOpen ? "flex" : "hidden md:flex")}>
            <Link href="/dashboard" className="text-sm font-medium transition-colors hover:text-primary">
              Visão Geral
            </Link>
            <Link
              href="/dashboard/reports"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              Relatórios
            </Link>
            <Link
              href="/dashboard/clients"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              Clientes
            </Link>
            <Link
              href="/dashboard/settings"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              Configurações
            </Link>
          </div>
        </nav>
      )
    }