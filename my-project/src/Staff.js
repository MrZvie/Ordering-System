import axios from "axios";

const STAFF_API_URL = "http://localhost:8080/staff";

const getStaff = () => {
    return axios.get(STAFF_API_URL);
}
const addStaff = (staff) => {
    return axios.post(STAFF_API_URL,staff);
}
const deleteStaff = (id) => {
    return axios.delete(STAFF_API_URL + "/" + id);
}
const getStaffId = (id) => {
    return axios.get(STAFF_API_URL + "/" + id);
}
const updateStaff = (id) => {
    return axios.put(STAFF_API_URL + "/" + id);
  };

const Staff ={
    getStaff,
    addStaff,
    deleteStaff,
    getStaffId,
    updateStaff
}
export default Staff