import { findUserByCredentials } from "@/lib/user";
import { User } from "@prisma/client";
import { getServerSession, type DefaultSession, type NextAuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";
// import {LoginHandler} from "../user/LoginHandler";
// import {UserRepositoryMemory} from "../user/userRepositoryMemory";

declare module "next-auth"{
    interface Session extends DefaultSession{
        user: User;
    }
}

// export type User = {
//     id: string;
// } & DefaultSession["user"];

export const authOptions: NextAuthOptions = {
    session: {
        strategy: "jwt",
    },
    callbacks: {
        session: ({session, token}) =>{
            debugger;
            return{
                ...session,
                user: {
                    ...session.user,
                    id: token.sub,
                },
            };
        },
    },
    pages: {
        signIn: "/login"
    },
    providers:[
        Credentials({
            credentials:{
                email : {},
                name: {},
                password: {}
            },
            authorize: async(credentials) =>{
                debugger;
                console.log("credentials", credentials)
                
                // debugger;
                // if(!credentials?.email || !credentials.password){
                //     return null;
                // }
                //procura usuario, caso exista retorna ele, se nao retorna null
                const usuario = await findUserByCredentials(credentials?.email as string, credentials?.password as string);
                return usuario;
                
            }
        })
    ] 
};

export const getServerAuthSession = () => getServerSession(authOptions);
