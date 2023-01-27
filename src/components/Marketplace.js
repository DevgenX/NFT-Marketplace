import Navbar from "./Navbar";
import NFTCard from "./NFTCard";
import { useContext } from "react";
import { NFTContext } from "../contexts/nft-context";
import { useWeb3React } from "@web3-react/core";

const Marketplace = () => {
  const { nftList } = useContext(NFTContext);
  // const { activate } = useWeb3React();
  // console.log(activate);

  return (
    <div>
      <Navbar></Navbar>
      <div className="flex flex-col place-items-center mt-20">
        <div className="md:text-xl font-bold text-white">NFT Marketplace</div>
        <div className="flex mt-5 justify-between flex-wrap max-w-screen-xl text-center">
          {nftList.map((value, index) => {
            return <NFTCard data={value} key={index}></NFTCard>;
          })}
        </div>
      </div>
    </div>
  );
};

export default Marketplace;
