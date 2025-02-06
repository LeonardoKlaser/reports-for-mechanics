'use client'

import { signIn } from "../../../../../auth";


export default async function loginAction(_prevState: any, formData: FormData){
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    try{
        //await signin
        await signIn('credentials', {email, password, redirect: false});
        //se sucesso, redireciona home
        return{success: true};
    }catch(e){
        if(e.type === "CredentialsSignin"){
            return {success: false, message: "Dados do login incorretos"}
        };

        return{success: false, message: "Falha ao fazer login"}
       
    }
    
}