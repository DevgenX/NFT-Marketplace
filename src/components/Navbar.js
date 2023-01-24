import fullLogo from "../full_logo.png";
import { Link } from "react-router-dom";
import { useLocation } from "react-router";

const Navbar = () => {
  // const [connected, toggleConnect] = useState(false);
  const location = useLocation();

  // const toggleButton = () => {
  //   toggleConnect(!connected);
  // };

  return (
    <div className="">
      <nav className="w-screen">
        <ul className="flex items-end justify-between py-3 bg-transparent text-white pr-5">
          <li className="flex items-end ml-5 pb-2">
            <Link to="/">
              <img
                src={fullLogo}
                alt=""
                width={120}
                height={120}
                className="inline-block -mt-2"
              />
              <div className="inline-block font-bold text-xl ml-2">
                NFT Marketplace
              </div>
            </Link>
          </li>
          <li className="w-2/6">
            <ul className="lg:flex justify-between font-bold mr-10 text-lg">
              {location.pathname === "/" ? (
                <li className="border-b-2 hover:pb-0 p-2">
                  <Link to="/">Marketplace</Link>
                </li>
              ) : (
                <li className="hover:border-b-2 hover:pb-0 p-2">
                  <Link to="/">Marketplace</Link>
                </li>
              )}
              {location.pathname === "/nftForm" ? (
                <li className="border-b-2 hover:pb-0 p-2">
                  <Link to="/nftForm">Create NFT</Link>
                </li>
              ) : (
                <li className="hover:border-b-2 hover:pb-0 p-2">
                  <Link to="/nftForm">Create NFT</Link>
                </li>
              )}
              {location.pathname === "/profile" ? (
                <li className="border-b-2 hover:pb-0 p-2">
                  <Link to="/profile">Profile</Link>
                </li>
              ) : (
                <li className="hover:border-b-2 hover:pb-0 p-2">
                  <Link to="/profile">Profile</Link>
                </li>
              )}

              <li className="hover:border-b-2 hover:pb-0 p-2">
                <h2>Wallet: 5 $FC</h2>
              </li>
              {/* <li>
                <button
                  className="enableEthereumButton bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-sm"
                  onClick={toggleButton}
                >
                  {connected ? "Connected" : "Connect Wallet"}
                </button>
              </li> */}
            </ul>
          </li>
        </ul>
      </nav>
      {/* <div className="text-white text-bold text-right mr-10 text-sm">
        {connected ? "" : "Not Connected. Please login to view NFTs"}{" "}
      </div> */}
    </div>
  );
};

export default Navbar;
