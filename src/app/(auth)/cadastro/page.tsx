import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import RegisterForm from "./components/register-form"
import { redirect } from "next/navigation";

export default async function RegisterPage() {
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

