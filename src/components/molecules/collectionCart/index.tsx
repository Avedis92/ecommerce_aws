import { useNavigate } from "react-router-dom";
import { IProduct } from "../../../shared/types";

const CollectionCart = (props: IProduct) => {
  const { id, imageSource, price, title } = props;
  const navigate = useNavigate();
  const navigateToDetailsPage = () => {
    navigate(`/products/${id}`);
  };
  return (
    <div className="w-60 h-80 bg-white rounded-xl cursor-pointer relative">
      <div
        className="bg-black opacity-0 text-white 
      font-bold absolute top-3/4 left-0 right-0 bottom-0 rounded-xl
      flex justify-center items-center transform transition duration-800 ease-in-out 
      hover:opacity-80 hover:top-0"
      >
        <button
          className="border-2 border-solid border-white
        text-xl cursor-pointer rounded-s text-white py-4 px-2 bg-none transform transition duration-200 ease-in-out
        hover:scale-110 active:scale-90"
          onClick={navigateToDetailsPage}
        >
          Get more details
        </button>
      </div>
      <img
        className="w-full h-3/4 object-contain object-center mt-4"
        src={imageSource}
      />
      <div>
        <p className="mb-2 mt-0 mr-0 ml-0">{title}</p>
        <p className="mb-2 mt-0 mr-0 ml-0">{price}$</p>
      </div>
    </div>
  );
};

export default CollectionCart;
