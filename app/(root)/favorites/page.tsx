"use client";
import { searchAtom, sessionAtom } from "@/atoms";
import { FileShrimmer, FileShrimmerWrapper, FileWrapper, NoData } from "@/components"
import { file } from "@/lib";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";

function Favorites() {

    const [session, setSession] = useRecoilState(sessionAtom);
    const [userFiles, setUserFiles] = useState([]);
    const [search, setSearch] = useRecoilState(searchAtom)

    // This state is significant to show the user when a promise is loading 
    // when the data is null
    // and when error ocurred
    // ? Is a better way to do it?
    const [promiseResolving, setPromiseResolving] = useState(true)


    // Get the user files in the initial page load
    useEffect(() => {
        setPromiseResolving(true)
        file.getFavoriteSearch({ userId: session.id, query: search })
            .then(res => setUserFiles(res.data))
            .catch(err => setUserFiles([]))
            .finally(() => setPromiseResolving(false))

    }, [search]);


    // Checking if is any of file returned as response
    if (!promiseResolving && userFiles.length === 0) return (
        <NoData
            message={search === "" ? "You dont have any files" : "No files match with the search"}
        />
    )

    return (
        <div className="flex-1">
            {promiseResolving && <div className="pt-5 px-3 "><FileShrimmer /></div>}

            {userFiles.length > 0 ? <FileWrapper files={userFiles} /> : <FileShrimmerWrapper />}
        </div>
    )
}

export default Favorites
