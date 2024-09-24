import { LoaderFunctionArgs } from "@remix-run/node";
import { Outlet } from "@remix-run/react";
import ExpensesHeader from "~/components/navigation/expensesHeader";
import { requireUserSession } from "~/data/auth.server";
import { getExpenses } from "~/data/expenses.server";

export default function ExpenseLayout() {
  return (
    <>
      <ExpensesHeader />
      <Outlet />
    </>
  );
}

export async function loader({ request }: LoaderFunctionArgs) {
  const userId = await requireUserSession(request);
  return getExpenses(userId);
}

export function links() {
  return [{ rel: "stylesheet", href: "/app/styles/expenses.css" }];
}
