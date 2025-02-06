'use client'

import { CardFooter } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Form from "next/form"
import loginAction from "../actions/loginAction"

export default function LoginForm() {
    return(
        <Form action={loginAction}>
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
    )
}