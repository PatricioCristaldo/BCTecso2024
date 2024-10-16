import axios from  "axios";

const apiUrl = "http://localhost:8081/api"
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI4NjVlNzEzNi1mZjFlLTQ5MmUtOWJkOC0wMDVlNWU1ZjI1NTEiLCJ1bmlxdWVfbmFtZSI6Imx1YW5hQG11bWEuY29tIiwibmJmIjoxNzI4ODYwMjI0LCJleHAiOjE3Mjg5NDY2MjQsImlhdCI6MTcyODg2MDIyNCwiaXNzIjoiTVVNQS1BUEkiLCJhdWQiOiJNVU1BLUF1ZGllbmNlIn0.H8Ft_uoOMZIxCGI5QzRama1okEzqbjzfk7iACbSqLXw"

export const getAllMascoteros = async () => {
    const response = await axios.get(`${apiUrl}/Mascoteros`,{
        headers: {
            Authorization: `Bearer ${token}`,
        }
    })
    return response
}

export const getMascoteroById = async (id) => {
    const response = await axios.get(`${apiUrl}/Mascoteros/${id}`,{
        headers: {
            Authorization: `Bearer ${token}`,
        }
    })
    return response
}

export const registerMascotero = (mascoteroObj) => {
    const response = axios.post(`${apiUrl}/Mascoteros/registro`, mascoteroObj)
    return response
}
