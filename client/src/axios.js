import axios from 'axios'

const instance = axios.create({
    baseURL: 'http://localHost:3000',
})

export default instance;