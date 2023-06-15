import { Link, useLoaderData, Await, defer } from "react-router-dom";
import { getHostVans } from "../../api";
import { requireAuth } from "../../utils"
import { Suspense } from "react";

export async function loader({request}) {
    await requireAuth(request)
    return defer({ vans: getHostVans() })
}



export default function HostVans() {

    const dataPromise = useLoaderData()

    function renderHostVanElements(vans) {
        let vanElements = vans.map(van => {
            return( 
            <Link
                to={van.id}
                key={van.id}
                className="host-van-link-wrapper"
                >
                <div className="host-van-single" key={van.id}>
                    <img src={van.imageUrl} alt={van.name} />
                    <div className="host-van-info">
                        <h3>{van.name}</h3>
                        <p>${van.price}/day</p>
                    </div>
                </div>
            </Link>
            )
        })

        return  (
        <div className="host-vans-list">
                    <section>
                        {vanElements}
                    </section>    
                </div>
        )
    }
    

    return (
        <>
        <h1 className="host-vans-title">Your listed vans</h1>
        <Suspense fallback={<h2 className="loading">Loading Vans...</h2>}>
            <Await resolve={dataPromise.vans}>
                {renderHostVanElements}
            </Await>
        </Suspense>
        </>
        
    )
}