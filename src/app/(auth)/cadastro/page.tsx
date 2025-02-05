import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import RegisterForm from "./components/register-form"


// Server action to handle registration
async function registerUser(formData: FormData) {
  // salvar usuario no banco de dados aqui sepa
  console.log("Registering user:", Object.fromEntries(formData))

  return { success: true, message: "Registration successful!" }
}

export default function RegisterPage() {
 
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-2xl">Cadastre-se</CardTitle>
          <CardDescription>Faça seu cadastro</CardDescription>
        </CardHeader>
        <CardContent>
          <RegisterForm />
        </CardContent>
      </Card>
    </div>
  )
}

