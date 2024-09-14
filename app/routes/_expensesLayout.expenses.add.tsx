import { useNavigate } from "@remix-run/react";
import ExpenseForm from "~/components/expenses/ExpenseForm";
import Modal from "~/components/util/Modal";

export default function AddExpensePage() {
  const navigate = useNavigate();

  return (
    <Modal onClose={() => navigate(-1)}>
      <ExpenseForm />
    </Modal>
  );
}
