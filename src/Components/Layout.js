import { Outlet } from "react-router-dom"
import Navbar from "./Navbar.js"


export default function Layout() {
    return (
        <>
        <Navbar />
        <Outlet />
        <footer>Ⓒ 2022 #VANLIFE</footer>
    </>
    )
}

