'use client'
import { Button } from "@/components/ui/button"
import { CardFooter } from "@/components/ui/card";
import Form from "next/form"
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useActionState } from "react";
import registerAction from "../{actions}/registerAction";

export default function RegisterForm(){
     const [state, formAction, isPending] = useActionState(registerAction, null);
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
                <div>
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" name="name" type="text" required />
                    {/* {errors.name && <p className="text-sm text-red-500">{errors.name}</p>} */}
                </div>
                <div>
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" name="email" type="email" required />
                    {/* {errors.email && <p className="text-sm text-red-500">{errors.email}</p>} */}
                </div>
                <div>
                    <Label htmlFor="password">Password</Label>
                    <Input id="password" name="password" type="password" required />
                    {/* {errors.password && <p className="text-sm text-red-500">{errors.password}</p>} */}
                </div>
                </div>
                <CardFooter className="flex justify-end mt-4 p-0">
                    <Button disabled={isPending} type="submit">Register</Button>
                </CardFooter>
            </Form>
        </>
        
    )
}
