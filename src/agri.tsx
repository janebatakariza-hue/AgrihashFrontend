import {BrowserRouter ,Routes,Route} from "react-router-dom"
import NavBar from './components/Navbar';
import Home from "./pages/Home";
import Dashboard from './pages/Dashboard';
import MarketPlace from './pages/MarketPlace';
import Traceability from './pages/Traceability';
 function AgriHash(){
return (
<BrowserRouter>
<NavBar/>
<Routes>
<Route path="/" element={<Home/>}/>
<Route path="/dashboard" element={<Dashboard/>}/>
<Route path="/marketplace" element={<MarketPlace/>}/>
<Route path="/traceability" element={<Traceability/>}/>



</Routes>


</BrowserRouter>


)



 }
 export default AgriHash;