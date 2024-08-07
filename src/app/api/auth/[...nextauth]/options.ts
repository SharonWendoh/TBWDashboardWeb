import { Password } from "@mui/icons-material";
import { sql } from "@vercel/postgres";
import { compare } from "bcrypt";
import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials"
import { signIn } from "next-auth/react";

export const options: NextAuthOptions = {
    session: {
        strategy: "jwt"
    },
    providers: [
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
              username: {},
              password: {}
            },
            async authorize(credentials, req) {
                console.log({credentials})
                const response = await sql`
                SELECT * FROM users WHERE username=${credentials?.username}`;
                const user = response.rows[0];

                const passwordCorrect = await compare(
                    credentials?.password || '',
                    user.password
                );

                if(passwordCorrect){
                    return {
                        id: user.id,
                        username: user.username
                    }
                }
                return null;
            }
        })
    ],
    // pages: {
    //     signIn: '/pages/Login'
    // }

}