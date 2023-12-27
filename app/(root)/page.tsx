"use client";
import { searchAtom, sessionAtom } from "@/atoms";
import { useRecoilState } from "recoil";
import { FileWrapper } from "@/components"
import { useEffect, useState } from "react";
import { file } from "@/lib";

function Home() {

  // states & atoms 
  const [session, setSession] = useRecoilState(sessionAtom);
  const [search, setSearch] = useRecoilState(searchAtom);
  const [userFiles, setUserFiles] = useState([]);

  // Setting listener to serach every time the `searchAtom` changes

  useEffect(() => {
    file.getSearch({ userId: session.id, query: search })
      .then(res => setUserFiles(res.data))
      .catch(err => console.log(err))
  }, [search])

  return (
    <div className="flex-1">
      <FileWrapper files={userFiles} />
    </div>
  )
}

export default Home
