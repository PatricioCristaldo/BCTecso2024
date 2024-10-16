import axios from  "axios";

const apiUrl = "http://localhost:8081/api"
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI4NjVlNzEzNi1mZjFlLTQ5MmUtOWJkOC0wMDVlNWU1ZjI1NTEiLCJ1bmlxdWVfbmFtZSI6Imx1YW5hQG11bWEuY29tIiwibmJmIjoxNzI4ODYwMjI0LCJleHAiOjE3Mjg5NDY2MjQsImlhdCI6MTcyODg2MDIyNCwiaXNzIjoiTVVNQS1BUEkiLCJhdWQiOiJNVU1BLUF1ZGllbmNlIn0.H8Ft_uoOMZIxCGI5QzRama1okEzqbjzfk7iACbSqLXw"

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