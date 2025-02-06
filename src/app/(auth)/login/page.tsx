"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { toast } from "@/hooks/use-toast"
import LoginForm from "./components/loginForm"

// Server action to handle login
async function loginUser(formData: FormData) {

  // Aqui verificar se informações batem com o banco
  console.log("Logging in user:", Object.fromEntries(formData))
  return { success: true, message: "Login successful!" }
}

export default function LoginPage() {
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const handleSubmit = async (formData: FormData) => {
    setIsLoading(true)
    try {
      const result = await loginUser(formData)
      if (result.success) {
        toast({
          title: "Success",
          description: result.message,
        })
        router.push("/dashboard") // Redireciona para a pagina de formularios
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Falha no Login. Por favor cheque suas credencias e tente novamente.",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Login</CardTitle>
          <CardDescription>Enter your credentials to access your account</CardDescription>
        </CardHeader>
        <CardContent>
          <LoginForm/>
        </CardContent>
      </Card>
    </div>
  )
}

