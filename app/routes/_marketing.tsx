import { Outlet } from "@remix-run/react";
import MainHeader from "~/components/navigation/MainHeader";

export default function MarketingLayout() {
  return (
    <>
      <MainHeader />
      <Outlet />
    </>
  );
}

export function links() {
  return [{ rel: "stylesheet", href: "/app/styles/marketing.css" }];
}
