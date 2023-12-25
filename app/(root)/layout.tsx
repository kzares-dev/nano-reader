import {
  Topbar,
  Sidebar,
} from '@/components'


function RootLayout({ children }: { children: React.ReactNode }) {
  return (
      <div className="min-h-screen bg-gray-50 w-full">
          <Topbar />

          <div className="flex flex-row  w-[100vw] h-[100vh] overflow-hidden">
              <Sidebar />
              {children}
          </div>
      </div>
  )
}

export default RootLayout