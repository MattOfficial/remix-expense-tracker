import { ActionFunctionArgs } from "@remix-run/node";
import AuthForm from "./AuthForm";
import { validateCredentials } from "~/data/validation.server";
import { AuthCredentialType } from "~/types/authentication";
import { login, signup } from "~/data/auth.server";

export default function AuthenticationPage() {
  return <AuthForm />;
}

export async function action({ request }: ActionFunctionArgs) {
  const searchParams = new URL(request.url).searchParams;
  const mode = searchParams.get("mode") || "login";

  const formData = await request.formData();
  const credentials = Object.fromEntries(formData);

  try {
    validateCredentials(credentials as unknown as AuthCredentialType);
  } catch (error) {
    return error;
  }

  if (mode === "login") {
    return await login(credentials as unknown as AuthCredentialType);
  } else {
    try {
      return await signup(credentials as unknown as AuthCredentialType);
    } catch (error) {
      return { credentials: (error as Error)?.message };
    }
  }
}

export function links() {
  return [{ rel: "stylesheet", href: "/app/styles/auth.css" }];
}
