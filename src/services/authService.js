import axios from "axios"
const apiUrl = "http://localhost:8081/api"
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI4NjVlNzEzNi1mZjFlLTQ5MmUtOWJkOC0wMDVlNWU1ZjI1NTEiLCJ1bmlxdWVfbmFtZSI6Imx1YW5hQG11bWEuY29tIiwibmJmIjoxNzI4ODYwMjI0LCJleHAiOjE3Mjg5NDY2MjQsImlhdCI6MTcyODg2MDIyNCwiaXNzIjoiTVVNQS1BUEkiLCJhdWQiOiJNVU1BLUF1ZGllbmNlIn0.H8Ft_uoOMZIxCGI5QzRama1okEzqbjzfk7iACbSqLXw"
const jwtString = 'jwtmuma'

export const login = async (userObj) => {
    const response = await axios.post(`${apiUrl}/auth/login`, userObj)
    const { user , token } = response.data
    const {_id,...userStored} = user
    localStorage.setItem(jwtString, JSON.stringify({user: userStored,token}))
    return response
}

export const register = async (userObject) => {
    const response = await axios.post(`${apiUrl}/auth/signup`, userObject)
    return response
}

export const isAuthenticated = () => {
    if(typeof window == 'undefined'){ 
        return false
    }
    if (!localStorage.getItem(jwtString)) return false
    const {user} = JSON.parse(localStorage.getItem(jwtString))
    if(user){
        return user
    }
    return false
}

export const logout = async () => {
    localStorage.removeItem(jwtString)
    window.location.reload()
}
