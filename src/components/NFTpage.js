import Navbar from "./Navbar";

import { useLocation, useParams } from "react-router-dom";

import { useState } from "react";

const NFTPage = (props) => {
  const [data, updateData] = useState({});
  const [message, updateMessage] = useState("");

  const handleBuyNFT = () => {};

  return (
    <div style={{ "min-height": "100vh" }}>
      <Navbar></Navbar>
      <div className="flex ml-20 mt-20">
        <img src={data.image} alt="" className="w-2/5" />
        <div className="text-xl ml-20 space-y-8 text-white shadow-2xl rounded-lg border-2 p-5">
          <div>Name: {data.name}</div>
          <div>Description: {data.description}</div>
          <div>
            Price: <span className="">{data.price + " ETH"}</span>
          </div>
          {/* <div>
            Owner: <span className="text-sm">{data.owner}</span>
          </div>
          <div>
            Seller: <span className="text-sm">{data.seller}</span>
          </div> */}
          <div>
            <button className="enableEthereumButton bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-sm">
              Buy this NFT
            </button>
            <div className="text-green text-center mt-3">{message}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NFTPage;
