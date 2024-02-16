import axios from "axios";
import { User } from "../../Utils/types";

const email_url = "http://localhost:8080/api/users"


export async function saveUser(user: User) {
    return await axios.post(email_url, user);
}

export async function loginUser(user: User) {
    return await axios.get(`${email_url}/user?email=${user.email}&password=${user.password}`);
}

export async function updateUser(email: string, transactionValue: number) {
    return await axios.put(`${email_url}?email=${email}&transactionValue=${transactionValue}`);
}