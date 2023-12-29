"use client";
import { useState } from "react";
import Image from "next/image";
import { file as fileRequest } from "@/lib";
//dummy image
import banner from "@/public/banner.jpg"
import star from "@/public/star.png"
import starFill from "@/public/star-filled.png"
import Link from "next/link";
import { FileIcon } from "lucide-react"


const File = ({ file }: { file: any }) => {

    //const [listLayout, setListLayout] = useState(false);
    // TODO: Implement the block file view

    const [isFavorite, setIsFavorite] = useState<boolean>(file.isFavorite);

    const updateFavoriteStatus = () => {
        setIsFavorite((prev) => !prev)

        fileRequest.updateFileFavoriteStatus({ fileId: file._id, value: !file.isFavorite })
            .catch(() => setIsFavorite((prev) => !prev))
    }

    return (
        <Link href={file.fileUrl} target="blank">

            <div className="flex flex-row border-b py-2 px-3 w-full  items-center justify-between group">

                <div className="flex flex-row items-center gap-4 max-w-[300px]  ">
                    <div className="w-[60px] h-[60px] group-hover:animate-bounce flex items-center justify-center">
                        <FileIcon size="30" className="flex-1" color="#aaa" />
                    </div>
                    <h1 className="text-[15px] font-semibold font-sans text-gray-600 "> {file.title} </h1>
                </div>

                <div className="flex flex-col pl-5 border-l">
                    <h1>Author</h1>
                    <h2 className="text-[15px] font-thin font-sans text-gray-600 " > {file.author} </h2>

                </div >

                <div onClick={updateFavoriteStatus}>
                    {
                        isFavorite ?
                            <Image alt="" height={20} width={20} src={starFill} /> :
                            <Image alt="" height={20} width={20} src={star} />
                    }
                </div>



            </div>
        </Link>
    )
}

export default File
