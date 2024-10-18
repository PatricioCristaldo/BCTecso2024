import axios from  "axios";

const apiUrl = "http://localhost:8081/api"
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJiYjlkNGQ3My02YjYwLTQwYmEtODVjZS1jNmNlMzcyZDQ0MjMiLCJ1bmlxdWVfbmFtZSI6Imx1YW5hQG11bWEuY29tIiwibmJmIjoxNzI5MjEzMjU2LCJleHAiOjE3MjkyOTk2NTYsImlhdCI6MTcyOTIxMzI1NiwiaXNzIjoiTVVNQS1BUEkiLCJhdWQiOiJNVU1BLUF1ZGllbmNlIn0.tyFzzLHw1yiQqvDAMp56JaTPuxDvZ6ybr98qaT6EAuY"
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
