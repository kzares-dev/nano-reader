"use client";

import Image from "next/image"
import Link from "./shared/Link"
import { Button } from "./shared/Button"
import { useState } from "react"

import logo from '@/public/logo.svg'
import layout from '@/public/layout.png'
import list from '@/public/list.png'


function Topbar() {

    const [listLayout, setListLayout] = useState(false);

    return (
        <div className=" shadow-sm border bg-white">
            <div className="px-[20px] py-5 pt-8 flex items-center flex-row gap-5 ">

                <div className="flex items-center justify-center gap-6 cursor-pointer w-[189px] ">
                    <Image src={logo} alt="" width={60} height={60} />
                    <h1 className="font-mono text-[20px] -ml-11 "> nano-reader </h1>

                    <div className="h-[50px] w-[1px] bg-gray-400" />
                </div>


                <div className="flex flex-row gap-10 flex-1 justify-between pl-10" >
                    <div className="relative">
                        <div className="flex items-center justify-center gap-3  absolute ">
                            <Link href='/upload'>
                                <Button
                                    color="primary"
                                    label="Add Book"
                                />
                            </Link>
                            <Button
                                color="default"
                                label="Add Folder"
                            />
                        </div>
                    </div>



                    <div className="flex flex-row gap-5 ">
                        <div className="input-src items-center justify-center border">
                            <div className="text-[14px] font-bold bg-gray-50 px-2 py-1 text-center rounded-sm border">/</div>
                            <input type="text" placeholder="search in library" className="bg-gray-100 flex-1" />
                        </div>

                        <div className="flex px-3 flex-row gap-2 mt-1 ">

                            <div onClick={() => setListLayout(false)} className={`w-10 h-10 p-[10px] rounded-full border flex items-center justify-center {!state.type && "bg-gray-100"}`}>
                                <Image src={list} className="w-full h-full " alt="" />
                            </div>

                            <div onClick={() => setListLayout(true)} className={`w-10 h-10 p-[10px] rounded-full border flex items-center justify-center {state.type && "bg-gray-100"}`}>
                                <Image src={layout} className="w-full h-full " alt="" />
                            </div>
                        </div>

                    </div>

                </div>




            </div>
        </div>
    )
}

export default Topbar
