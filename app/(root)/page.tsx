"use client";
import { sessionAtom } from "@/atoms";
import { useRecoilState } from "recoil";
import { FileWrapper } from "@/components"
import { useEffect, useState } from "react";
import { file } from "@/lib";

function Home() {
  const [session, setSession] = useRecoilState(sessionAtom);
  const [userFiles, setUserFiles] = useState([])

  useEffect(() => {
    file.getUserFiles(session.id)
      .then(res => setUserFiles(res.data))
      .catch(err => console.log(err))

  }, [])

  return (
    <div className="flex-1">
      <FileWrapper files={userFiles} />
    </div>
  )
}

export default Home
