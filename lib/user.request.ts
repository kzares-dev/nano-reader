import axios from "axios";

interface UserType {
    email: string,
    password: string,
}

class User {

    async signin(user: UserType) {

        // call the server and return the jwt
        return await axios.post('http://localhost:3001/auth/signin', user)
    };
}

const user = new User();

export default user