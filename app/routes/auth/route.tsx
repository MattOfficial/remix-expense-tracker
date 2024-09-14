import AuthForm from "./AuthForm";

export default function AuthenticationPage() {
  return <AuthForm />;
}

export function links() {
  return [{ rel: "stylesheet", href: "/app/styles/auth.css" }];
}
