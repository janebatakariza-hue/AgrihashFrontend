import "./Landing.css";
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";
import React, { useState, useEffect } from "react";

function LandingPage() {
  const images: string[] = [img1, img2, img3];
  const [current, setCurrent] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);
  const prev = () =>
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  const next = () => setCurrent((prev) => (prev + 1) % images.length);
  return (
    <div className="landing-page">
      <nav className="navbar">
        <h1>AgriHash</h1>
        <ul className="nav-links">
          <a href="#home">How it works</a>

          <a href="#about">Who it's for</a>

          <a href="#contact">Why AgriHash</a>
        </ul>
      </nav>

      <div id="home">
        <div className="slideshow">
          <button className="slide-btn" onClick={prev}>
            ‹
          </button>
          <img src={images[current]} className="slide-img" alt="slide" />
          <button className="slide-btn" onClick={next}>
            ›
          </button>

          {/* dots indicator */}
          <div className="dots">
            {images.map((_, i) => (
              <span
                key={i}
                className={i === current ? "dot active" : "dot"}
                onClick={() => setCurrent(i)}
              />
            ))}
          </div>
        </div>
        <h3> Bringing trust to every step of your food supply chain</h3>
        <p>
          AgriHash records every handoff, payment, and certification permanently
          — so every farmer, business, and consumer knows exactly what happened
          and when.
        </p>
        <button>Get Started</button>
      </div>
      <h3 className="problemp">The Problems</h3>
      <div className="problems-section">
        <div className="card-stack">
          <div className="foodfraud card">
            <h3>Food fraud is everywhere</h3>
            <p>
              Fake certifications and mislabeled produce cost the industry
              billions every year.
            </p>
          </div>
          <div className="accountability card">
            <h3>No one is accountable</h3>
            <p>
              {" "}
              When something goes wrong, no one can prove who is responsible.
            </p>
          </div>
          <div className="paymentdisputes card">
            <h3>Payments cause disputes</h3>
            <p>
              Farmers wait months to get paid , with no guarantee of fairness.
            </p>
          </div>
        </div>
      </div>
      <h3 className="howp">How AgriHash works </h3>
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
      <h3 className="whop">Who is AgriHash for? </h3>
      <div id="about">
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
      <h3 className="promisep">What we promise</h3>
      <div id="contact">
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

        <div
          className="footpar"
          style={{
            display: "flex",
            gap: "20px",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          <p>Contact</p>
          <p>Docs</p>
          <p>Privacy Policy</p>
        </div>
      </footer>
    </div>
  );
}
export default LandingPage;
