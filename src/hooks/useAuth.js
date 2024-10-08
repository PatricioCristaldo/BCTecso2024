const useAuth = ()=>{
    const token = localStorage.getItem('authToken');
    return !!token;
}

export default useAuth;