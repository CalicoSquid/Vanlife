import Navbar from "../Components/Navbar"
import camping from "../Images/image 55.png"
import { Link } from "react-router-dom"


export default function About() {

    const imageStyles = {
       width: "100%",
       height: "300px",
       objectFit: "cover",
    }
    return (
            <div className="page about">
                <img src={camping} style={imageStyles} alt="Man sitting on camper van roof"/>
                <h1>Don’t squeeze in a sedan when you could relax in a van.</h1>
                <p>Our mission is to enliven your road trip with the perfect travel van rental.
                     Our vans are recertified before each trip to ensure your travel plans can go off without a hitch.
                    <br/>
                    (Hitch costs extra 😉)
                    <br/>
                    <br/>
                    Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels.
                </p>
                <div className="box-container">
                <div id="explore--box">
                    <h2>Your destination is waiting.
                        <br/>
                        Your van is ready.
                    </h2>
                    <Link to="/vans" className="link">Explore our vans</Link>
                </div>
                </div>
                <br/>
            </div>             
    )
}