import {
  Form,
  Link,
  useActionData,
  useLoaderData,
  useNavigation,
} from "@remix-run/react";
import { ExpenseType } from "~/types/expenses";
import { FormValidationResponseType } from "~/types/validation";

export default function ExpenseForm() {
  const today = new Date().toISOString().slice(0, 10); // yields something like 2023-09-10

  const validationErrors: FormValidationResponseType | undefined =
    useActionData();

  const expense: ExpenseType | undefined = useLoaderData();

  const defaultValues = {
    title: expense?.title || "",
    amount: expense?.amount || "",
    date: expense?.date
      ? new Date(expense.date).toISOString().slice(0, 10)
      : "",
  };

  const navigation = useNavigation();
  const isSubmitting = navigation.state !== "idle";

  return (
    <Form
      method={expense ? "PATCH" : "POST"}
      className="form"
      id="expense-form"
    >
      <p>
        <label htmlFor="title">Expense Title</label>
        <input
          type="text"
          id="title"
          name="title"
          required
          maxLength={30}
          defaultValue={defaultValues.title}
        />
      </p>

      <div className="form-row">
        <p>
          <label htmlFor="amount">Amount</label>
          <input
            type="number"
            id="amount"
            name="amount"
            min="0"
            step="0.01"
            required
            defaultValue={defaultValues.amount}
          />
        </p>
        <p>
          <label htmlFor="date">Date</label>
          <input
            type="date"
            id="date"
            name="date"
            max={today}
            required
            defaultValue={defaultValues.date}
          />
        </p>
      </div>
      {validationErrors && (
        <ul>
          {Object.values(validationErrors).map((error) => (
            <li key={error}>{error}</li>
          ))}
        </ul>
      )}
      <div className="form-actions">
        <button disabled={isSubmitting}>
          {isSubmitting ? `Saving...` : `Save Expense`}
        </button>
        <Link to="/expenses">Cancel</Link>
      </div>
    </Form>
  );
}
