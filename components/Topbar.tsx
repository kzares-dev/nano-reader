"use client";

import Image from "next/image"
import Link from "./shared/Link"
import { Button } from "./shared/Button"
import { useEffect, useRef, useState } from "react"

import logo from '@/public/logo.svg'
import book from "@/public/book.png"
import folder from "@/public/folder.png"
import { useRecoilState } from "recoil";
import { searchAtom } from "@/atoms";
import star from "@/public/star.png";


function Topbar() {

    // Atoms handling the search and layout style 
    const [listLayout, setListLayout] = useState(false);
    const [search, setSearch] = useRecoilState(searchAtom);

    const searchRef = useRef<any>()

    useEffect(() => {
        window.addEventListener('keydown', (ev) => {
            if (ev.key === '/') {
                setTimeout(() => {
                    searchRef.current.focus();
                }, 1)
            }
        });

    }, []);

    return (
        <div className=" shadow-sm border bg-white absolute w-full">
            <div className="px-[20px] py-3 md:py-5 md:pt-8 flex items-center flex-row gap-5 ">

                <div className="flex items-center justify-center gap-6 cursor-pointer  md:w-[189px] ">
                    <Image src={logo} alt="" width={60} height={60}  />
                    <h1 className="font-mono text-[20px] -ml-11 hidden md:block"> nano-reader </h1>

                    <div className="h-[50px] md:w-[1px] bg-gray-400" />
                </div>


                <div className="flex flex-row gap-10 flex-1 justify-between pl-10" >
                    <div className="relative hidden lg:flex ">
                        <div className="flex items-center justify-center gap-3  absolute ">
                            <Link href='/upload'>
                                <Button
                                    color="primary"
                                    label="Add Book"
                                />
                            </Link>

                        </div>
                    </div>



                    <div className="flex flex-row gap-5 ">
                        <div className="input-src w-[200px] md:w-[300px] items-center justify-center border flex-1">
                            <div className="text-[14px] font-bold bg-gray-50 px-2 py-1 text-center rounded-sm border ">/</div>
                            <input
                                ref={searchRef}
                                value={search}
                                onChange={e => setSearch(e.target.value)}
                                type="text"
                                placeholder="search in library"
                                className="bg-gray-100 flex-1"
                            />
                        </div>

                        <div className="flex  px-3 flex-row gap-2 mt-1 ">

                            <Link href="/upload">
                                <div className={`cursor-pointer w-10 h-10 p-[10px] rounded-full border flex items-center justify-center {!state.type && "bg-gray-100"}`}>
                                    <Image src={book} className="w-full h-full " alt="" />
                                </div>
                            </Link>

                            <Link href="/">
                                <div className={`cursor-pointer w-10 h-10 p-[10px] rounded-full border flex items-center justify-center {state.type && "bg-gray-100"}`}>
                                    <Image src={folder} className="w-full h-full " alt="" />
                                </div>
                            </Link>

                            <Link href="/favorites" >
                                <div className={`cursor-pointer w-10 h-10 p-[10px] rounded-full border flex items-center justify-center {state.type && "bg-gray-100"}`}>
                                    <Image src={star} className="w-full h-full " alt="" />
                                </div>
                            </Link>

                        </div>

                    </div>

                </div>




            </div>
        </div>
    )
}

export default Topbar
