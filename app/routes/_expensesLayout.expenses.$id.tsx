import { useNavigate, useParams } from "@remix-run/react";
import ExpenseForm from "~/components/expenses/ExpenseForm";
import Modal from "~/components/util/Modal";

export default function ExpenseDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  console.log("id - ", id);

  return (
    <Modal onClose={() => navigate(-1)}>
      <ExpenseForm />
    </Modal>
  );
}
