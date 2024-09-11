import { useParams } from "@remix-run/react";
import ExpenseForm from "~/components/expenses/ExpenseForm";

export default function ExpenseDetailPage() {
  const { id } = useParams();

  console.log("id - ", id);

  return <ExpenseForm />;
}
