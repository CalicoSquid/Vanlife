import {Link} from "react-router-dom"


export default function NotFound() {

    return (
        <div className="not-found">
            <h1>Sorry, the page you are looking for does not exist...</h1>
            <i class="fa-solid fa-van-shuttle"></i>
            <br/>
            <Link to="/" >Return to home</Link>
        </div>
    )
}