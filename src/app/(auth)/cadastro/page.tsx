import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import RegisterForm from "./components/register-form"
import { auth } from "../../../../auth";
import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";

export default async function RegisterPage() {
  const session = await getServerSession();
  if(session){
    return redirect("/");
  }
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

