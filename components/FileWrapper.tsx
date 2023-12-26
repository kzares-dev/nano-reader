"use client"
import { File } from ".";
import { FileType } from "@/lib";



function FileWrapper({ files }: { files: FileType[] }) {
    //const [listLayout, setListLayout] = useState(false);
    // TODO: Implement the block file view

    return (
        <div className={`flex gap-5 pt-5 px-3 h-[100vh] overflow-auto pb-[20vh] flex-col `} >
            {files.map((file, idx) => (
                <File key={`${file.title}${idx}`} file={file} />
            ))}
        </div>
    )
}

export default FileWrapper
