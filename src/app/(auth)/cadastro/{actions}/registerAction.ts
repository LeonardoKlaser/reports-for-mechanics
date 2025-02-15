'use server'
import { toast } from "@/hooks/use-toast";
import { validateForm } from "../validations/validations"
import {db} from "@/lib/db";
import {hashSync} from "bcrypt-ts"
import { Alert } from "@/components/ui/alert";
import { error } from "console";
export default async function registerAction(_prevState: any, formData: FormData) {
    const entries = Array.from(formData.entries());
    const data = Object.fromEntries(entries) as {
        name: string,
        email : string,
        password: string
    };

    console.log(data);

    if(!data.email || !data.name || !data.password){
        return{
            message: "Preencha todos os campos",
            success: false,
        }
    }

    //verifica se usuario exite
    const user = await db.user.findUnique({
        where:{
            email: data.email,
        },
    })
    if(user){
        return{
            message: "Usuario já cadastrado",
            success: false,
        }
        
    }
    //se nao existe, cria
    await db.user.create({
        data:{
            email : data.email,
            name: data.name,
            password: hashSync(data.password),
        }
    })

    return{
        message: "Usuario cadastrado com sucesso",
        success: true,
    }
}