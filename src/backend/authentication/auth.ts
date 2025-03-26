import NextAuth, { NextAuthConfig } from "next-auth";
import {PrismaAdapter} from '@auth/prisma-adapter'
import {db} from "@/lib/db";
import Credentials from "next-auth/providers/credentials";
import { findUserByCredentials } from "@/lib/user";

export const {handlers: {GET, POST}, auth} = NextAuth({
    adapter: PrismaAdapter(db),
    debug : true,
    providers: [
        Credentials({
            credentials: {
                email : {},
                password: {}
            },
            authorize: async(credentials) =>{
                debugger
                const user = await findUserByCredentials(credentials?.email as string, credentials?.password as string);
                return user;
            }
        })
    ],
    session: {
        strategy: 'jwt',
    },
    secret: process.env.NEXTAUTH_SECRET,
    callbacks:{
        async session({session , user}){
            if(user){    
                session.user.id = user.id;
            }
            return session;
        },
        async jwt({token, user}){
            if(user){
                token.id = user.id
            }
            return token
        }
    }
} satisfies NextAuthConfig)
