import { redirect, useNavigate } from "@remix-run/react";
import { ActionFunctionArgs, LoaderFunctionArgs } from "@remix-run/node";
import Modal from "~/components/util/Modal";
import ExpenseForm from "~/components/expenses/ExpenseForm";
import { validateExpenseInput } from "~/data/validation.server";
import {
  deleteExpense,
  getExpense,
  updateExpense,
} from "~/data/expenses.server";
import { ExpenseType } from "~/types/expenses";
import { requireUserSession } from "~/data/auth.server";

export default function ExpenseDetailPage() {
  const navigate = useNavigate();

  return (
    <Modal onClose={() => navigate(-1)}>
      <ExpenseForm />
    </Modal>
  );
}

export async function loader({ request, params }: LoaderFunctionArgs) {
  const userId = await requireUserSession(request);
  const expenseId: string = params.id!;
  const expense = await getExpense(expenseId, userId);
  return expense;
}

export async function action({ params, request }: ActionFunctionArgs) {
  const expenseId = params.id!;

  if (request.method === "PATCH") {
    const formData = await request.formData();
    const expenseData: ExpenseType = {
      title: formData.get("title") as string,
      amount: +formData.get("amount")! as number,
      date: new Date(formData.get("date") as string),
    };

    try {
      validateExpenseInput(expenseData);
    } catch (error) {
      return error;
    }

    await updateExpense(expenseId, expenseData);
  } else if (request.method === "DELETE") {
    const deletedExpense = await deleteExpense(expenseId);
    console.log(deletedExpense);
  }
  return redirect("/expenses");
}
