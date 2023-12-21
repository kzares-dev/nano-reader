import { component$, Slot, useContextProvider, useStore } from "@builder.io/qwik";
import type { RequestHandler } from "@builder.io/qwik-city";
import jwt from 'jsonwebtoken'
import Sidebar from "~/components/sidebar/sidebar";
import Topbar from "~/components/topbar/topbar";
import { LayoutContext } from "~/context/layout-context";


export const onRequest: RequestHandler = async ({ cookie, redirect, url }) => {

  // load the cookie with the jwt token
  const token = cookie.get("jwt_access_token")?.value || ""
  console.log(token)

  // verify a token symmetric
  // ! Vulnerability: jwt secret should be in .env file
  jwt.verify(token, 'R2h8sPqJ4T9g3nF1', function (err, decoded) {

    // check if token is valid
    if (err) {
      cookie.delete('jwt_access_token')
      throw redirect(
        308,
        new URL('/auth/signin', url).toString()
      );
    }
    // decoded token
    console.log(decoded)


  });
}

export default component$(() => {
  const stateLayout = useStore({ type: false });

  useContextProvider(LayoutContext, stateLayout);

  return (
    <div class="min-h-screen bg-gray-50 w-full">
      <Topbar />

      <div class="flex flex-row">
        <Sidebar />
        <Slot />
      </div>
    </div>
  );
});

