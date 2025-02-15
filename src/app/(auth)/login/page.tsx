import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import LoginForm from "./components/loginForm";
import { redirect } from "next/navigation";

export default async function LoginPage() {
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

