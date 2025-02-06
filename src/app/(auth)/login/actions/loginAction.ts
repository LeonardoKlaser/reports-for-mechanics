'use client'

import { signIn } from "../../../../../auth";


export default async function loginAction(formData: FormData){
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    //await signin
    await signIn('credentials', {email, password, redirect: false});
    //se sucesso, redireciona home
}