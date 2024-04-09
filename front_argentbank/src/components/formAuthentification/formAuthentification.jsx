import iconUser from "../../assets/icon-user.svg"
import { login } from "../../redux/loginSlice"
import { useSelector, useDispatch } from 'react-redux'

function FormAuthentification(){
    
    const dispatch = useDispatch()
    

    function handleLogin(event){
        event.preventDefault();

        if(!document.querySelector("#username")) return;

        console.log("JE SUIS ICI")
        const username = document.querySelector("#username").value
        const password = document.querySelector("#password").value
        
        dispatch(login(username,password))
    }

    
    return(
        <section className="formAuthentification">
            <img className="icon-user" src={iconUser} alt="Icon user" />
            <h1>Sign In</h1>
            <form>
                <div className="input-wrapper">
                    <label htmlFor="username">Username</label>
                    <input type="text" id="username" />
                </div>
                <div className="input-wrapper">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" />
                </div>
                <div className="input-remember">
                    <input type="checkbox" id="remember" />
                    <label htmlFor="remember">Remember me</label>
                </div>
                <button className="authentification-button" onClick={handleLogin}>Sign In</button>
            </form>
        </section>
    )

    
}

export default FormAuthentification