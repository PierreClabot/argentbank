import { NavLink } from "react-router-dom";
import logo from "../../assets/argentBankLogo.png";
import iconUser from "../../assets/icon-user.svg";
import logOut   from "../../assets/logout.svg";
import { useEffect, useState } from "react";
import { getToken } from "../../utils/utils";
import Api from "../../api/api"

function Header(props){

    const [action,setAction] = useState("/login")
    const [textConnexion,setTextConnexion] = useState("Sign In")
    const [iconLog,setIconLog] = useState(iconUser)
    const [token,setToken] = useState("")
    const [firstName,setFirstName] = useState(props.firstName)
    useEffect(()=>{

        setToken(getToken())

        if(token){
            setAction("/logout");
            setTextConnexion("Sign Out")
            setIconLog(logOut)
            getUser(token);
        }

        async function getUser(token){
            const user = await Api.getUser(token)
            setFirstName(user.firstName)
        }
    })

    return(
        <nav className="header">
            <NavLink to="/">
                <img src={logo} alt="Logo ArgentBank" className="header-logo"/>
            </NavLink>
            <div className="header-menu">

                {
                    firstName?(
                    <NavLink to="/profile" className="link">
                        <img className="icon-user" src={iconUser} alt="Icon user" />
                        {firstName}
                    </NavLink>):""
                }

                <NavLink to={action} className="link">
                    <img className="icon-user" src={iconLog} alt="Icon user" />
                    {textConnexion}
                </NavLink>

            </div>
        </nav>
    )

}

export default Header