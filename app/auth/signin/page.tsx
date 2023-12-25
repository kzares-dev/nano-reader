"use client";
import { useState } from "react";
import Image from "next/image";
import logo from '@/public/logo.svg'
import Link from "next/link";

function Signin() {
    const [userData, setUserData] = useState<{ email: string, password: string }>({
        email: "",
        password: "",
    })

    // signin function call the lib folder and send the data to server
    // TODO: signin funcionality

    const signIn = () => {

    };

    return (
        <div className="px-5 pt-[5vw] rounded-md border shadow md:min-w-[450px] bg-white h-full flex flex-col items-center gap-10 pb-10">

            <div className="flex items-center flex-row">
                <Image src={logo} alt="" width={100} height={100} />
                <h1 className='text-[30px] font-bold -ml-8 '>Sign-In ^w^</h1>
            </div>

            <form onSubmit={signIn} className="w-full flex gap-5 flex-col">
                <input
                    value={userData.email}
                    onInput={(e: any) =>  setUserData({...userData, email: e.target.value.toString()}) }
                    type="email"
                    className="w-full py-3 pl-4 rounded-md border"
                    placeholder="Email..."
                    required />

                <input
                    type="password"
                    value={userData.password}
                    onInput={(e: any) =>  setUserData({...userData, password: e.target.value.toString()})}
                    className="w-full py-3 pl-4 rounded-md border"
                    placeholder="Password..."
                    required />



                <Link href="/auth/signup" className="underline text-[15px] font-nano text-gray-500 cursor-pointer mt-5" > Have no account? </Link>



                <div className="w-full text-right pr-1 pt-5" >
                    <button type="submit" className="bg-black rounded-md px-5 py-2 text-white ">
                        Sign In
                    </button>
                </div>
            </form>

        </div>
    )
}

export default Signin
