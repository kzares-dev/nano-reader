import { $, component$, useStore } from "@builder.io/qwik";
//import { signIn } from "../auth";
import { Button } from "~/components/ui/button";
import { Link } from "@builder.io/qwik-city";
//import { signIn } from "~/auth/auth";


export default component$(() => {
  const store = useStore<{ email: string, password: string }>({
    email: "",
    password: "",
  })


  const signIn = $(() => {

  })

  return (
    <div
      class={"h-full w-full flex justify-center content-center items-center"}
    >
      <form preventdefault:submit onsubmit$={signIn}  >
        <div class={"flex flex-col gap-3 p-3"}>

          <input
            value={store.email}
            onInput$={(ev: any) => (store.email = ev?.target?.value)}
            class="qwik-input-src"
            type="text"
            placeholder="Email...."
          />

          <input
            value={store.password}
            onInput$={(ev: any) => (store.password = ev?.target?.value)}
            class="qwik-input-src"
            type="password"
            placeholder="Password...."
          />

          <div class="flex gap-2">
            <Button 
              label="Log in"
              color="primary"
            />

            <Link>
              <Button label="Cancel" color="default" />
            </Link>
          </div>

        </div>
      </form>
    </div>
  );
});
