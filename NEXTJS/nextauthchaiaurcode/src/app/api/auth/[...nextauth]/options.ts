import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";

import { User } from "../../../../model/User";
import connectDB from "@/lib/db";
connectDB();

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      id: "credentials",
      name: "credentials",
      credentials: {
        email: { label: "email", type: "text", placeholder: "your name" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials: any): Promise<any> {
        const user = await User.findOne({
          email: credentials.identifier.email,
        });

        if (user) {
          const isPasswordMatch = await bcrypt.compare(
            credentials.password,
            user.password
          );
          if (isPasswordMatch) {
            return user;
          }
        }
        return null;
      },
    }),
  ],
};
