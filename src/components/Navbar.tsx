import '../Agri.css'
import { Link } from "react-router-dom";
export default function NavBar() {
  return (
    <nav id="navBar">
      <Link to="/">Home</Link>
      <Link to="/marketplace">MarketPlace</Link>
      <Link to="/dashboard">Dashboard</Link>
      <Link to="/traceability">Traceability</Link>
    </nav>
  );
}
