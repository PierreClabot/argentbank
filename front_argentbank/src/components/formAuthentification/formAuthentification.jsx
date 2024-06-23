import { useEffect, useState } from "react"
import iconUser from "../../assets/icon-user.svg"
import { login } from "../../redux/loginSlice"
import { useSelector, useDispatch } from 'react-redux'
import Loader from "../loader/loader"
import { useNavigate } from "react-router-dom"

function FormAuthentification(){
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const componentAuthentificationState = useSelector(state => state.login)
    const [error,setError] = useState("")
    const [formUser, setFormUser] = useState({
        username: '',
        password: '',
        remember: ''
      });
    const [spinnerActive,setSpinnerActive] = useState(false)
    useEffect(()=>{
        const btnAuthentification = document.querySelector(".authentification-button") 
        switch(componentAuthentificationState.state){
            case 'complete':
                navigate('/profile?login=true')
                setSpinnerActive(false)
                break;
            case 'pending':

                btnAuthentification.disabled = true
                btnAuthentification.innerHTML = "In progress"
                btnAuthentification.style.backgroundColor = "#616161"
                setSpinnerActive(true)
                break;
            case 'reject' :
                btnAuthentification.disabled = false
                btnAuthentification.innerHTML = "Sign In"
                btnAuthentification.style.backgroundColor = "#00bc77"
                setSpinnerActive(false)
                setError("Incorrect username or password")
                break;
        }
    },[componentAuthentificationState]
    )

    function handleLogin(event){
        event.preventDefault();

        const validateEmail = formUser.username
        .toLowerCase()
        .match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );

        if(!validateEmail){
            setError("Username is not an email")
            return
        }

        if(formUser.password.length<4){
            setError("Password must contain at least 4 characters")
            return
        }
        
        const objLogin = {
            email : formUser.username,
            password : formUser.password,
            remember : formUser.remember
        }

        dispatch(login(objLogin))

    }

    function handleChange(event){
        const { name, value, type, checked } = event.target;
        setFormUser({
            ...formUser,
            [name]: type === "checkbox" ? checked : value,
          });
    }
    
    return(
        <section className="formAuthentification">
            <img className="icon-user" src={iconUser} alt="Icon user" />
            <h1>Sign In</h1>
            <form>
                <div className="input-wrapper">
                    <label htmlFor="username">Username</label>
                    <input type="text" id="username" name="username" autoComplete="username" value={formUser.username} onChange={handleChange}/>
                </div>
                <div className="input-wrapper">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" name="password" autoComplete="current-password"  value={formUser.password} onChange={handleChange}/>
                </div>
                <div className="input-remember">
                    <input type="checkbox" id="remember" name="remember" value={formUser.remember} onChange={handleChange}/>
                    <label htmlFor="remember">Remember me</label>
                </div>
                <button className="authentification-button" onClick={handleLogin}>Sign In <Loader isActive={spinnerActive} /></button>
                {error?<div className="error">{error}</div>:""}
            </form>
        </section>
    )

    
}

export default FormAuthentification