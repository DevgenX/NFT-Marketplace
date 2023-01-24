import Navbar from "./Navbar";
import NFTTile from "./NFTTile";
import { useEffect, useState } from "react";

export default function Marketplace() {
  const sampleData = [
    {
      name: "DigBicks #1",
      description: "FlatSea First Edition NFT",
      image:
        "https://gateway.pinata.cloud/ipfs/QmXc5DLF81s1RLGbvZVhohjRTcjHciZ9CumccP56jwnk6Z/1.png",
      price: "0.03ETH",
      isSold: false,
    },
    {
      name: "DigBicks #2",
      description: "FlatSea Second Edition NFT",
      image:
        "https://gateway.pinata.cloud/ipfs/QmXc5DLF81s1RLGbvZVhohjRTcjHciZ9CumccP56jwnk6Z/2.png",
      price: "0.03ETH",
      isSold: false,
    },
    {
      name: "DigBicks #3",
      description: "FlatSea Third Edition NFT",
      image:
        "https://gateway.pinata.cloud/ipfs/QmXc5DLF81s1RLGbvZVhohjRTcjHciZ9CumccP56jwnk6Z/3.png",
      price: "0.03ETH",
      isSold: false,
    },
  ];
  const [data, updateData] = useState(sampleData);

  useEffect(() => {
    fetch("http://localhost:3000/NFT")
      .then((resp) => resp.json())
      .then((nft) => updateData(nft));
  }, []);

  return (
    <div>
      <Navbar></Navbar>
      <div className="flex flex-col place-items-center mt-20">
        <div className="md:text-xl font-bold text-white"> The Marketplace </div>
        <div className="flex mt-5 justify-between flex-wrap max-w-screen-xl text-center">
          {data.map((value, index) => {
            return <NFTTile data={value} key={index}></NFTTile>;
          })}
        </div>
      </div>
    </div>
  );
}
