import Navbar from "./Navbar";
import logo from "../defaultpic.png";

import { useParams } from "react-router-dom";

import { useState, useContext, useEffect } from "react";
import { NFTContext } from "../contexts/nft-context";

const shuffle = (a) => {
  const result = Math.floor(Math.random() * a.length);

  return a[result];
};

var myArray = [
  "Dorothy",
  "Gabriella",
  "Brendan",
  "Reese",
  "Ricardo",
  "Ivan",
  "Aura",
  "Seb",
  "Alina",
];
let shuffled = shuffle(myArray);
let shuffled2 = shuffle(myArray);

const NFTPage = () => {
  const [selectedNFT, setSelectedNFT] = useState({});

  const params = useParams();
  const { nftList } = useContext(NFTContext);
  useEffect(() => {
    const nft = nftList.find((nfts) => nfts.id === parseInt(params?.tokenId));
    setSelectedNFT(nft);
  }, [params?.tokenId, nftList]);

  return (
    <div style={{ "min-height": "100vh" }}>
      <Navbar></Navbar>
      <div className="flex ml-20 mt-20">
        <img
          className="w-2/5"
          src={selectedNFT?.image}
          alt={selectedNFT?.image}
          onError={({ currentTarget }) => {
            currentTarget.onerror = null;
            currentTarget.src = logo;
          }}
        />
        {/* <img src={selectedNFT?.image} alt="" className="w-2/5" /> */}
        <div className="text-xl ml-20 space-y-8 text-white shadow-2xl rounded-lg border-2 p-5">
          <div>
            Name:
            {selectedNFT?.name
              ? selectedNFT?.name
              : `DigBicks #${selectedNFT?.id}`}
          </div>
          <div>
            Description:
            {selectedNFT?.description
              ? selectedNFT?.description
              : "Diggie Bickies Diggie Bickies"}
          </div>
          <div>
            Price: <span className="">{selectedNFT?.price + " FC"}</span>
          </div>
          <div>
            Owner: <span className="text-sm">{shuffled}</span>
          </div>
          <div>
            Seller: <span className="text-sm">{shuffled2}</span>
          </div>
          <div>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-sm">
              Buy this NFT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NFTPage;
