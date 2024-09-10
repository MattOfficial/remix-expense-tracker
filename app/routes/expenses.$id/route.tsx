import { useParams } from "@remix-run/react";

export default function ExpenseDetail() {
  const { id } = useParams();

  return (
    <main>
      <h1 className="text-4xl">Expense detail page for id: {id}</h1>
    </main>
  );
}
