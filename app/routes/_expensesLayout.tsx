import { Outlet } from "@remix-run/react";
import expensesStyles from "~/styles/expenses.css";

export default function ExpenseLayout() {
  return (
    <main>
      <Outlet />
    </main>
  );
}

export function links() {
  return [{ rel: "stylesheet", href: expensesStyles }];
}
