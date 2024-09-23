import { LoaderFunctionArgs } from "@remix-run/node";
import { Outlet } from "@remix-run/react";
import MainHeader from "~/components/navigation/MainHeader";
import { getUserFromSession } from "~/data/auth.server";

export default function MarketingLayout() {
  return (
    <>
      <MainHeader />
      <Outlet />
    </>
  );
}

export function loader({ request }: LoaderFunctionArgs) {
  return getUserFromSession(request);
}

export function links() {
  return [{ rel: "stylesheet", href: "/app/styles/marketing.css" }];
}
