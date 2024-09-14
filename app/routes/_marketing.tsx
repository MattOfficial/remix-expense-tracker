import { Outlet } from "@remix-run/react";

export default function MarketingLayout() {
  return <Outlet />;
}

export function links() {
  return [{ rel: "stylesheet", href: "/app/styles/marketing.css" }];
}
