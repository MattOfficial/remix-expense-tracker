import { Link, useFetcher } from "@remix-run/react";
import { ExpenseType } from "~/types/expenses";

export interface ExpenseListItemProps {
  id: string;
  expense: ExpenseType;
}

function ExpenseListItem({ id, expense }: ExpenseListItemProps) {
  // const submit = useSubmit();
  const fetcher = useFetcher();

  async function deleteExpenseItemHandler() {
    // submit(null, { method: "delete", action: `/expenses/${id}` });
    const isConfirmed = confirm(
      "Are you sure? Do you want to delete this item?"
    );
    if (!isConfirmed) return;
    fetcher.submit(null, { method: "delete", action: `/expenses/${id}` });
  }

  if (fetcher.state !== "idle") {
    return (
      <article className="expense-item locked">
        <p>Deleting...</p>
      </article>
    );
  }

  return (
    <article className="expense-item">
      <div>
        <h2 className="expense-title">{expense?.title}</h2>
        <p className="expense-amount">${expense?.amount?.toFixed(2)}</p>
      </div>
      <menu className="expense-actions">
        <button onClick={deleteExpenseItemHandler}>Delete</button>
        {/* <Form method="delete" action={`/expenses/${id}`}>
          <button>Delete</button>
        </Form> */}
        <Link to={`/expenses/${id}`}>Edit</Link>
      </menu>
    </article>
  );
}

export default ExpenseListItem;
