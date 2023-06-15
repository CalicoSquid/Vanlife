import {Link, useRouteError} from "react-router-dom"


export default function Error() {

    const error = useRouteError()

    return(
        <div className="error">
            <h1>Error!</h1>
            <div className="error-container">
                Error Message:
                <br/>
                {error.message ? <p>{error.message}</p> : <p>Unknown error();</p>}
                {error.statusText ? <pre>{error.statusText}</pre> : ""}
                {error.status ? <pre>{error.status}</pre> : ""}
            </div>
            <Link to=".." relative="path">Get back to the Vans </Link>
        </div>
    )
}