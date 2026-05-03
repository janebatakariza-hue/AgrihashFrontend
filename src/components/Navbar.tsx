import "../Agri.css";
import Logo from "../assets/logo.png";
import { Link } from "react-router-dom";
export default function NavBar() {
  return (
    <nav id="navBar">
      <div id="navLinks">
        <h1 className="logo">
          {" "}
          <img src={Logo} alt="logo" /> <span>AgriHash</span>{" "}
        </h1>
        <Link to="/">Home</Link>
        <Link to="/marketplace">MarketPlace</Link>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/traceability">Traceability</Link>
        
      </div>
      <div id="navRight">
        <button id="connectBtn">Connect Wallet</button>
      </div>
    </nav>
  );
}
