"use client";
import { searchAtom, sessionAtom } from "@/atoms";
import { useRecoilState } from "recoil";
import { FileShrimmer, FileShrimmerWrapper, FileWrapper, NoData } from "@/components"
import { useEffect, useState } from "react";
import { file } from "@/lib";

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Home() {

  // states & atoms 
  const [session, setSession] = useRecoilState(sessionAtom);
  const [search, setSearch] = useRecoilState(searchAtom);
  const [userFiles, setUserFiles] = useState([]);

  // This state is significant to show the user when a promise is loading 
  // when the data is null
  // and when error ocurred
  // ? Is a better way to do it?
  const [promiseResolving, setPromiseResolving] = useState(true)

  // Setting listener to serach every time the `searchAtom` changes

  useEffect(() => {
    setPromiseResolving(true)
    file.getSearch({ userId: session.id, query: search })
      .then(res => {
        setUserFiles(res.data)
      })
      .catch(err => {
        setUserFiles([])
      })
      .finally(() => setPromiseResolving(false))
  }, [search])

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

export default Home
