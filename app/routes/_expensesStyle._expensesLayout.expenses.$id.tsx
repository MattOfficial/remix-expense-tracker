import { LoaderFunctionArgs } from "@remix-run/node";
import { useNavigate } from "@remix-run/react";
import ExpenseForm from "~/components/expenses/ExpenseForm";
import Modal from "~/components/util/Modal";
import { getExpense } from "~/data/expenses.server";

export default function ExpenseDetailPage() {
  const navigate = useNavigate();

  return (
    <Modal onClose={() => navigate(-1)}>
      <ExpenseForm />
    </Modal>
  );
}

export async function loader({ params }: LoaderFunctionArgs) {
  const expenseId: string = params.id!;
  const expense = await getExpense(expenseId);
  return expense;
}
