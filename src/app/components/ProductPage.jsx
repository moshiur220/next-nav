// pages/index.js
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus, faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

const ProductPage = () => {
  return (
    <div className="container mx-auto  py-8">
      <div className="flex flex-col sm:flex-row">
        {/* Left Section: Image Gallery */}
        <div className="md:w-1/2 flex flex-col items-center">
          <Image
            src="/images/chair.jpg"
            alt="Designer Chair"
            width={500}
            height={500}
          />
          <div className="flex mt-4 overflow-x-auto ">
            <Image
              src="/images/chair.jpg"
              alt="Thumbnail 1"
              width={100}
              height={100}
              className="mr-2 cursor-pointer"
            />
            <Image
              src="/images/basket.jpg"
              alt="Thumbnail 2"
              width={100}
              height={100}
              className="mr-2 cursor-pointer"
            />
            <Image
              src="/images/sofa.jpg"
              alt="Thumbnail 3"
              width={100}
              height={100}
              className="mr-2 cursor-pointer"
            />
            <Image
              src="/images/sofa.jpg"
              alt="Thumbnail 3"
              width={100}
              height={100}
              className="mr-2 cursor-pointer"
            />
          </div>
        </div>
        <div className="md:w-1/2 flex flex-col">
          <h2 className="text-2xl font-bold mb-2 py-2">
            Designer Luxuary Living Furniture Collections
          </h2>
          <p className="text-md text-gray-500">12 Pc(s)</p>
          <div className="flex py-2">
            <span className="text-2xl font-bold">$20</span>
            <span className="text-gray-500 font-thin line-through ml-2">
              $25
            </span>
          </div>
          {/* add to card input and button */}

          <div className="flex mt-2 justify-around sm:justify-normal">
            <div className="flex bg-pink-500 items-center  justify-between rounded-lg ">
              <button className="text-white bg-pink-500 py-3 px-3 rounded-l-lg border-r-2 border-solid border-wite hover:bg-pink-600 transition duration-300">
                <FontAwesomeIcon icon={faMinus} />
              </button>
              <span className=" text-white text-lg font-semibold px-10">1</span>
              <button className="text-white bg-pink-500 py-3 px-3 border-l-2 border-solid border-wite rounded-r-lg hover:bg-pink-600 transition duration-300">
                <FontAwesomeIcon icon={faPlus} />
              </button>
            </div>
            <button className="text-white  bg-pink-600 px-3 sm:ml-20   rounded-lg hover:bg-pink-700 transition duration-300">
          Buy Now
        </button>
          </div>
          <span className="mt-5">
            18 -22 pcs

      Buy regular potato from us which provides you with dietary fiber, potassium, 
      vitamins, etc. Regular potato provides 9-10 percent of your daily need. Regular 
      potatoes offer more of this nutrient which helps control your blood pressure. 
      Make a good curry with regular potato. You can make French fries and you can enjoy with your family members
      Buy regular potato from us which provides you with dietary fiber, potassium, 
      vitamins, etc. Regular potato provides 9-10 percent of your daily need. Regular 
      potatoes offer more of this nutrient which helps control your blood pressure. 
      Make a good curry with regular potato. You can make French fries and you can enjoy with your family members
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
