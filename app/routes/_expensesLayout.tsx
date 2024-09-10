import { Outlet } from "@remix-run/react";

export default function ExpenseLayout() {
  return (
    <main>
      <h1 className="text-4xl">Common Layout</h1>
      <div className="bg-orange-500">
        <Outlet />
      </div>
    </main>
  );
}
