import { Link, useLoaderData, useRouteError } from "@remix-run/react";
import Chart from "./Chart";
import ExpenseStatistics from "./ExpenseStatistics";
import ErrorComponent from "~/components/util/Error";
import { loader as expenseLoader } from "~/routes/_expensesStyle";
import { ExpenseType } from "~/types/expenses";

export const loader = expenseLoader;

export default function AnalysisPage() {
  const expenses: ExpenseType[] = useLoaderData();

  if (!expenses || expenses.length === 0) {
    throw new Error("No expenses found. Please add some to start analysis.");
  }

  return (
    <main>
      <Chart expenses={expenses} />
      <ExpenseStatistics expenses={expenses} />
    </main>
  );
}

export function ErrorBoundary() {
  const error = useRouteError() as Error;

  return (
    <main>
      <ErrorComponent title="An error occured">
        <p>{error?.message || "Something went wrong. Please try again."}</p>
        <p>
          Back to <Link to="/">safety</Link>.
        </p>
      </ErrorComponent>
    </main>
  );
}
