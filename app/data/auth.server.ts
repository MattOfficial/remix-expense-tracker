import pkg from "bcryptjs";
import { AuthCredentialType } from "~/types/authentication";
import { prisma } from "./database.server";
import { createCookieSessionStorage, redirect } from "@remix-run/node";

const SESSION_SECRET = process.env.SESSION_SECRET;

const sessionStorage = createCookieSessionStorage({
  cookie: {
    name: "__Secure-next-auth-session",
    maxAge: 60 * 60 * 24 * 30, // 30 days
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    secrets: [SESSION_SECRET || ""],
    sameSite: "lax",
  },
});

async function createUserSession(userId: string, redirectTo: string) {
  const session = await sessionStorage.getSession();
  session.set("userId", userId);
  return redirect(redirectTo, {
    headers: {
      "Set-Cookie": await sessionStorage.commitSession(session),
    },
  });
}

export async function signup({ email, password }: AuthCredentialType) {
  const { hash } = pkg;
  const existingUser = await prisma.user.findFirst({
    where: {
      email,
    },
  });
  if (existingUser) {
    throw new Error("User already exists. Try logging in.");
  }

  const passwordHash = await hash(password, 12);

  const user = await prisma.user.create({
    data: {
      email,
      password: passwordHash,
    },
  });
  return createUserSession(user.id, "/expenses");
}

export async function login({ email, password }: AuthCredentialType) {
  const { compare } = pkg;
  const existingUser = await prisma.user.findFirst({
    where: {
      email,
    },
  });

  // Adding a vague error message so people can't find out emails exist or not
  const loginError = new Error("Invalid email or password");

  if (!existingUser) {
    throw loginError;
  }

  const passwordMatch = await compare(password, existingUser.password);
  if (!passwordMatch) {
    throw loginError;
  }

  return createUserSession(existingUser.id, "/expenses");
}
