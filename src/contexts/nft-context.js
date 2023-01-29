import { createContext, useState } from "react";

export const NFTContext = createContext({
  nftList: [],
  nftTotal: 0,
  newNftList: [],
});

export const NFTProvider = ({ children }) => {
  const [nftList, setNftList] = useState([]);
  const [nftTotal, setNftTotal] = useState(0);
  const [newNftList, setNewNftList] = useState([]);

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
