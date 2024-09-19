import {
  Link,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useRouteError,
} from "@remix-run/react";
import Error from "./components/util/Error";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Rubik:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export function ErrorBoundary() {
  const error = useRouteError() as Error;

  return (
    <main>
      <Error title="An error occured">
        <p>{error?.message || "Something went wrong. Please try again."}</p>
        <p>
          Back to <Link to="/">safety</Link>.
        </p>
      </Error>
    </main>
  );
}

export function links() {
  return [
    { rel: "stylesheet", href: "/app/styles/shared.css" },
    {
      rel: "stylesheet",
      href: "/app/tailwind.css",
    },
  ];
}

export default function App() {
  return <Outlet />;
}
