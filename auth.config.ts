import Spotify from "next-auth/providers/spotify";
import type { NextAuthConfig } from "next-auth";

export default {
  providers: [Spotify]
} satisfies NextAuthConfig;
