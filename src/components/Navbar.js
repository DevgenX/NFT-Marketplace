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
            </ul>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
