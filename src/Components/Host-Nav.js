import { NavLink } from "react-router-dom";

export default function HostNav() {

    const activeHostLinkStyle = {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "#161616"
    }

    return (
        <div className="page host-van-layout">
            <nav id="host-van-nav">
                <NavLink to="." end style={({isActive}) => isActive ? activeHostLinkStyle : null}>Details</NavLink>
                <NavLink to="pricing" style={({isActive}) => isActive ? activeHostLinkStyle : null}>Pricing</NavLink>
                <NavLink to="photos" style={({isActive}) => isActive ? activeHostLinkStyle : null}>Photos</NavLink>
            </nav>
        </div>
    )
}