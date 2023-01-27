import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NFTForm from "./components/NFTform";
import Marketplace from "./components/Marketplace";
import Profile from "./components/Profile";
import NFTPage from "./components/NFTpage";
import { NFTProvider } from "./contexts/nft-context";
import { Web3ReactProvider } from "@web3-react/core";
import Web3 from "web3";

function getLibrary(provider) {
  return new Web3(provider);
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Web3ReactProvider getLibrary={getLibrary}>
        <NFTProvider>
          <Routes>
            <Route path="/" element={<Marketplace />} />
            <Route path="/nftForm" element={<NFTForm />} />
            <Route path="/nftPage/:tokenId" element={<NFTPage />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </NFTProvider>
      </Web3ReactProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
