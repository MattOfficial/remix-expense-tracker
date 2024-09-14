import { Outlet } from "@remix-run/react";
import ExpensesHeader from "~/components/navigation/expensesHeader";

export default function ExpenseLayout() {
  return (
    <>
      <ExpensesHeader />
      <Outlet />
    </>
  );
}

export function links() {
  return [{ rel: "stylesheet", href: "/app/styles/expenses.css" }];
}
