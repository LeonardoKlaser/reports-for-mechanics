import { findUserByCredentials } from "@/lib/user";
import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials"

const authOptions = {
    providers: [
        Credentials({
            credentials:{
                email : {},
                name: {},
                password: {}
            },
            authorize: async(credentials)=>{
                console.log(credentials);

                //procura usuario, caso exista retorna ele, se nao retorna null 
                const user = await findUserByCredentials(credentials?.email as string, credentials?.password as string);
                return user;
            }
        })
    ]
}

export const auth = NextAuth(authOptions);
export const handlers = {GET: auth, POST: auth};
export {signIn, signOut} from "next-auth/react";