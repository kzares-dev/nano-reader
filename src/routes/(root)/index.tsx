import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
//import { HeadInfo } from "~/components/head-info/head-info";

export default component$(() => {
  return (
    <div class="">
      
    </div>
  );
});

export const head: DocumentHead = {
  title: "ebook reader",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
