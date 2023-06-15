import { Link, Outlet, useLoaderData, defer, Await } from "react-router-dom";
import HostNav from "../../Components/Host-Nav";
import VanStyles from "../../Components/VanStyles";
import { getVan } from "../../api";
import { requireAuth } from '../../utils';
import { Suspense } from "react";

export async function loader({params, request}) {
    const {id} = params
    await requireAuth(request)
    const data = getVan(id)
    return defer({data})
}


export default function HostVanDetails() {

    const dataPromise = useLoaderData()

    return (
        <>
            <Link 
                to="/host/vans" 
                relative="path"
                className="back"
                >&larr; Back to your vans
            </Link>

            <Suspense fallback={<h2 className="loading">Loading Your Van...</h2>}>
                <Await resolve={dataPromise.data}>
                    {(van) => {
                        return (
                            <div className="host-van-detail-layout-container">
                                <div className="host-van-detail">
                                    <img src={van.imageUrl} alt={van.name}/>
                                    <div className="host-van-detail-info-text">
                                    <div className="grid-tag" style={VanStyles(van.type)}>{van.type.replace(van.type[0], van.type[0].toUpperCase())}</div>
                                        <h3>{van.name}</h3>
                                        <h4>${van.price}/day</h4>
                                    </div>
                                </div>
                                <br/>
                                <HostNav />
                                <Outlet context={van} />
                            </div> 
                        )
                    }}
                </Await>
            </Suspense>   
        </>    
    )
}