import arrow_emoji from "../assets/arrow_emoji.png";
import wallet_emoji from "../assets/wallet_emoji.png";
import '../Agri.css';
export default function Home() {
  return (
    <div id="home">
      <button className="futureAgriculture">The Future Of Agriculture</button>
      <h1 className="farmTable">
        Farm-to-Table,
        <br/>  <br/> On-Chain
      </h1>
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
