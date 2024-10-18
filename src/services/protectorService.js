import axios from  "axios";

const apiUrl = "http://localhost:8081/api"
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJiYjlkNGQ3My02YjYwLTQwYmEtODVjZS1jNmNlMzcyZDQ0MjMiLCJ1bmlxdWVfbmFtZSI6Imx1YW5hQG11bWEuY29tIiwibmJmIjoxNzI5MjEzMjU2LCJleHAiOjE3MjkyOTk2NTYsImlhdCI6MTcyOTIxMzI1NiwiaXNzIjoiTVVNQS1BUEkiLCJhdWQiOiJNVU1BLUF1ZGllbmNlIn0.tyFzzLHw1yiQqvDAMp56JaTPuxDvZ6ybr98qaT6EAuY"
export const getAllProtectors = async () => {
    const response = await axios.get(`${apiUrl}/Protectoras`,{
        headers: {
            Authorization: `Bearer ${token}`,
        }
    })
    return response
}

export const getProtectorById = async (id) => {
    const response = await axios.get(`${apiUrl}/Protectoras/${id}`,{
        headers: {
            Authorization: `Bearer ${token}`,
        }
    })
    return response
}

export const registerProtector = (protectorObj) => {
    const response = axios.post(`${apiUrl}/Protectoras/registro`, protectorObj)
    return response
}

export const deleteProtector = (id) => {
    axios.delete(`${apiUrl}/Protectoras/${id}`)
}