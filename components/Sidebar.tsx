
import book from "@/public/book.png"
import folder from "@/public/folder.png"
import share from "@/public/share.png"
import star from "@/public/star.png";
import Image from "next/image";
import { Button } from "./shared/Button";
import Link from "./shared/Link";

const Sidebar = () => {

    return (
        <div className="min-w-[210px] h-screen bg-white border-r border-[20] -mt-[1px] border-t">

            <div className="flex w-full flex-col gap-5 px-3 pt-4 ">

                <Link href="/">
                    <div className="flex items-center gap-3 px-3 py-2 rounded cursor-pointer ">
                        <Image src={folder} width={25} height={25} alt="" />
                        <span>Library</span>
                    </div>
                </Link>

                <Link href="/upload">
                    <div className="flex items-center gap-3 px-3 py-2 rounded cursor-pointer">
                        <Image src={book} width={25} height={25} alt="" />
                        <span>Add Book</span>
                    </div>
                </Link>

                <Link href="/favorites">
                    <div className="flex items-center gap-3 px-3 py-2 rounded cursor-pointer ">
                        <Image src={star} width={25} height={25} alt="" />
                        <span>Favorites</span>
                    </div>
                </Link>

                <div className="flex items-center gap-3 px-3 py-2 rounded cursor-pointer ">
                    <Image src={share} width={25} height={25} alt="" />
                    <span>Share</span>
                </div>

            </div>

        </div>
    )
}

export default Sidebar