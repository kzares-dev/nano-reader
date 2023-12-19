import { component$, Slot, useContextProvider, useStore } from "@builder.io/qwik";
import type { RequestHandler } from "@builder.io/qwik-city";
import Sidebar from "~/components/sidebar/sidebar";
import Topbar from "~/components/topbar/topbar";
import { LayoutContext } from "~/context/layout-context";

export const onGet: RequestHandler = ({ cookie, redirect, url }) => {
  const currentToken = cookie.get("mytoken")?.value

  if (currentToken !== 'TOKEN_SESSION_123') {
    throw redirect(
      308,
      new URL('/auth/login', url).toString()
    );
  }
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

