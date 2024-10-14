const useAuth = ()=>{
    const token = localStorage.getItem('authToken') || sessionStorage.getItem('authToken');
    return !!token;
}

export default useAuth;