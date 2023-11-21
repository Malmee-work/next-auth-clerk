import NextAuth from "next-auth";
import type { NextAuthConfig } from "next-auth";
import { Provider } from "next-auth/providers";

const clerkProvider = {
  id: "clerkprovider",
  name: "Clerk",
  type: "oauth",
  version: "2.0",
  callbackUrl: `${process.env.NEXTAUTH_URL}${process.env.REDIRECT_PATH}`,
  authorization: {
    url: `${process.env.CLERK_AUTH_URL}`,
    params: { scope: "email profile" },
  },

  token: {
    url: `${process.env.CLERK_TOKEN_URL}`,
  },
  userinfo: {
    url: `${process.env.CLERK_USER_INFO_URL}`,
  },
  clientId: `${process.env.CLERK_CLIENT_ID}`,
  clientSecret: `${process.env.CLERK_SECRET_KEY}`,
} as Provider;
export const config = {
  providers: [clerkProvider],
} satisfies NextAuthConfig;

export const { handlers, auth, signIn, signOut } = NextAuth(config);
