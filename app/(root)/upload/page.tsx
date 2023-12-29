"use client"
import Image from 'next/image'
import logo from '@/public/logo.svg'
import { useState } from 'react'
import { FileType, file, useEdgeStore } from '@/lib'
import { useRecoilState } from 'recoil'
import { sessionAtom } from '@/atoms'
import { toast } from 'react-toastify'
import { useRouter } from 'next/navigation'
import { FileUploader } from '@/components'
import { loader } from "@/components"

const Upload = () => {

    const [session, setSession] = useRecoilState(sessionAtom);
    const [isUploading, setIsUploading] = useState(false);

    const [fileData, setFileData] = useState<FileType>({
        title: "",
        author: "",
        fileUrl: "",
        imageUrl: "http://fileimageurl.com",
        userId: session.id,
        isFavorite: false,
    })

    const router = useRouter()

    const uploadFile = (e: any) => {
        e.preventDefault()

        if (fileData.fileUrl === "") {
            toast.error("You must upload a file")
            console.log("toast")
            return
        }

        setIsUploading(true)

        file.uploadFile(fileData)
            .then(() => {
                toast.success("File uploaded Succesfully");
                router.push('/')
            })
            .catch(() => {
                toast.error("Failed to submit data")
            })
            .finally(() => setIsUploading(false))
    }

    const getFileUrl = (url: string) => {
        console.log(url)
        setFileData({ ...fileData, fileUrl: url })
    }


    return <section className='flex flex-col xl:flex-row w-full p-4 md:p-0'>

        <div className="px-5 pt-[5vw] rounded-md border rounded-tl-none rounded-bl-none shadow md:min-w-[450px] bg-white h-full flex flex-col items-center gap-10 pb-10">

            <div className="flex items-center flex-row">
                <Image src={logo} alt="" width={100} height={100} />
                <h1 className='text-[30px] font-bold -ml-8 '>Upload File</h1>
            </div>

            <form onSubmit={(e: any) => uploadFile(e)} className="w-full flex gap-5 flex-col">
                <input
                    value={fileData.title}
                    onChange={e => setFileData({ ...fileData, title: e.target.value })}
                    type="text"
                    className="w-full py-3 pl-4 rounded-md border"
                    placeholder="Set a title..."
                    required />

                <input
                    value={fileData.author}
                    onChange={e => setFileData({ ...fileData, author: e.target.value })}
                    type="text"
                    className="w-full py-3 pl-4 rounded-md border"
                    placeholder="Author..."
                    required />



                <div className="w-full text-right flex justify-end pr-1 pt-5" >
                    {isUploading ?
                        <Image src={loader} alt='' height={20} width={90} />
                        :
                        <button type="submit" className="bg-black rounded-md px-5 py-2 text-white ">
                            Upload
                        </button>
                    }
                </div>
            </form>

        </div>

        <div className="flex items-center justify-center w-full h-full text-gray-100 font-bold">

            <FileUploader getFileUrl={getFileUrl} />

        </div>

    </section >
}

export default Upload