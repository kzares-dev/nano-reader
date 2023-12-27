"use client";

import {
  Topbar,
  Sidebar,
} from '@/components'
import { RecoilRoot } from 'recoil'


function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <RecoilRoot>
      <div className="h-screen bg-gray-50 w-full" >
        <Topbar />

        <div className="flex flex-row  w-[100vw] h-[100vh] overflow-hidden pt-[103px]">
          <Sidebar />
          {children}
        </div>
      </div>
    </RecoilRoot>
  )
}

export default RootLayout
