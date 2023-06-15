import { NavLink, Outlet } from "react-router-dom";

export default function HostLayout() {

    const activeHostLinkStyle = {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "#161616"
    }

    return (
        <div className="page host-layout">
            <nav id="host-nav">
                <NavLink to="." end style={({isActive}) => isActive ? activeHostLinkStyle : null}>Dashboard</NavLink>
                <NavLink to="income" style={({isActive}) => isActive ? activeHostLinkStyle : null}>Income</NavLink>
                <NavLink to="vans" style={({isActive}) => isActive ? activeHostLinkStyle : null}>Vans</NavLink>
                <NavLink to="reviews" style={({isActive}) => isActive ? activeHostLinkStyle : null}>Reviews</NavLink>
            </nav>
            <Outlet />
        </div>
    )
}