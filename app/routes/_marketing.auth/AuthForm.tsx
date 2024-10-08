import {
  Form,
  Link,
  useActionData,
  useNavigation,
  useSearchParams,
} from "@remix-run/react";
import { FaLock, FaUserPlus } from "react-icons/fa";
import ValidationErrors from "~/components/validation/ValidationError";
import { FormValidationResponseType } from "~/types/validation";

export default function AuthForm() {
  const navigation = useNavigation();
  const [searchParams] = useSearchParams();
  const validationErrors: FormValidationResponseType | undefined =
    useActionData();

  const currentAuthMode = searchParams.get("mode") || "login";

  const isSubmitting = navigation.state === "submitting";

  const buttonText = currentAuthMode === "login" ? "Login" : "Create Account";
  const modeText =
    currentAuthMode === "login"
      ? "Create a new user"
      : "Login with existing user";
  return (
    <Form method="post" className="form" id="auth-form">
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
      {validationErrors && (
        <ValidationErrors validationErrors={validationErrors} />
      )}
      <div className="form-actions">
        <button disabled={isSubmitting}>
          {isSubmitting ? "Submitting..." : buttonText}
        </button>
        <Link to={`?mode=${currentAuthMode === "login" ? "signup" : "login"}`}>
          {modeText}
        </Link>
      </div>
    </Form>
  );
}
