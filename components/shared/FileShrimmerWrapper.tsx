import { FileShrimmer } from ".."

const files = [1,2,3,4,5,6,7,8]

function FileShrimmerWrapper() {
    return (
        <div className={`flex gap-5 pt-5 px-3 h-[100vh] overflow-auto pb-[20vh] flex-col `} >
            {files.map((file, idx) => (
                <FileShrimmer />
            ))}
        </div>
    )
}

export default FileShrimmerWrapper
