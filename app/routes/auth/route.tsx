import AuthForm from "./AuthForm";
import authStyles from "~/styles/auth.css";

export default function AuthenticationPage() {
  return <AuthForm />;
}

export function links() {
  return [{ rel: "stylesheet", href: authStyles }];
}
