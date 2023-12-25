"use client"
import { useState } from "react";
import { File } from ".";


const files = [
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 1 },
    { id: 2 },
    { id: 3 },

]

function FileWrapper() {
    //const [listLayout, setListLayout] = useState(false);
    // TODO: Implement the block file view

    return (
        <div className={`flex gap-5 pt-5 px-3 h-[100vh] overflow-auto pb-[20vh] flex-col `} >
            {files.map(({ id }) => (
                <File key={id} />
            ))}
        </div>
    )
}

export default FileWrapper
