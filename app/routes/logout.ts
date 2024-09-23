import { ActionFunctionArgs } from "@remix-run/node";
import { logout } from "~/data/auth.server";

export function action({ request }: ActionFunctionArgs) {
  if (request.method !== "POST") {
    throw new Error("Invalid request method");
  }

  return logout(request);
}
