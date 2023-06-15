import {useOutletContext} from "react-router-dom"

export default function HostVanPricing() {
    const van = useOutletContext();

    return (
        <div className="host-van-info">
            <h2>${van.price}.00 <span className="per-day">/day</span></h2>
        </div>
    )
}