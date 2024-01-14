import axios from 'axios'



export const api = axios.create({
    baseURL: 'http://new.istcosa.com/api/',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
})