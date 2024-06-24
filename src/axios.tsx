import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:3000/unifei',
});

export default instance;
