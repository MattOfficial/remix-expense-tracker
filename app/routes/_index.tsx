import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function HomePage() {
  return (
    <main>
      <h1 className="text-4xl">This is the home page.</h1>
    </main>
  );
}
