'use client';

import { CardFooter } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Form from "next/form"
import loginAction from "../actions/loginAction"
import { useActionState } from "react"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { useToast } from "@/hooks/use-toast"
import { signIn } from "next-auth/react";

export default function LoginForm() {
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const {toast} = useToast();

  async function onSubmit(values: FormData){
    const email = values.get("email") as string;
    const password = values.get("password") as string;
    try{
      debugger;
      setLoading(true);
      const res = await loginAction(null, values);
      if(res?.success !== false){
        toast({
          description: "Usuário logado com sucesso!"
        })
        router.push("/dashboard");
      }else throw new Error();
    }catch{
      setError(true)
      toast({
        variant : "destructive",
        title: "Error",
        description: "Usuário ou senha inválido(s)"
      });
    }finally{
      setLoading(false);
    }
  }
  
    return(
      <>
      {error && (
          <div className="text-xs mb-6 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
            <strong className="font-bold">Erro!</strong>
            <br></br>
            <span className="block sm:inline">Falha ao fazer login</span>
          </div>
      )}
        <Form action={onSubmit}>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" name="email" type="email" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input id="password" name="password" type="password" required />
              </div>
            </div>
            <CardFooter className="flex justify-between items-center mt-6 px-0">
              <Link href="/forgot-password" className="text-sm text-blue-600 hover:underline">
                Forgot password?
              </Link>
              {loading && <p className="mt-4">Aguarde...</p>}
              {!loading && <Button type="submit">Entrar</Button>}
            </CardFooter>
          </Form>
      </>
        
    )
}