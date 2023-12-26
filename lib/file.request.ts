import { axios } from ".";

interface FileType {
    title: string,
    author: string,
    fileUrl: string,
    imageUrl: string,
    userId: string,
}

class FileRequest {

    async uploadFile(file: FileType) {
        //calling the server to upload file
        // TODO: this function is executed after the file upload 
        return axios.post("/files/create", file)
    }

    async getUserFiles(userId: string) {
        //calling the server to upload file
        // TODO: this function is executed after the file upload 
        return axios.get(`/files/user-files/${userId}`)
    }

}

const file = new FileRequest();

export {
    type FileType,
    file
}