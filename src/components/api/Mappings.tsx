import axios from "axios";

const api_url = "http://localhost:8080/games";

export async function getGames({page = 0, size = 10}) {
    return await axios.get(`${api_url}?page=${page}&size=${size}`)
}