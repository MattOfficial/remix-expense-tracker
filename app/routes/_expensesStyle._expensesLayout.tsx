import { Link, Outlet, useLoaderData } from "@remix-run/react";
import { FaDownload, FaPlus } from "react-icons/fa";
import ExpensesList from "~/components/expenses/ExpensesList";
import { getExpenses } from "~/data/expenses.server";
import { ExpenseType } from "~/types/expenses";

export default function ExpenseLayout() {
  const expenses: ExpenseType[] = useLoaderData();

  return (
    <>
      <Outlet />
      <main>
        <section id="expenses-actions">
          <Link to="/expenses/add">
            <FaPlus />
            <span>Add Expense</span>
          </Link>
          <a href="/expenses/raw">
            <FaDownload />
            <span>Load Raw Data</span>
          </a>
        </section>
        <ExpensesList expenses={expenses} />
      </main>
    </>
  );
}

export function loader() {
  return getExpenses();
}
