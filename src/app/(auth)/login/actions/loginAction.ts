/* eslint-disable */
import {signIn} from "next-auth/react"



export default async function loginAction(_prevState: any, formData: FormData){
    debugger
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    try{
        const response = await signIn('credentials', {email, password, redirect: false});

        if(response?.error === "" || response?.error === null ){
            return{success: true};
        }else if(response?.error === "CredentialsSignin"){
            return {success: false, message: "Dados do login incorretos"}
        }    
    }catch(e:any){
        if(e.type === "CredentialsSignin"){
            return {success: false, message: "Dados do login incorretos"}
        };

        return{success: false, message: "Falha ao fazer login"}
       
    }
    
}