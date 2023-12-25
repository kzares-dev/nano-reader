"use client";

import { useRouter } from "next/navigation";


function Link({ href, children }: { href: string, children: React.ReactNode }) {

    const router = useRouter();

    return (
        <div onClick={() => router.push(href)}>
            {children}
        </div>
    )
}

export default Link
