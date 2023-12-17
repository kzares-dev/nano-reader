import { component$, Slot } from "@builder.io/qwik";
import Topbar from "~/components/topbar/topbar";

export default component$(() => {
  return (
    <div>
      <Topbar/>
      <Slot />
    </div>
  );
});

