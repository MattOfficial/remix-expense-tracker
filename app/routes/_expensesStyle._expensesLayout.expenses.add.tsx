import { useNavigate } from "@remix-run/react";
import { redirect, ActionFunctionArgs } from "@remix-run/node";

import Modal from "~/components/util/Modal";
import ExpenseForm from "~/components/expenses/ExpenseForm";

import { addExpense } from "~/data/expenses.server";
import { ExpenseType } from "~/types/expenses";

export default function AddExpensePage() {
  const navigate = useNavigate();

  return (
    <Modal onClose={() => navigate(-1)}>
      <ExpenseForm />
    </Modal>
  );
}

export async function action({ request }: ActionFunctionArgs) {
  const formData = await request.formData();
  const expenseData: ExpenseType = {
    title: formData.get("title") as string,
    amount: +formData.get("amount")! as number,
    date: new Date(formData.get("date") as string),
  };
  await addExpense(expenseData);
  return redirect("/expenses");
}
