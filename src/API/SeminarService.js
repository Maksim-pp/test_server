import axios from "axios"

export const getAll = async () => {
    const response = await axios.get(`http://localhost:3001/seminars`)
    return response
}

export const deleteSeminarById = async (id) => {
    const response = await axios.delete(`http://localhost:3001/seminars/${id}`)
    return response
}