import { ExpenseType } from "~/routes/_expensesLayout.expenses.analysis/types";

export interface ExpenseListItemProps {
  expense: ExpenseType;
}

function ExpenseListItem({ expense }: ExpenseListItemProps) {
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
        <a href="tbd">Edit</a>
      </menu>
    </article>
  );
}

export default ExpenseListItem;
