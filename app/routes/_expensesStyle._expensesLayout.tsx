import { Link, Outlet, useLoaderData } from "@remix-run/react";
import { FaDownload, FaPlus } from "react-icons/fa";
import ExpensesList from "~/components/expenses/ExpensesList";
import { loader as expenseLoader } from "~/routes/_expensesStyle";
import { ExpenseType } from "~/types/expenses";

export const loader = expenseLoader;

export default function ExpenseLayout() {
  const expenses: ExpenseType[] = useLoaderData();

  const hasExpenses = expenses && expenses.length > 0;

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
        {hasExpenses ? (
          <ExpensesList expenses={expenses} />
        ) : (
          <section id="no-expenses">
            <h1>No expenses found</h1>
            <p>
              Start by <Link to="/expenses/add">adding some</Link> expenses!
            </p>
          </section>
        )}
      </main>
    </>
  );
}
