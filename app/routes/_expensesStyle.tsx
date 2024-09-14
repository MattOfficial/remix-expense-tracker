import { Outlet } from "@remix-run/react";

export default function ExpenseLayout() {
  return <Outlet />;
}

export function links() {
  return [{ rel: "stylesheet", href: "/app/styles/expenses.css" }];
}
