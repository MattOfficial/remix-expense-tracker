import { ActionFunctionArgs } from "@remix-run/node";
import AuthForm from "./AuthForm";
import { validateCredentials } from "~/data/validation.server";
import { AuthCredentialType } from "~/types/authentication";

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
    // TODO: add login logic...
  } else {
    // TODO: add signup logic...
  }

  console.log(credentials);

  return null;
}

export function links() {
  return [{ rel: "stylesheet", href: "/app/styles/auth.css" }];
}
