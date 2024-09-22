import pkg from "bcryptjs";
import { AuthCredentialType } from "~/types/authentication";
import { prisma } from "./database.server";

export async function signup({ email, password }: AuthCredentialType) {
  const { hash } = pkg;
  const existingUser = await prisma.user.findFirst({
    where: {
      email,
    },
  });
  if (existingUser) {
    throw new Error("User already exists for this email.");
  }

  const passwordHash = await hash(password, 12);

  await prisma.user.create({
    data: {
      email,
      password: passwordHash,
    },
  });
}
