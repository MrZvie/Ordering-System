import axios from "axios"

const REST_API_URL = "http://localhost:8080/user";

const getUser = () => {
    return axios.get(REST_API_URL);
}
const addUser = (user) => {
    return axios.post(REST_API_URL,user);
}
const deleteUser = (id) => {
    return axios.delete(REST_API_URL + "/" + id);
}
const getUserId = (id) => {
    return axios.get(REST_API_URL + "/" + id);
}
const Service = {
    getUser,
    addUser,
    deleteUser,
    getUserId
}

export default Service