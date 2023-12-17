import { component$, Slot } from "@builder.io/qwik";
import Sidebar from "~/components/sidebar/sidebar";
import Topbar from "~/components/topbar/topbar";

export default component$(() => {
  return (
    <div>
      <Topbar />

      <div class="flex flex-row bg-gray-50">
        <Sidebar />
        <Slot />
      </div>
    </div>
  );
});

