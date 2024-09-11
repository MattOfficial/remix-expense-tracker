import { Link } from "@remix-run/react";
import { ExpenseType } from "~/types/expenses";

export interface ExpenseListItemProps {
  id: string;
  expense: ExpenseType;
}

function ExpenseListItem({ id, expense }: ExpenseListItemProps) {
  function deleteExpenseItemHandler() {
    // tbd
  }

  return (
    <article className="expense-item">
      <div>
        <h2 className="expense-title">{expense?.title}</h2>
        <p className="expense-amount">${expense?.amount?.toFixed(2)}</p>
      </div>
      <menu className="expense-actions">
        <button onClick={deleteExpenseItemHandler}>Delete</button>
        <Link to={`/expenses/${id}`}>Edit</Link>
      </menu>
    </article>
  );
}

export default ExpenseListItem;
