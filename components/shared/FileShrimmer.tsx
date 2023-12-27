
function FileShrimmer() {
    return (
        <div className="flex flex-row border-b py-2 px-3 w-full  items-center justify-between ">

            <div className="flex flex-row items-center gap-4 max-w-[300px] ">
                <div className="w-[50px] h-[60px] bg-gray-200 animate-pulse">
                    
                </div>

                <h1 className="w-[200px] h-[10px] bg-gray-200 animate-pulse "  />
            </div>

            <div className="flex flex-col pl-5 border-l gap-3">
                <h1 className="w-[100px] h-[10px] bg-gray-200 animate-pulse " />
                <h1 className="w-[200px] h-[10px] bg-gray-200 animate-pulse "  />

            </div >

            <div className="w-[40px] h-[40px] bg-gray-200 animate-pulse rounded-full " />


        </div>
    )
}

export default FileShrimmer
