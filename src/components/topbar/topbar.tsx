import { $, component$, useContext } from "@builder.io/qwik"
import { Button } from "../ui/button";

import logo from "~/assets/images/logo.svg"
import list from "~/assets/images/list.png"
import layout from "~/assets/images/layout.png";
import { LayoutContext } from "~/context/layout-context";



export default component$(() => {

    const state = useContext(LayoutContext);

    const setState = $(
        (newState: boolean) => {
            state.type = newState
        }
    )

    return (
        <div class=" shadow-sm border bg-white">
            <div class="px-[20px] py-5 pt-8 flex items-center flex-row gap-5 ">


                <div class="flex items-center justify-center gap-6 cursor-pointer w-[189px] ">
                    <img src={logo} alt="" width={60} height={60} />
                    <h1 class="font-mono text-[20px] -ml-11 "> nano-reader </h1>

                    <div class="h-[50px] w-[1px] bg-gray-400" />
                </div>


                <div class="flex flex-row gap-10 flex-1 justify-between pl-10" >
                    <div class="relative">
                        <div class="flex items-center justify-center gap-3  absolute ">
                            <Button
                                color="primary"
                                label="Add Book"
                            />
                            <Button
                                color="default"
                                label="Add Folder"
                            />
                        </div>
                    </div>



                    <div class="flex flex-row gap-5 ">
                        <div class="qwik-input-src items-center justify-center border">
                            <div class="text-[14px] font-bold bg-gray-50 px-2 py-1 text-center rounded-sm border">/</div>
                            <input type="text" placeholder="search in library" class="bg-gray-100 flex-1" />
                        </div>

                        <div class="flex px-3 flex-row gap-2 mt-1 ">

                            <div onClick$={() => setState(false)} class={`w-10 h-10 p-[10px] rounded-full border flex items-center justify-center ${!state.type && "bg-gray-100" }`}>
                                <img src={list} class="w-full h-full " alt="" />
                            </div>

                            <div onClick$={() => setState(true)} class={`w-10 h-10 p-[10px] rounded-full border flex items-center justify-center ${state.type && "bg-gray-100" }`}>
                                <img src={layout} class="w-full h-full " alt="" />
                            </div>
                        </div>

                    </div>

                </div>




            </div>
        </div>
    );
});
