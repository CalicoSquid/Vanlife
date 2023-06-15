import { redirect } from "react-router-dom"

export async function requireAuth(req) {
    
    const isLoggedIn = localStorage.getItem("loggedin")
    const pathName = new URL(req.url).pathname
    
    if (!isLoggedIn) {
        throw redirect(`/login?message=You must log in first&redirectTo=${pathName}`)
    } 
}