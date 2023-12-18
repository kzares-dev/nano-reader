import { component$ } from "@builder.io/qwik";

import book from "~/assets/images/book.png"
import folder from "~/assets/images/folder.png"
import share from "~/assets/images/share.png"
import star from "~/assets/images/star.png";

export default component$(() => {

    return (
        <div class="w-[210px] h-screen bg-white border-r border-[20] -mt-[1px] border-t">

            <div class="flex w-full flex-col gap-5 px-3 pt-4 ">

                <div class="flex items-center gap-3 px-3 py-2 rounded cursor-pointer">
                    <img src={book} width={25} height={25} alt="" />
                    <span>Add Book</span>
                </div>

                <div class="flex items-center gap-3 px-3 py-2 rounded cursor-pointer ">
                    <img src={folder} width={25} height={25} alt="" />
                    <span>Library</span>
                </div>

                <div class="flex items-center gap-3 px-3 py-2 rounded cursor-pointer ">
                    <img src={star} width={25} height={25} alt="" />
                    <span>Favorite  </span>
                </div>

                <div class="flex items-center gap-3 px-3 py-2 rounded cursor-pointer ">
                    <img src={share} width={25} height={25} alt="" />
                    <span>Share</span>
                </div>

            </div>

        </div>
    )
})