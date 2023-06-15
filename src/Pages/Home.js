import Navbar from "../Components/Navbar"
import { Link } from "react-router-dom"

export default function Home() {
  return (
        <div className="page home">
          <h1>You got the travel plans, we got the travel vans.</h1>
          <p>
            Add adventure to your life by joining the #vanlife movement.
            <br/>
            Rent the perfect van to make your perfect road trip.</p>
            <div className="box-container">
              <Link to="/vans">Find your van</Link>
            </div>
            <br/>
        </div>  
  );
}

