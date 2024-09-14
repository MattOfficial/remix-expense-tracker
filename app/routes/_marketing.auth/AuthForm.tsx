import { Link, useSearchParams } from "@remix-run/react";
import { FaLock, FaUserPlus } from "react-icons/fa";

export default function AuthForm() {
  const [searchParams] = useSearchParams();
  const currentAuthMode = searchParams.get("mode") || "login";

  const buttonText = currentAuthMode === "login" ? "Login" : "Create Account";
  const modeText =
    currentAuthMode === "login"
      ? "Create a new user"
      : "Login with existing user";
  return (
    <form method="post" className="form" id="auth-form">
      <div className="icon-img">
        {currentAuthMode === "login" ? <FaLock /> : <FaUserPlus />}
      </div>
      <p>
        <label htmlFor="email">Email Address</label>
        <input type="email" id="email" name="email" required />
      </p>
      <p>
        <label htmlFor="password">Password</label>
        <input type="password" id="password" name="password" minLength={7} />
      </p>
      <div className="form-actions">
        <button>{buttonText}</button>
        <Link to={`?mode=${currentAuthMode === "login" ? "signup" : "login"}`}>
          {modeText}
        </Link>
      </div>
    </form>
  );
}
