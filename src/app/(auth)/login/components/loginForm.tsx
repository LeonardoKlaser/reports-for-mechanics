'use client'

import { CardFooter } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Form from "next/form"
import loginAction from "../actions/loginAction"
import { useActionState } from "react"

export default function LoginForm() {
  const [state, formAction, isPending] = useActionState(loginAction, null);
    return(
      <>
      {state?.success === false && (
          <div className="text-xs mb-6 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
            <strong className="font-bold">Erro!</strong>
            <br></br>
            <span className="block sm:inline">{state?.message}</span>
          </div>
      )}
        <Form action={formAction}>
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
              <Button type="submit">
                Login
              </Button>
            </CardFooter>
          </Form>
      </>
        
    )
}