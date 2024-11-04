import axios from "axios";

const serverUrl = 'http://localhost:3001/persons'

const getAll = () => {
    return axios.get(serverUrl)
}

const create = (newPerson) => {
    return axios.post(serverUrl, newPerson)
}

const update = (id, newPerson) => {
    return axios.put(`${serverUrl}/${id}`, newPerson)
}

const remove = (id) => {
    return axios.delete(`${serverUrl}/${id}`)
}

export default { getAll, create, update, remove }