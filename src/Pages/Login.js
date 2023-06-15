
import { useLoaderData, Form, useNavigation, redirect, useActionData, useNavigate } from "react-router-dom"
import {loginUser} from "../api.js"

export function loader({ request }) {
    const url = new URL(request.url).searchParams.get("message")
    return url
}

export async function action({request}) {
    const formData = await request.formData()
    const email = formData.get("email")
    const password = formData.get("password")
    const pathName = new URL(request.url).searchParams.get("redirectTo") || "/host"
    try {
        await loginUser({ email, password })
        localStorage.setItem("loggedin", true)
        return redirect(pathName)
    } catch (err) {
        return err.message
    }
    
}

export default function Login() {

    const message = useLoaderData()
    const error = useActionData()
    const status = useNavigation().state
    const nav = useNavigate()
    const isLoggedIn = localStorage.getItem("loggedin")

    function logout() {
        localStorage.clear()
        return nav("/")
    }

    console.log(isLoggedIn)

    return (
        <div className="login-container">
            <h1>Sign in to your account</h1>
            {error && <h4 style={{color: "red"}}>{error}</h4>}
            {message && <h4 style={{color: "red"}}>{message}</h4>}
            <Form 
            method="post" 
            className="login-form" 
            replace
            >
                <input
                    name="email"
                    type="email"
                    placeholder="Email address"
                />
                <input
                    name="password"
                    type="password"
                    placeholder="Password"
                />
                <button disabled={status === "submitting"}>
                    {status === "submitting" ? "Logging In" : "Log in"}
                </button>
            </Form>
            <br/>
            {isLoggedIn && <p>Finished Already?</p>}
            <button onClick={logout} className="logout">{isLoggedIn ? "Logout" : "Return to home"}</button>
        </div>
    )

}