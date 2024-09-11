import ExpenseListItem from "./ExpenseListItem";
import { ExpenseType } from "~/types/expenses";

export interface ExpensesListProps {
  expenses: ExpenseType[];
}

function ExpensesList({ expenses }: ExpensesListProps) {
  return (
    <ol id="expenses-list">
      {expenses.map((expense) => (
        <li key={expense.id}>
          <ExpenseListItem id={expense.id} expense={expense} />
        </li>
      ))}
    </ol>
  );
}

export default ExpensesList;
