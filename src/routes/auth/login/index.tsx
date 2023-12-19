import { $, component$, useStore } from "@builder.io/qwik";

export default component$(() => {

  const store = useStore({
    email: "",
    password: "",
  })

  const signIn = $(() => {
      
  })

  return (  

    <div class="h-full w-full justify-center items-center">
      <form onSubmit$={signIn} preventdefault:submit >
        <input
          value={store.email}
          onInput$={(ev: any) => (store.email = ev.target.value)}
          class="quik-input-src"
          type="text"
          placeholder="Email..."
        />

        <input
          value={store.password}
          onInput$={(ev: any) => (store.password = ev.target.value)}
          class="quik-input-src"
          type="text"
          placeholder="Password..."
        />
      </form>
    </div>
  )

})