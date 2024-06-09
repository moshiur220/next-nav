// pages/index.js
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';

const ProductPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row">
        {/* Left Section: Image Gallery */}
        <div className="md:w-1/2 flex flex-col items-center">
          <Image src="/images/chair.jpg" alt="Designer Chair" width={500} height={500} />
          <div className="flex mt-4">
            <Image src="/images/chair.jpg" alt="Thumbnail 1" width={100} height={100} className="mr-2 cursor-pointer" />
            <Image src="/images/basket.jpg" alt="Thumbnail 2" width={100} height={100} className="mr-2 cursor-pointer" />
            <Image src="/images/sofa.jpg" alt="Thumbnail 3" width={100} height={100} className="mr-2 cursor-pointer" />
          </div>
        </div>

        {/* Right Section: Product Details */}
        <div className="md:w-1/2 md:pl-10">
          <h2 className="text-2xl font-bold mb-2">Designer Luxuary Living Furniture Collections</h2>
          <div className="flex items-center mb-2">
            <div className="text-yellow-500">
              <FontAwesomeIcon icon={["fas", "star"]} />
              <FontAwesomeIcon icon={["fas", "star"]} />
              <FontAwesomeIcon icon={["fas", "star"]} />
              <FontAwesomeIcon icon={["fas", "star"]} />
              <FontAwesomeIcon icon={["fas", "star"]} />
            </div>
            <p className="text-gray-500 ml-2">(2 Customer Reviews)</p>
          </div>
          <div className="text-3xl text-gray-900 mb-2">
            <span>$671.73</span> <span className="line-through text-gray-500">$991.45</span>
          </div>
          <p className="mb-4">
            Crescendo lacusque ut ultramque. Rapidisqur descen Diversa plagae minantia terras!
            Naturae super perveniunt Fixo fronde tellure orbis consistere margine sole toto tu
            Turba tuba surgere eodem. Nubibus ille in saidul
          </p>
          <ul className="list-disc list-inside mb-4">
            <li>Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit.</li>
            <li>Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing.</li>
            <li>Lorem Ipsum Dolor Sit Amet Consectetur Adipi.</li>
          </ul>
          <div className="mb-4">
            <span className="font-bold">Color :</span>
            <button className="ml-2 w-6 h-6 rounded-full bg-blue-500"></button>
            <button className="ml-2 w-6 h-6 rounded-full bg-pink-500"></button>
            <button className="ml-2 w-6 h-6 rounded-full bg-orange-500"></button>
            <button className="ml-2 w-6 h-6 rounded-full bg-purple-500"></button>
          </div>
          <div className="mb-4">
            <p><span className="font-bold">Category :</span> Home, Bed, Sofa</p>
            <p><span className="font-bold">Tags :</span> Home, Furniture</p>
          </div>
          <div className="flex items-center mb-4">
            <button className="bg-gray-200 text-gray-600 py-1 px-3 rounded-lg hover:bg-gray-300 transition duration-300">
              <FontAwesomeIcon icon={["fas", "minus"]} />
            </button>
            <span className="mx-2 text-lg font-semibold">1</span>
            <button className="bg-gray-200 text-gray-600 py-1 px-3 rounded-lg hover:bg-gray-300 transition duration-300">
              <FontAwesomeIcon icon={["fas", "plus"]} />
            </button>
            <button className="flex-1 bg-yellow-600 text-white py-2 px-4 ml-4 rounded-lg hover:bg-yellow-700 transition duration-300">
              Add To Cart
            </button>
          </div>
          <div className="flex items-center">
            <button className="text-gray-600 bg-gray-200 py-2 px-3 rounded-lg hover:bg-gray-300 transition duration-300">
              <FontAwesomeIcon icon={["fas", "heart"]} />
            </button>
            <button className="text-gray-600 bg-gray-200 py-2 px-3 ml-2 rounded-lg hover:bg-gray-300 transition duration-300">
              <FontAwesomeIcon icon={["fas", "sync"]} />
            </button>
          </div>
          <div className="flex mt-4">
            <span className="mr-2">Share :</span>
            <FontAwesomeIcon icon={["fab", "facebook-f"]} className="text-blue-600 mx-2 cursor-pointer" />
            <FontAwesomeIcon icon={["fab", "pinterest-p"]} className="text-red-600 mx-2 cursor-pointer" />
            <FontAwesomeIcon icon={["fab", "instagram"]} className="text-pink-600 mx-2 cursor-pointer" />
            <FontAwesomeIcon icon={["fab", "google-plus-g"]} className="text-red-600 mx-2 cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
