export function LandingPage() {
  return (
    <>
      <nav className="navbar">
        <h1>AgriHash</h1>
        <ul className="nav-links">
          <li>
            <a href="#home">How it works</a>
          </li>
          <li>
            <a href="#about">Who it's for</a>
          </li>
          <li>
            <a href="#contact">Why AgriHash</a>
          </li>
        </ul>
      </nav>

      <div className="hero-section">
        <h3> Bringing trust to every step of your food supply chain</h3>
        <p>
          AgriHash records every handoff, payment, and certification permanently
          — so every farmer, business, and consumer knows exactly what happened
          and when.
        </p>
        <button>Get Started</button>
      </div>
      <div className="problems-section">
        <div className="foodfraud">
          <h3>Food fraud is everywhere</h3>
          <p>
            Fake certifications and mislabeled produce cost the industry
            billions every year.
          </p>
        </div>
        <div className="accountability">
          <h3>No one is accountable</h3>
          <p>
            {" "}
            When something goes wrong, no one can prove who is responsible.
          </p>
        </div>
        <div className="paymentdisputes">
          <h3>Payments cause disputes</h3>
          <p>
            Farmers wait months to get paid , with no guarantee of fairness.
          </p>
        </div>
      </div>

      <div className="solution-section">
        <div className="step1">
          <h3>Step 1</h3>
          <p>Create your account and pick your role</p>
        </div>
        <div className="step2">
          <h3>Step 2</h3>
          <p>Record your part of the journey on the platform</p>
        </div>
        <div className="step3">
          <h3>Step 3</h3>
          <p>Payments happen automatically and fairly on delivery</p>
        </div>
        <div className="step4">
          <h3>Step 4 </h3>
          <p>Any one can verify where a product came from instantly</p>
        </div>
      </div>

      <div className="who-section">
        <div className=" farmers">
          <h3>Farmers</h3>
          <p>Get paid fairly and prove your produce is genuine</p>
        </div>
        <div className="processors">
          <h3>Processors</h3>
          <p>Show exactly what went wrong into your product</p>
        </div>
        <div className="warehouses">
          <h3>Warehouses</h3>
          <p>Prove goods were stored correctly</p>
        </div>
        <div className="transporters">
          <h3>Transporters</h3>
          <p>Stay protected in every dispute</p>
        </div>
        <div className="inspectors">
          <h3>Inspectors</h3>
          <p>Issue certifications that can never be faked</p>
        </div>
        <div className="auditors">
          <h3>Auditors</h3>
          <p>Verify supply chains with unalterable evidence.</p>
        </div>
        <div className="retailers">
          <h3>Retailers</h3>
          <p>Source confidently and pay without risk</p>
        </div>
        <div className="consumers">
          <h3>Consumers</h3>
          <p>Know exactly where your food came from</p>
        </div>
      </div>
      <div className="why">
        <div className="why-section">
          <ol>
            <li>
              <h3>No more fraud</h3>
            </li>
            <p>
              Every record is permanent and tamper-proof — no one can alter it
              after the fact.
            </p>
            <li>
              <h3>No more payment disputes</h3>
            </li>
            <p>
              Money moves automatically when both sides agree — no middlemen, no
              delays.
            </p>
            <li>
              <h3>No more guessing</h3>
            </li>
            <p>
              Full visibility for everyone in the chain — from farm to shelf.
            </p>
          </ol>
        </div>
      </div>
      <div className="calltoaction">
        <p>Ready to join the transparent supply chain?</p>
        <button>Get Started</button>
      </div>
      <footer className="footer">
        <h3>AgriHash</h3>
        <p>Contact</p>
        <p>Docs</p>
        <p>Privacy Policy</p>
      </footer>
    </>
  );
}
