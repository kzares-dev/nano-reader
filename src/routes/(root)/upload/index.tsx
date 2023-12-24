import { $, component$, useContext, useStore } from "@builder.io/qwik";
import logo from '~/assets/images/logo.svg'
import { SessionContext } from "~/context/session.context";
import { FileType, file } from "~/lib";


export default component$(() => {

    const sessionContext = useContext(SessionContext);

    //create a store state to save the user collected data 
    const store = useStore<FileType>({
        title: "",
        author: "",
        fileUrl: "http://fileurl.com",
        imageUrl: "http://fileimageurl.com",
        userId: sessionContext.id,
    })


    const uploadFile = $(() => {

        file.uploadFile(store)
            .then(res => console.log(res))
            .catch(error => console.log(error))
    })
    return <section class='flex flex-row w-full'>

        <div class="px-5 pt-[5vw] rounded-md border shadow md:min-w-[450px] bg-white h-full flex flex-col items-center gap-10 pb-10">

            <div class="flex items-center flex-row">
                <img src={logo} alt="" width={100} height={100} />
                <h1 class='text-[30px] font-bold -ml-8 '>Upload File</h1>
            </div>

            <form onSubmit$={uploadFile} preventdefault:submit class="w-full flex gap-5 flex-col">
                <input
                    value={store.title}
                    onInput$={(ev: any) => (store.title = ev.target.value.toString())}

                    type="text"
                    class="w-full py-3 pl-4 rounded-md border"
                    placeholder="Set a title..."
                    required />

                <input
                    value={store.author}
                    onInput$={(ev: any) => (store.author = ev.target.value.toString())}
                    type="text"
                    class="w-full py-3 pl-4 rounded-md border"
                    placeholder="Author..."
                    required />



                <div class="w-full text-right pr-1 pt-5" >
                    <button type="submit" class="bg-black rounded-md px-5 py-2 text-white ">
                        Upload
                    </button>
                </div>
            </form>

        </div>

        <div class="flex items-center justify-center w-full h-full text-gray-100 font-bold">

            <input type="file" class="file:bg-gradient-to-b file:from-purple-500 file:to-purple-600 file:px-6 file:py-3 file:m-5 file:border-none file:rounded-lg file:text-white file:cursor-pointer file:shadow:lg file:shadow-blue-600/50 
            pr-3
            bg-gradient-to-br bg-white  text-black/80 rounded-md cursor-pointer border shadow-sm" />
        </div>

    </section>
})