import axios from  "axios";

const apiUrl = "http://localhost:8081/api"
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJiYjlkNGQ3My02YjYwLTQwYmEtODVjZS1jNmNlMzcyZDQ0MjMiLCJ1bmlxdWVfbmFtZSI6Imx1YW5hQG11bWEuY29tIiwibmJmIjoxNzI5MjEzMjU2LCJleHAiOjE3MjkyOTk2NTYsImlhdCI6MTcyOTIxMzI1NiwiaXNzIjoiTVVNQS1BUEkiLCJhdWQiOiJNVU1BLUF1ZGllbmNlIn0.tyFzzLHw1yiQqvDAMp56JaTPuxDvZ6ybr98qaT6EAuY"
export const getAllPets = async () => {
    const response = await axios.get(`${apiUrl}/Mascotas`,{
        headers: {
            Authorization: `Bearer ${token}`,
        }
    })
    return response
}

export const getPetById = async (id) => {
    const response = await axios.get(`${apiUrl}/Mascotas/${id}`,{
        headers: {
            Authorization: `Bearer ${token}`,
        }
    })
    return response
}

export const registerPet = (petObj) => {
    const response = axios.post(`${apiUrl}/Mascotas/registro`, petObj,{
        headers: {
            Authorization: `Bearer ${token}`,
        }
    })
    return response
}

export const editPet = (petObj,id) => {
    const response = axios.put(`${apiUrl}/Mascotas/${id}`, petObj,{
        headers: {
            Authorization: `Bearer ${token}`,
        }
    })
}

export const deletePet = (id) => {
    axios.delete(`${apiUrl}/Mascotas/${id}`)
}