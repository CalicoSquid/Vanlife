import Home from './Pages/Home';
import About from "./Pages/About";
import Vans, {loader as vanLoader} from "./Pages/Vans/Vans";
import VanDetail, {loader as vanDetailLoader} from "./Pages/Vans/VanDetail";
import Login, {loader as loginLoader, action as loginAction} from "./Pages/Login"
import Layout from "./Components/Layout";
import HostLayout from "./Pages/Host/HostLayout"
import HostVanDetails, {loader as hostVanDetailsLoader} from "./Pages/Host/HostVanDetails";
import HostVans, {loader as hostVanLoader} from "./Pages/Host/HostVans";
import Dashboard, {loader as dashboardLoader} from "./Pages/Host/Dashboard";
import Reviews from "./Pages/Host/Reviews";
import Income from "./Pages/Host/Income";
import HostVanInfo from './Pages/Host/HostVanInfo';
import HostVanPhotos from './Pages/Host/HostVanPhotos';
import HostVanPricing from './Pages/Host/HostVanPricing';
import NotFound from './Pages/NotFound';
import Error from "./Components/Error";
import { requireAuth } from './utils';
import './App.css';
import {RouterProvider, createBrowserRouter, createRoutesFromElements, Route} from "react-router-dom";
import "./server";

const router = 
  createBrowserRouter(
    createRoutesFromElements(
      <Route element={<Layout />} >
        <Route path="/" element={ <Home /> } />
        <Route path="about" element={ <About /> } />
        <Route 
        path="login" 
        element={<Login />}
        errorElement={<Error />}
        loader={loginLoader}
        action={loginAction}
        />
        <Route 
          path="vans" 
          element={<Vans />} 
          errorElement={<Error />}
          loader={vanLoader}
        />
        <Route 
          path="vans/:id" 
          element={<VanDetail />}
          errorElement={<Error />}
          loader={vanDetailLoader}
        />
        <Route path="host" element={<HostLayout />}>

          <Route 
            index 
            element={<Dashboard />} 
            errorElement={<Error />}
            loader={dashboardLoader} 
          />
          <Route 
            path="income" 
            element={<Income />} 
            errorElement={<Error />}
            loader={async ({request}) => await requireAuth(request)} 
          />
          <Route 
            path="reviews" 
            element={<Reviews />}
            errorElement={<Error />}
            loader={async ({request}) => await requireAuth(request)} 
          />
          <Route 
            path="vans" 
            element={<HostVans />} 
            errorElement={<Error />}
            loader={hostVanLoader} 
          />
          <Route 
            path="vans/:id" 
            element={<HostVanDetails />} 
            errorElement={<Error />}
            loader={hostVanDetailsLoader} 
          >
            <Route 
              index 
              element={<HostVanInfo />}
              loader={async ({request}) => await requireAuth(request)} 
            />
            <Route 
              path="pricing" 
              element={<HostVanPricing />} 
              loader={async ({request}) => await requireAuth(request)} 
            />
            <Route 
              path="photos" 
              element={<HostVanPhotos />} 
              loader={async ({request}) => await requireAuth(request)} 
            />
          </Route>
        </Route>
        <Route path="*" element={<NotFound />} />
      </Route>
    )
  )



function App() {
    return (
        <div className="App">
          <RouterProvider router={router} />
        </div>   
    );
  }
  
  export default App;
  