"use client";
import { useState } from "react";
import Cookies from "js-cookie"
import Image from "next/image";
import logo from '@/public/logo.svg'
import Link from "next/link";
import { user } from "@/lib";
import { useRouter } from "next/navigation";

function Signin() {

    // set up the next router to navigate between tabs
    const router = useRouter();

    const [userData, setUserData] = useState<{ email: string, password: string }>({
        email: "",
        password: "",
    })

    // signin function call the lib folder and send the data to server

    const signIn = (e: any) => {
        e.preventDefault();

        user.signin(userData)
            .then(res => {
                // setting the cookie for jwt auth & userId
                Cookies.set(`jwt`, res.data.access_token, { expires: 30, path: '/' });
                Cookies.set(`userId`, res.data.userId, { expires: 30, path: '/' });
                router.push('/')
            })
            .catch(err => console.log(err))
    };

    return (
        <div className="px-5 pt-[5vw] rounded-md border shadow md:min-w-[450px] bg-white h-full flex flex-col items-center gap-10 pb-10">

            <div className="flex items-center flex-row">
                <Image src={logo} alt="" width={100} height={100} />
                <h1 className='text-[30px] font-bold -ml-8 '>Sign-In ^w^</h1>
            </div>

            <form onSubmit={(e) => signIn(e)} className="w-full flex gap-5 flex-col">
                <input
                    value={userData.email}
                    onInput={(e: any) => setUserData({ ...userData, email: e.target.value.toString() })}
                    type="email"
                    className="w-full py-3 pl-4 rounded-md border"
                    placeholder="Email..."
                    required />

                <input
                    type="password"
                    value={userData.password}
                    onInput={(e: any) => setUserData({ ...userData, password: e.target.value.toString() })}
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
