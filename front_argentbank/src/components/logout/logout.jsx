function LogOut(){

    localStorage.clear();
    sessionStorage.clear();

    window.location = "/?logout=true"
}

export default LogOut