import fullLogo from "../full_logo.png";
import { Link } from "react-router-dom";
import { useLocation } from "react-router";
import { useEffect, useState, useContext } from "react";

import { NFTContext } from "../contexts/nft-context";

import { useWeb3React } from "@web3-react/core";
import { injected } from "./Wallet";

const Navbar = () => {
  const { setNftList } = useContext(NFTContext);
  const [connected, toggleConnect] = useState(false);
  const location = useLocation();

  const { active, account, activate, deactivate } = useWeb3React();

  useEffect(() => {
    if (connected) {
      fetch("http://localhost:3000/NFT")
        .then((resp) => resp.json())
        .then((nft) => setNftList(nft));
    }

    // return () => {
    //   try {
    //     console.log("Deactivating Wallet...");
    //     deactivate(injected);
    //   } catch (ex) {
    //     console.log(ex);
    //   }
    // };
  }, [connected, setNftList, deactivate]);

  const toggleButton = async () => {
    try {
      await activate(injected);
      toggleConnect(!connected);
    } catch (ex) {
      console.log(ex);
    }
  };

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

              {/* <li className="hover:border-b-2 hover:pb-0 p-2">
                <h2>Wallet: 5 $FC</h2>
              </li> */}
              {
                <li>
                  <button
                    className="enableEthereumButton bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-sm"
                    onClick={toggleButton}
                  >
                    {/* <img className="w-2/3" src={logo} alt={logo} /> */}
                    {connected ? account.slice(0, 5) : "Connect Wallet"}
                  </button>
                </li>
              }
            </ul>
          </li>
        </ul>
      </nav>
      <div className="text-white text-bold text-right mr-10 text-sm">
        {connected ? "" : "Not Connected. Please login to view NFTs"}
      </div>
    </div>
  );
};

export default Navbar;
