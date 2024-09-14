import { Outlet } from "@remix-run/react";
import ExpensesList from "~/components/expenses/ExpensesList";
import { DUMMY_EXPENSE } from "./_expensesStyle.expenses.analysis/route";

export default function ExpenseLayout() {
  return (
    <>
      <Outlet />
      <main>
        <ExpensesList expenses={DUMMY_EXPENSE} />
      </main>
    </>
  );
}
