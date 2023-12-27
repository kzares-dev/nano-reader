"use client"
import Image from 'next/image'
import logo from '@/public/logo.svg'
import { useState } from 'react'
import { FileType, file } from '@/lib'
import { useRecoilState } from 'recoil'
import { sessionAtom } from '@/atoms'
import { toast } from 'react-toastify'
import { useRouter } from 'next/navigation'

const Upload = () => {

    const [session, setSession] = useRecoilState(sessionAtom);

    const [fileData, setFileData] = useState<FileType>({
        title: "",
        author: "",
        fileUrl: "http://fileurl.com",
        imageUrl: "http://fileimageurl.com",
        userId: session.id,
        isFavorite: false,
    })

    const router = useRouter()

    const uploadFile = (e: any) => {

        e.preventDefault()
        file.uploadFile(fileData)
            .then(() => {
                toast.success("File uploaded Succesfully");
                router.push('/')
            })
            .catch(() => {
                toast.error("Failed to upload File")
            } )
    }
    return <section className='flex flex-row w-full'>

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



                <div className="w-full text-right pr-1 pt-5" >
                    <button type="submit" className="bg-black rounded-md px-5 py-2 text-white ">
                        Upload
                    </button>
                </div>
            </form>

        </div>

        <div className="flex items-center justify-center w-full h-full text-gray-100 font-bold">

            <input type="file" className="file:bg-gradient-to-b file:from-purple-500 file:to-purple-600 file:px-6 file:py-3 file:m-5 file:border-none file:rounded-lg file:text-white file:cursor-pointer file:shadow:lg file:shadow-blue-600/50 
            pr-3
            bg-gradient-to-br bg-white  text-black/80 rounded-md cursor-pointer border shadow-sm" />
        </div>

    </section>
}

export default Upload