'use server'
import { toast } from "@/hooks/use-toast";
import { validateForm } from "../validations/validations"
import db from "@/lib/db";
import {hashSync} from "bcrypt-ts"
import { Alert } from "@/components/ui/alert";
export default async function registerAction(formData: FormData) {
    const entries = Array.from(formData.entries());
    const data = Object.fromEntries(entries) as {
        name: string,
        email : string,
        password: string
    };

    console.log(data);

    if(!data.email || !data.name || !data.password){
        throw new Error("Preencha todos os campos");
    }

    //verifica se usuario exite
    const user = await db.user.findUnique({
        where:{
            email: data.email,
        },
    })
    if(user){
        throw new Error('Email ja cadastrado')
    }
    //se nao existe, cria
    await db.user.create({
        data:{
            email : data.email,
            name: data.name,
            password: hashSync(data.password),
        }
    })
}