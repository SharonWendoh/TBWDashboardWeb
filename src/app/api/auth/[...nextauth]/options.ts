import { Password } from "@mui/icons-material";
import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials"
import { signIn } from "next-auth/react";

export const options: NextAuthOptions = {
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials:{
                username: {
                    label: "Username",
                    type: "text",
                    placeholder: "John Doe"
                },
                password: {
                    label: "Password",
                    type: "password",
                    placeholder: "*******"
                }
            },
            async authorize(credentials){
                //This is where you can retrieve users from the database
                const user = { id: "42", name: "Sharon", password: "12345"}

                if (credentials?.username === user.name && credentials?.password === user.password){
                    return user
                } else {
                    return null
                }
            }
        }),
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
              username: {},
              password: {}
            },
            async authorize(credentials, req) {
              const res = await fetch("/your/endpoint", {
                method: 'POST',
                body: JSON.stringify(credentials),
                headers: { "Content-Type": "application/json" }
              })
              const user = await res.json()
        
              // If no error and we have user data, return it
              if (res.ok && user) {
                return user
              }
              // Return null if user data could not be retrieved
              return null
            }
          })
    ],
    // pages: {
    //     signIn: '/pages/Login'
    // }

}