import NextAuth from "next-auth";
import {DrizzleAdapter} from '@auth/drizzle-adapter';
import { db } from "@/drizzle/db";
import authConfig from "../../auth.config";

export const { handlers, signIn, signOut, auth } = NextAuth({
  ...authConfig,
  adapter: DrizzleAdapter(db),
  session: {strategy: "jwt"},
  pages: {
    signIn: "/login",
  },
  callbacks: {
    // authorized: async ({ auth }) => {
    //   return !!auth;
    // },
  },
});
