"use client"
import Image from 'next/image'
import logo from '@/public/logo.svg'

const Upload = () => {

    const uploadFile = (ev: any) => {


    }
    return <section className='flex flex-row w-full'>

        <div className="px-5 pt-[5vw] rounded-md border shadow md:min-w-[450px] bg-white h-full flex flex-col items-center gap-10 pb-10">

            <div className="flex items-center flex-row">
                <Image src={logo} alt="" width={100} height={100} />
                <h1 className='text-[30px] font-bold -ml-8 '>Upload File</h1>
            </div>

            <form onSubmit={ (ev: any) => uploadFile(ev)}  className="w-full flex gap-5 flex-col">
                <input

                    type="text"
                    className="w-full py-3 pl-4 rounded-md border"
                    placeholder="Set a title..."
                    required />

                <input
                   
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