import { Form, Link } from "@remix-run/react";
import { ExpenseType } from "~/types/expenses";

export interface ExpenseListItemProps {
  id: string;
  expense: ExpenseType;
}

function ExpenseListItem({ id, expense }: ExpenseListItemProps) {
  // async function deleteExpenseItemHandler() {
  //   const deleted = await deleteExpense(id);
  //   console.log(deleted);
  //   redirect("/expenses");
  // }

  return (
    <article className="expense-item">
      <div>
        <h2 className="expense-title">{expense?.title}</h2>
        <p className="expense-amount">${expense?.amount?.toFixed(2)}</p>
      </div>
      <menu className="expense-actions">
        {/* <button onClick={deleteExpenseItemHandler}>Delete</button> */}
        <Form method="delete" action={`/expenses/${id}`}>
          <button>Delete</button>
        </Form>
        <Link to={`/expenses/${id}`}>Edit</Link>
      </menu>
    </article>
  );
}

export default ExpenseListItem;
