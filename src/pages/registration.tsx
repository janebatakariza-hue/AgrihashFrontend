import {
  Sprout,
  Factory,
  Warehouse,
  Truck,
  ClipboardCheck,
  Search,
  Store,
} from "lucide-react";
import "./Registration.css";
function Registration() {
  return (
    <div className="page">
      <nav className="navbar">
        <div className="nav-logo">
          {/* <img src={logo} alt="agrihash logo" /> */}
          <span>Agrihash</span>
        </div>
        <div className="nav-actions">
          <button className="wallet-btn">0x1234...5678</button>
        </div>
      </nav>
      <main className="main-card">
        <div className="stepper">
          <p>Step 1 of 3</p>
          <div className="step-tabs">
            <button className="active">Profile</button>
            <button>Role details</button>
            <button>Documents</button>
          </div>
        </div>

        <div className="role">
          <div className="role-header">
            <h1>What best describes you?</h1>
            <p>Your role determines what you can do on the platform.</p>
          </div>
          <div className="role-grid">
            <div className="role-card selected">
              <Sprout size={32} color="#2d5a3d" />
              <h3>Farming Enterprise</h3>
              <p>Grow and register crop batches.</p>
            </div>
            <div className="role-card">
              <Factory size={32} color="#1c3829" />
              <h3>Agro-Processing</h3>
              <p>Buy raw produce,process and resell</p>
            </div>
            <div className="role-card">
              <Warehouse size={32} color="#1c3829" />
              <h3>Warehouse Enterprise</h3>
              <p>Store batches,issue custody receipts</p>
            </div>
            <div className="role-card">
              <Truck size={32} color="#1c3829" />
              <h3>Transport Company</h3>
              <p>Transport ready products to the market</p>
            </div>
            <div className="role-card">
              <ClipboardCheck size={32} color="#1c3829" />
              <h3>Inspector</h3>
              <p>Certify and grade batches</p>
            </div>
            <div className="role-card">
              <Search size={32} color="#1c3829" />
              <h3>Auditor</h3>
              <p>Audit full supply chains</p>
            </div>
            <div className="role-card">
              <Store size={32} color="#1c3829" />
              <h3>Retailer</h3>
              <p>Buy from marketplace</p>
            </div>
          </div>

          <div className="role-footer">
            <button className="continue-btn">Continue</button>
            <p>
              End consumers need no account. The traceability portal is fully
              public.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
export default Registration;
