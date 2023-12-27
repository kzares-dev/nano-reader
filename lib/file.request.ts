import { axios } from ".";

interface FileType {
    title: string,
    author: string,
    fileUrl: string,
    imageUrl: string,
    userId: string,
    isFavorite: false,
}

class FileRequest {

    async uploadFile(file: FileType) {
        //calling the server to upload file
        // TODO: this function is executed after the file upload 
        return axios.post("/files/create/", file)
    }

    async getSearch(data: { userId: string, query: string }) {
        return axios.post(`/files/search`, data)
    }

    async getFavoriteSearch(data:{ userId: string, query: string }) {
        return axios.post(`/files/search-favorite/`, data)
    }

    async updateFileFavoriteStatus( data : { fileId: string, value:boolean}) {
        return axios.post("/files/update-status", data)
    }

}

const file = new FileRequest();

export {
    type FileType,
    file
}