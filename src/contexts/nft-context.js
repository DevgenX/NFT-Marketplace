import { createContext, useState, useEffect } from "react";

export const NFTContext = createContext({
  nftList: [],
  nftTotal: 0,
  newNftList: [],
});

export const NFTProvider = ({ children }) => {
  const [nftList, setNftList] = useState([]);
  const [nftTotal, setNftTotal] = useState(0);
  const [newNftList, setNewNftList] = useState([]);

  // useEffect(() => {
  //   fetch("http://localhost:3000/NFT")
  //     .then((resp) => resp.json())
  //     .then((nft) => setNftList(nft));
  // }, [setNftList]);

  const value = {
    nftList,
    nftTotal,
    setNftList,
    setNftTotal,
    newNftList,
    setNewNftList,
  };

  return <NFTContext.Provider value={value}>{children}</NFTContext.Provider>;
};
