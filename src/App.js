import "./App.css";
import Navbar from "./components/Navbar.js";
import Marketplace from "./components/Marketplace";
import Profile from "./components/Profile";
import SellNFT from "./components/SellNFT";
import NFTPage from "./components/NFTpage";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

const App = () => {
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
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<Marketplace />} />
        <Route path="/nftPage" element={<NFTPage />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/sellNFT" element={<SellNFT />} />
      </Routes>
    </div>
  );
};

export default App;
