import { NavLink } from "react-router-dom";
import logo from "../../assets/argentBankLogo.png";
import iconUser from "../../assets/icon-user.svg"

function Header(){

    return(
        <nav className="header">
            <NavLink to="/">
                <img src={logo} alt="Logo ArgentBank" className="header-logo"/>
            </NavLink>
            <div className="header-menu">
                <NavLink to="/authentification" className="link">
                    <img className="icon-user" src={iconUser} alt="Icon user" />
                    Sign In
                </NavLink>
            </div>
        </nav>
    )

}

export default Header