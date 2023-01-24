import Navbar from "./Navbar";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { NFTContext } from "../contexts/nft-context";

const initialData = {
  name: "",
  description: "",
  price: "",
  image: "",
};

const NFTForm = () => {
  const [formData, updateFormData] = useState(initialData);

  const { name, description, price, image } = formData;

  const { newNftList, setNewNftList } = useContext(NFTContext);

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "price") {
      updateFormData({ ...formData, [name]: parseInt(value) });
    } else {
      updateFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const configObj = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(formData),
    };

    fetch("http://localhost:3000/NFT", configObj)
      .then((resp) => resp.json())
      .then((nft) => setNewNftList([...newNftList, nft]));

    e.target.reset();
    navigate("/profile");
  };

  return (
    <div className="">
      <Navbar></Navbar>
      <div className="flex flex-col place-items-center mt-10" id="nftForm">
        <form
          className="bg-white shadow-md rounded px-8 pt-4 pb-8 mb-4"
          onSubmit={handleSubmit}
        >
          <h3 className="text-center font-bold text-black-500 mb-8">
            Create your own NFT
          </h3>
          <div className="mb-4">
            <label
              className="block text-black-500 text-sm font-bold mb-2"
              htmlFor="name"
            >
              NFT Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="name"
              type="text"
              placeholder="NFT #4242"
              onChange={handleChange}
              value={name}
            ></input>
          </div>
          <div className="mb-6">
            <label
              className="block text-black-500 text-sm font-bold mb-2"
              htmlFor="description"
            >
              NFT Description
            </label>
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              cols="40"
              rows="5"
              name="description"
              type="text"
              placeholder="DigBicks NFT Collection"
              value={description}
              onChange={handleChange}
            ></textarea>
          </div>
          <div className="mb-6">
            <label
              className="block text-black-500 text-sm font-bold mb-2"
              htmlFor="price"
            >
              Price (in FC)
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="number"
              placeholder="Min 0.01 FC"
              name="price"
              step="0.01"
              value={price}
              onChange={handleChange}
            ></input>
          </div>
          <div>
            <label
              className="block text-black-500 text-sm font-bold mb-2"
              htmlFor="image"
            >
              Upload Image
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              value={image}
              name="image"
              onChange={handleChange}
            ></input>
          </div>
          <br></br>
          {/* <div className="text-green text-center">{message}</div> */}
          <button className="font-bold mt-10 w-full bg-red-500 text-white rounded p-2 shadow-lg">
            Create NFT
          </button>
        </form>
      </div>
    </div>
  );
};

export default NFTForm;
