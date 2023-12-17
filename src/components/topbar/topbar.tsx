import { component$ } from "@builder.io/qwik"
import logo from "~/assets/images/logo.svg"
import { Button } from "../ui/button";

export default component$(() => {
    return (
        <div class=" shadow-sm border bg-white">
            <div class="px-4 py-5 pt-8 flex items-center flex-row gap-5 ">


                <div class="flex items-center justify-center gap-6 cursor-pointer">
                    <img src={logo} alt="" width={60} height={60} />
                    <h1 class="font-mono text-[20px] -ml-10 "> nano-reader </h1>

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

                        format

                    </div>

                </div>




            </div>
        </div>
    );
});
