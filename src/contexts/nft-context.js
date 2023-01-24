import { createContext, useState, useEffect } from "react";

export const NFTContext = createContext({
  nftList: [],
  nftTotal: 0,
});

export const NFTProvider = ({ children }) => {
  const [nftList, setNftList] = useState([]);
  const [nftTotal, setNftTotal] = useState(0);

  const value = {
    nftList,
    nftTotal,
  };

  return <NFTContext.Provider value={value}>{children}</NFTContext.Provider>;
};
