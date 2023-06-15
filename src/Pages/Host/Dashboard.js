import { Link, defer, Await, useLoaderData } from "react-router-dom"
import { getHostVans } from "../../api"
import { requireAuth } from "../../utils"
import { Suspense } from "react"

export async function loader({ request }) {
    await requireAuth(request)
    const data = getHostVans()
    return defer({data})
}

export default function Dashboard() {
    const loaderData = useLoaderData()
    function renderVanElements(vans) {
        const hostVansEls = vans.map((van) => (
            <div className="host-van-dashboard host-van-single" key={van.id}>
                <div className="host-van-wrapper">
                <img src={van.imageUrl} alt={van.name} />
                <div className="host-van-info">
                    <h3>{van.name}</h3>
                    <p>${van.price}/day</p>
                </div>
                </div>
                <Link to={`vans/${van.id}`}>View</Link>
            </div>
        ))

        return (
            <div className="host-vans-list">
                <section>{hostVansEls}</section>
            </div>
        )
    }

    return (
        <>
            <section className="host-dashboard-earnings">
                <div className="info">
                    <h1>Welcome!</h1>
                    <p>Income last <span>30 days</span></p>
                    <h2>$2,260</h2>
                </div>
                <Link to="income">Details</Link>
            </section>
            <section className="host-dashboard-reviews">
                <h2>Review score</h2>
                <i className="fa-solid fa-star star"></i>
                <p>
                    <span>5.0</span>/5
                </p>
                <Link to="reviews">Details</Link>
            </section>
            <section className="host-dashboard-vans">
                <div className="top">
                    <h2>Your listed vans</h2>
                    <Link to="vans">View all</Link>
                </div>
                <Suspense fallback={<h3>Loading...</h3>}>
                    <Await resolve={loaderData.data}>{renderVanElements}</Await>
                </Suspense>
            </section>
        </>
    )
}
