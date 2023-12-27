import Image from "next/image"

function NoData({ message }: { message: string }) {
    return (
        <div className="flex-1 flex items-center justify-center flex-row gap-4">
            <Image src='/close.png' alt="" width={20} height={20} />
            <h1> {message} </h1>
        </div>
    )
}

export default NoData
