import axios from "axios";

const url = 'https://jsonplaceholder.typicode.com/'

const getPosts = () => {
    return axios.get(`${url}posts`);
}

const getComments = () => {
    return axios.get(`${url}comments`);
}

const getTodos = () => {
    return axios.get(`${url}todos`);
}

export default {
    getPosts,
    getComments,
    getTodos,
}