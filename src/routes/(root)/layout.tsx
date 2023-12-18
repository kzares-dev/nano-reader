import { component$, Slot, useContextProvider, useStore } from "@builder.io/qwik";
import Sidebar from "~/components/sidebar/sidebar";
import Topbar from "~/components/topbar/topbar";
import { LayoutContext } from "~/context/layout-context";

export default component$(() => {
  const stateLayout = useStore({type: false});

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

