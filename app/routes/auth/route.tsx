import authStyles from "~/styles/auth.css";

export default function AuthenticationPage() {
  return (
    <main>
      <h1 className="text-4xl">Authentication</h1>
    </main>
  );
}

export function links() {
  return [{ rel: "stylesheet", href: authStyles }];
}
