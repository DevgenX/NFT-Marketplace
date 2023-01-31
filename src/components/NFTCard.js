import { Link } from "react-router-dom";
import logo from "../defaultpic.png";

const NFTCard = ({ data }) => {
  const newTo = {
    pathname: "/nftPage/" + data.id,
  };

  return (
    <Link to={newTo}>
      <div className="border-2 ml-12 mt-5 mb-12 flex flex-col items-center rounded-lg w-55 md:w-72 shadow-2xl">
        <img
          className="w-72 h-80 rounded-lg object-cover"
          src={data.image}
          alt={data.image}
          onError={({ currentTarget }) => {
            currentTarget.onerror = null;
            currentTarget.src = logo;
          }}
        />
        <div className="text-white w-full p-2 bg-gradient-to-t from-[#454545] to-transparent rounded-lg pt-12 -mt-20">
          <strong className="text-xl">{data.name}</strong>
          {/* <p className="display-inline">{data.description}</p> */}
        </div>
      </div>
    </Link>
  );
};



export default NFTCard;
