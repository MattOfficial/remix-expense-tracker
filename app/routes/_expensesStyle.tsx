import { Outlet } from "@remix-run/react";
import ExpensesHeader from "~/components/navigation/expensesHeader";
import { getExpenses } from "~/data/expenses.server";

export default function ExpenseLayout() {
  return (
    <>
      <ExpensesHeader />
      <Outlet />
    </>
  );
}

export function loader() {
  return getExpenses();
}

export function links() {
  return [{ rel: "stylesheet", href: "/app/styles/expenses.css" }];
}
