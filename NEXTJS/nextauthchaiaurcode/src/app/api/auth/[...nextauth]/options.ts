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
      // it is use for login (using credentials)
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
            return user; // it is return to
          }
        }
        return null;
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user, account, profile, isNewUser }) {
      if (user) {
        token._id = user._id?.toString();
        token.email = user.email;
      }
      return token;
    },
    async session({ session, token }) {
      return session;
    },
  },
  pages: {
    signIn: "/signin",
    signOut: "/signout",
  },
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
};
