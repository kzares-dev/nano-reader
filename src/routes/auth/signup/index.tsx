import { $, component$, useStore } from "@builder.io/qwik";
import Cookie from "js-cookie"
import { user } from "~/lib";
import logo from '~/assets/images/logo.svg'
import { Link } from "@builder.io/qwik-city";

export default component$(() => {

  const store = useStore({
    email: "",
    password: "",
  })

  const signIn = $(() => {
    user.signup(store)
      .then(res => {
        alert(res.data.access_token)
        Cookie.set("jwt_access_token", res.data.access_token, { expires: 7, path: '/' });
        // ! navigation not working should be implemented here
        

      })
      .catch(err => alert(err))
  })

  return (

    <div class="px-5 pt-[5vw] rounded-md border shadow md:min-w-[450px] bg-white h-full flex flex-col items-center gap-10 pb-10">

      <div class="flex items-center flex-row">
        <img src={logo} alt="" width={100} height={100} />
        <h1 class='text-[30px] font-bold -ml-8 '>Sign-Up {'>w>'}</h1>
      </div>

      <form onSubmit$={signIn} preventdefault:submit class="w-full flex gap-5 flex-col">
        <input
          value={store.email}
          onInput$={(ev: any) => (store.email = ev.target.value.toString())}
          type="email"
          class="w-full py-3 pl-4 rounded-md border"
          placeholder="Email..."
          required />

        <input
          type="password"
          value={store.password}
          onInput$={(ev: any) => (store.password = ev.target.value.toString())}
          class="w-full py-3 pl-4 rounded-md border"
          placeholder="Password..."
          required />



        <Link href="/auth/signin" class="underline text-[15px] font-nano text-gray-500 cursor-pointer mt-5" > You have an account? </Link>



        <div class="w-full text-right pr-1 pt-5" >
          <button type="submit" class="bg-black rounded-md px-5 py-2 text-white ">
            Sign In
          </button>
        </div>
      </form>

    </div>
  )

})