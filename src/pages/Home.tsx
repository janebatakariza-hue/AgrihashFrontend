import arrow_emoji from "../assets/arrow_emoji.png";
import wallet_emoji from "../assets/wallet_emoji.png";
import "../Agri.css";
import LandingPage from "./LandingPage";
export default function Home() {
  return (
    <div id="home">
      
      <svg
        className="blobTopRight"
        viewBox="0 0 300 300"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M250 50 C300 80, 320 150, 280 210 C240 270, 150 300, 90 270 C30 240, 10 160, 40 100 C70 40, 150 10, 200 20 C225 25, 240 35, 250 50Z"
          fill="#d4e8c2"
          opacity="0.7"
        />
      </svg>

  
      <svg
        className="blobBottomRight"
        viewBox="0 0 120 130"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M60 5 C85 0, 118 20, 115 55 C112 85, 95 125, 65 125 C35 125, 5 100, 8 65 C11 30, 35 10, 60 5Z"
          fill="#c8ddb0"
          opacity="0.8"
        />
      </svg>

     
      <svg
        className="blobBottomLeft"
        viewBox="0 0 80 80"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M40 5 C60 0, 78 15, 76 38 C74 58, 60 78, 38 76 C18 74, 2 58, 5 36 C8 15, 22 10, 40 5Z"
          fill="grey"
          stroke="#1a3a2a"
          strokeWidth="2"
          opacity="0.4"
        />
      </svg>
      <button className="futureAgriculture">The Future Of Agriculture</button>
      <h1 className="farmTable">
        Farm-to-Table,
        <br /> <br /> On-Chain
      </h1>
      <br />
      <br />
      <p className="pars">
        Transparent agricultural supply chains powered by blockchain <br />
        technology.From seed to table,every step verified and <br /> immutable.
      </p>
      <button className="GetStarted">
        Get Started <img src={arrow_emoji} />
      </button>
      <button className="connectWallet">
        Connect Wallet <img src={wallet_emoji} />
      </button>
    </div>
  );
}
