import { Link, useLocation, useLoaderData, defer, Await} from "react-router-dom"
import VanStyles from "../../Components/VanStyles";
import { getVan } from "../../api";
import { Suspense } from "react";

export function loader({ params }) {
  const { id } = params
  const data = getVan(id)
  return defer({data})
}

export default function VanDetails() {

    const location = useLocation()
    const dataPromise = useLoaderData()

    const search = location.state?.search
    const link = search ? `..?${location.state.search}` : ".."
    const type = location.state?.type 
    const typeCapital = type ? type.replace(type[0], type[0].toUpperCase()) : "all"

    return (
        <div className="page van-detail">
            <Link 
            to={link} 
            relative="path"
            className="back"
            >
            {`Back to ${typeCapital} vans`}
            </Link>
            <Suspense fallback={<h2 className="loading">Loading your van</h2>}>
                <Await resolve={dataPromise.data}>
                {(van) => {
                    return(
                    <>
                        <img src={van.imageUrl} className="van-image" alt={van.name}/>
                        <div id="van-wrapper">
                            <div className="grid-tag" style={VanStyles(van.type)}>{van.type.replace(van.type[0], van.type[0].toUpperCase())}</div>
                            <h1>{van.name}</h1>
                            <h2>${van.price}<span className="per-day">/day</span></h2>
                            <p>{van.description}</p>
                            <button>Rent this Van</button>
                        </div>
                    </>
                    )   
                }}
                </Await>
            </Suspense>     
        <br/>
            </div>
    )
}