
import VanStyles from "../../Components/VanStyles";
import { useSearchParams, Link, useLoaderData, defer, Await } from "react-router-dom";
import { getVans } from "../../api"
import { Suspense } from "react";

export function loader() {
    const data = getVans()
    return defer({data})
}


export default function Vans() {

    const [searchParams, setSearchParams] = useSearchParams()
    const typeFilter = searchParams.get("type")
    const vanDataPromise = useLoaderData()

    function handleFilterChange(key, value) {
        setSearchParams(prevParams => {
            if (value === null) {
                prevParams.delete(key)
            } else {
                prevParams.set(key, value)
            }
            return prevParams
        })
    }

    function renderVanElements(vans) {
        const vanElements = vans
            .filter(van => typeFilter ? van.type === typeFilter : true)
            .map(van => {
                return <div key={van.id} id="grid-tile">
                    <Link 
                    to={van.id} 
                    state={{ 
                        search: searchParams.toString(),
                         type: typeFilter 
                        }}
                    >
                        <img src={van.imageUrl} className="grid-image" alt={van.name}/>
                        <div className="grid-text">
                            <h3>{van.name}</h3>
                            <h3 className="price">${van.price}<br/><span className="per-day">/day</span></h3>
                        </div>
                        <div 
                        className="grid-tag" 
                        style={VanStyles(van.type)}
                        >{van.type.replace(van.type[0], van.type[0].toUpperCase())}</div>
                    </Link>
                </div>
            })

            return (
                <>
                    <div id="filter-vans">
                        <button 
                        className={`filter simple ${typeFilter === "simple" && "selected"}`} 
                        onClick={() => handleFilterChange("type", "simple")}
                        >Simple</button>
                        <button 
                        className={`filter rugged ${typeFilter === "rugged" && "selected"}`} 
                        onClick={() => handleFilterChange("type", "rugged")}
                        >Rugged</button>
                        <button 
                        className={`filter luxury ${typeFilter === "luxury" && "selected"}`} 
                        onClick={() => handleFilterChange("type", "luxury")}
                        >Luxury</button>
                        {typeFilter && 
                        <button 
                        className="clear-filter" 
                        onClick={() => handleFilterChange("type", null)}
                        >Clear Filter</button>}
                    </div>
                    <div className="grid-container">
                        {vanElements}
                    </div> 
                </>
            )
                    
    }

    return (
            <div className="page vans">
                <h1>Explore our van options</h1>
                <Suspense fallback={<h2 className="loading">Loading Vans...</h2>}>
                    <Await resolve={vanDataPromise.data}>
                        {renderVanElements}
                    </Await>
                </Suspense>
                <br/>
            </div>      
    )
}