"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { toast } from "@/hooks/use-toast"
import Form from "next/form"
import { validateForm } from "./validations/validations"

// Server action to handle registration
async function registerUser(formData: FormData) {
  // salvar usuario no banco de dados aqui sepa
  console.log("Registering user:", Object.fromEntries(formData))

  return { success: true, message: "Registration successful!" }
}

export default function RegisterPage() {
  const [errors, setErrors] = useState<{ [key: string]: string }>({})
  const router = useRouter()


  const handleSubmit = async (formData: FormData) => {
    const response = validateForm(formData);
    if (response.success == true) {
      try {
        const result = await registerUser(formData)
        if (result.success) {
            toast({
            title: "Success",
            description: result.message,
          })
          router.push("/login") // após registrar manda para a pagina de login
        }
      } catch (error) {
        toast({
          title: "Error",
          description: "Registration failed. Please try again.",
          variant: "destructive",
        })
      }
    }else{
        setErrors(response.errors);
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Register</CardTitle>
          <CardDescription>Create a new account</CardDescription>
        </CardHeader>
        <CardContent>
          <Form action={handleSubmit}>
            <div className="space-y-4">
              <div>
                <Label htmlFor="name">Name</Label>
                <Input id="name" name="name" type="text" required />
                {errors.name && <p className="text-sm text-red-500">{errors.name}</p>}
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input id="email" name="email" type="email" required />
                {errors.email && <p className="text-sm text-red-500">{errors.email}</p>}
              </div>
              <div>
                <Label htmlFor="password">Password</Label>
                <Input id="password" name="password" type="password" required />
                {errors.password && <p className="text-sm text-red-500">{errors.password}</p>}
              </div>
            </div>
            <CardFooter className="flex justify-end mt-4 p-0">
              <Button type="submit">Register</Button>
            </CardFooter>
          </Form>
        </CardContent>
      </Card>
    </div>
  )
}

