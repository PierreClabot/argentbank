export function getToken(){

    if(localStorage.getItem("token"))
        return localStorage.getItem("token")
    
    return sessionStorage.getItem("token")
}