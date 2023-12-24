import { component$, Slot, useContextProvider, useStore } from "@builder.io/qwik";
import { routeLoader$, type RequestHandler } from "@builder.io/qwik-city";
import jwt from 'jsonwebtoken'
import Sidebar from "~/components/sidebar/sidebar";
import Topbar from "~/components/topbar/topbar";
import { LayoutContext } from "~/context/layout-context";
import { SessionContext } from "~/context/session.context";


export const onRequest: RequestHandler = async ({ cookie, redirect, url }) => {

  // load the cookie with the jwt token
  const token = cookie.get("jwt_access_token")?.value || ""

  // verify a token symmetric
  // ! Vulnerability: jwt secret should be in .env file
  jwt.verify(token, 'R2h8sPqJ4T9g3nF1', function (err) {

    // check if token is valid
    if (err) {
      cookie.delete('jwt_access_token')
      throw redirect(
        308,
        new URL('/auth/signin', url).toString()
      );
    }
  });
}

export const useSession = routeLoader$(async ({ cookie }) => {
  const token = cookie.get("jwt_access_token")?.value || "";

  const userData = jwt.verify(token, 'R2h8sPqJ4T9g3nF1', function (err, decoded: any) {
    console.log(err);
    // returning the user data captured in the token
    return {
      id: decoded.sub,
      email: decoded.email
    }
  })


  return userData
})

export default component$(() => {
  const session = useSession()

  // Loading the context providers
  // This allow global variables in root
  const stateLayout = useStore({ type: false });
  const sessionState = useStore({ id: session.value.id, email: session.value.email })

  console.log({session: sessionState})


  useContextProvider(LayoutContext, stateLayout);
  useContextProvider(SessionContext, sessionState)
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

