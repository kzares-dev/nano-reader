"use client";
import { searchAtom, sessionAtom } from "@/atoms";
import { FileWrapper } from "@/components"
import { file } from "@/lib";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";

function Favorites() {

    const [session, setSession] = useRecoilState(sessionAtom);
    const [userFiles, setUserFiles] = useState([]);
    const [search, setSearch] = useRecoilState(searchAtom)


    // Get the user files in the initial page load
    useEffect(() => {
        file.getFavoriteSearch({ userId: session.id, query: search })
            .then(res => setUserFiles(res.data))
            .catch(err => console.log(err))

    }, [search]);

    return (
        <div className="flex-1">
            <FileWrapper files={userFiles} />
        </div>
    )
}

export default Favorites
