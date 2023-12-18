import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import bcrypt from 'bcrypt'

import prisma from "@/libs/prismaDb"
import NextAuth from "next-auth";

export default NextAuth({
    adapter: PrismaAdapter(prisma),
    providers: [
        CredentialsProvider({
            name: 'credencials',
            credentials: {
                email: { label: 'email', type: 'text' },
                password: { label: 'password', type: 'password' },
            },
            async authorize(credencials) {
                if (!credencials?.email || credencials?.password) {
                    throw new Error('Invalid credentials')
                }
                const user = await prisma.user.findUnique({
                    where: {
                        email: credencials.email
                    }
                })
                if (!user || !user.hashedPassword) {
                    throw new Error('Invalid credentials')
                }
                const isCorrectPassword = await bcrypt.compare(
                    credencials.password,
                    user.hashedPassword
                )
                if (!isCorrectPassword) {
                    throw new Error("Invalid credentials")
                }
                return user
            }
        })
    ],
    debug: process.env.NODE_ENV === "development",
    session: {
        strategy: 'jwt'
    },
    jwt: {
        secret: process.env.NEXTAUTH_JWT_SECRET,
    },
    secret: process.env.NEXTAUTH_SECRET
})
