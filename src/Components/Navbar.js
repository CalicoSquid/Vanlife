import { NavLink, useNavigate } from "react-router-dom";
import logo from "../Images/logog.png"

export default function Navbar() {

    const nav = useNavigate()

    function logout() {
        localStorage.clear()
        return nav("/login")
    }

    const logoStyle = {
        height: "30px"
    }

    const activeLinkStyle = {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "#161616"
    }

    return (
        <nav id="navbar">
            <div id="header">
                <NavLink to="/"><img src={logo} style={logoStyle} alt="Vanlife logo"/></NavLink>
            </div>
            <div id="nav-links">
                <NavLink to="host" style={({isActive}) => isActive ? activeLinkStyle : null}>Hosts</NavLink>
                <NavLink to="about" style={({isActive}) => isActive ? activeLinkStyle : null}>About</NavLink>
                <NavLink to="vans" style={({isActive}) => isActive ? activeLinkStyle : null}>Vans</NavLink>
                <NavLink to="login" style={({isActive}) => isActive ? activeLinkStyle : null}>
                    <i className="fa-solid fa-circle-user fa-lg"></i>
                    </NavLink>
            </div> 
            
        </nav>
    )
}