import { compareSync } from "bcrypt-ts";
import {db} from "./db";

type User = {
    email: string,
    password? : string,
    name: string
    id: string 
}
export async function findUserByCredentials(email: string, password: string) : Promise<User | null>{
    const user = await db.user.findFirst({
        where:{
            email : email,
        }
    })

    if(!user){
        return null
    }

    const passWordMatch = compareSync(password, user.password);

    if(passWordMatch){
        return {email: user.email, name: user.name, id: user.id.toString()};
    }
    return null
}