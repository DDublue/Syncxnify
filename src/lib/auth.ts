import NextAuth from "next-auth";
import {DrizzleAdapter} from '@auth/drizzle-adapter';
import { db } from "@/drizzle/db";
import authConfig from "../../auth.config";
import { getUserById } from "@/data/user";

export const { handlers, signIn, signOut, auth } = NextAuth({
  callbacks: {
    async session({ token, session }) {
      console.log({
        sessionToken: token,
      })
      if (token.sub && session.user) {
        session.user.id = token.sub;
      }

      if (token.role && session.user) {
        session.user.role = token.role;
      }

      return session;
    },
    async jwt({ token }) {
      if (!token.sub) {
        return token;
      }

      const existingUser = await getUserById(token.sub);
      if (!existingUser) {
        return token;
      }

      token.role = existingUser.role;

      return token;
    }
  },
  adapter: DrizzleAdapter(db),
  session: {strategy: "jwt"},
  pages: {
    signIn: "/login",
  },
  ...authConfig,
});
