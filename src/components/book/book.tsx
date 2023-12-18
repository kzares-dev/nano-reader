import { component$, useContext } from "@builder.io/qwik";

//dummy image
import banner from "~/assets/images/banner.jpg"
import { LayoutContext } from "~/context/layout-context";

export default component$(() => {

    const state = useContext(LayoutContext);

    if (state.type) {
        return (
            <div class="flex flex-col bg-white rounded-md border shadow w-full md:w-[250px] h-[300px] relative">
                <img src={banner} width={250} height={400} alt="" class="flex-1" />

                <div class="pl-1 absolute top-[100%]">
                    <h1 class="text-[20px] font-semibold font-sans text-gray-800 ">Data Structures and algorithms in JavaScript</h1>
                    <h2 class="text-[15px] font-thin font-sans text-gray-600 " >Leonar McOneil</h2>
                </div>

            </div>
        )
    } else return (
        <div class="flex flex-row border-b py-2 px-1 w-full  items-center justify-between">

            <div class="flex flex-row items-center gap-4 max-w-[300px] ">
                <div class="w-[50px] h-[60px]">
                    <img src={banner} class="flex-1 w-full h-full rounded-md shadow border" alt="" />
                </div>

                <h1 class="text-[15px] font-semibold font-sans text-gray-600 ">Data Structures and algorithms in JavaScript</h1>
            </div>

            <div class="flex flex-col pl-5 border-l">
                <h1>Author</h1>
                <h2 class="text-[15px] font-thin font-sans text-gray-600 " >Leonar McOneil</h2>

            </div >

            <div class=""></div>



        </div>)
})
