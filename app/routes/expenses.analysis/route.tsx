import Chart from "./Chart";
import ExpenseStatistics from "./ExpenseStatistics";
import { ExpenseType } from "./types";

export const DUMMY_EXPENSE: ExpenseType[] = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14).toISOString(),
  },
  {
    id: "e2",
    title: "Burger",
    amount: 13.12,
    date: new Date(2020, 7, 10).toISOString(),
  },
];

export default function AnalysisPage() {
  return (
    <main>
      <Chart expenses={DUMMY_EXPENSE} />
      <ExpenseStatistics expenses={DUMMY_EXPENSE} />
    </main>
  );
}
