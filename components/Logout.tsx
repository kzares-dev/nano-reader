"use client";

import Image from "next/image";
import logoutLogo from "@/public/logout.png"
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

function Logout() {

    const router = useRouter()

    const logout = () => {
        Cookies.remove("jwt");
        Cookies.remove("userId");

        router.push("/auth/signin")
    }

    return (
        <div onClick={logout} className="flex items-center gap-3 px-5 py-6 rounded cursor-pointer ">
            <Image src={logoutLogo} width={25} height={25} alt="" />
            <span>Logout</span>
        </div>

    )
}

export default Logout
