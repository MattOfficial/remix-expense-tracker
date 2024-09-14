import { LoaderFunctionArgs } from "@remix-run/node";

export function loader({ params }: LoaderFunctionArgs) {
  console.log(params["*"]);
  throw new Response("Not Found", {
    status: 404,
  });
}
