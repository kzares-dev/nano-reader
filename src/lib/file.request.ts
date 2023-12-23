import axios from "axios";
import Cookies from "js-cookie";

interface FileType {
    title: string,
    author: string,
    fileUrl: string,
    imageUrl: string,
    userId: string,
}

class FileRequest {
    jwt: string;

    constructor() {
        this.jwt = Cookies.get('jwt_access_token') || ''
    }

    async uploadFile(file: FileType) {

        //calling the server to upload file
        // TODO: this function is executed after the file upload 
        return await axios.post('http://localhost:3001/files/create',
            file,
            {
                headers: {
                    'Authorization': `Bearer ${this.jwt}`
                },
            },
        )

    }

}

const file = new FileRequest()

export {
    file,
    type FileType
}