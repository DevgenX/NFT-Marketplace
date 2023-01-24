import "./App.css";
import Marketplace from "./components/Marketplace";
import Profile from "./components/Profile";
import NFTForm from "./components/NFTform";
import NFTPage from "./components/NFTpage";
import { BrowserRouter as Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<Marketplace />} />
        <Route path="/nftPage" element={<NFTPage />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/NFTForm" element={<NFTForm />} />
      </Routes>
    </div>
  );
};

export default App;
