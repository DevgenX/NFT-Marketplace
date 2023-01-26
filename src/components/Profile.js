import Navbar from "./Navbar";
import { useContext } from "react";
import NFTCard from "./NFTCard";
import { NFTContext } from "../contexts/nft-context";

let total = 0;
const Profile = () => {
  const { newNftList } = useContext(NFTContext);
  // const [totalPrice, updateTotalPrice] = useState(0);

  const value = newNftList.map((nft) => {
    total = newNftList.length * nft.price;
    return total;
  });

  return (
    <div className="profileClass" style={{ "min-height": "100vh" }}>
      <Navbar></Navbar>
      <div className="profileClass">
        <div className="flex text-center flex-col mt-11 md:text-2xl text-white">
          <div className="mb-5">
            <h2 className="font-bold">Owner</h2>
            YOU
          </div>
        </div>
        <div className="flex flex-row text-center justify-center mt-10 md:text-2xl text-white">
          <div>
            <h2 className="font-bold">No. of NFTs</h2>
            {newNftList?.length}
          </div>
          <div className="ml-20">
            <h2 className="font-bold">Total Value</h2>
            {`${value}:  FlatCoins`}
          </div>
        </div>
        <div className="flex flex-col text-center items-center mt-11 text-white">
          <h2 className="font-bold">Your NFTs</h2>
          <div className="flex justify-center flex-wrap max-w-screen-xl">
            {newNftList?.map((value, index) => {
              return <NFTCard data={value} key={index}></NFTCard>;
            })}
          </div>
          <div className="mt-10 text-xl">
            {newNftList?.length === 0
              ? "Oops, No NFT data to display (Have you created one?)"
              : ""}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
