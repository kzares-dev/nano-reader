import axios from "axios"

interface UserType {
    email: string,
    password: string,
}

class User {
    async signin({ email, password }: UserType) {

        // call the server and return the jwt
        return await axios.post('http://localhost:3001/auth/signin', {
            email,
            password,
        })
    };

    async signup({ email, password }: UserType) {

        // call the server and return the jwt
        return await axios.post('http://localhost:3001/auth/signup', {
            email,
            password,
        })
    }

};
const user = new User()
export { user }