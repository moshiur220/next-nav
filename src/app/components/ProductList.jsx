import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus, faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';

const products = [
  { name: "Grapes", img: "/images/image-1.png", price: "$10.00", oldPrice: "$16.00" },
  { name: "Cherries", img: "/images/image-2.png", price: "$10.00", oldPrice: "$16.00" },
  { name: "Blueberry", img: "/images/image-3.png", price: "$10.00", oldPrice: "$16.00" },
  { name: "Raspberry", img: "/images/image-4.png", price: "$10.00", oldPrice: "$16.00" },
  { name: "Smoothie Blueberry", img: "/images/image-5.png", price: "$10.00", oldPrice: "$16.00" },
  { name: "Avocado", img: "/images/image-6.png", price: "$10.00", oldPrice: "$16.00" },
  { name: "Guava", img: "/images/image-7.png", price: "$10.00", oldPrice: "$16.00" },
  { name: "Red Peach", img: "/images/image-8.png", price: "$10.00", oldPrice: "$16.00" },
  { name: "Carrot", img: "/images/image-9.png", price: "$10.00", oldPrice: "$16.00" },
  { name: "Pomegranate", img: "/images/image-10.png", price: "$10.00", oldPrice: "$16.00" },
  { name: "Strawberries", img: "/images/image-11.png", price: "$10.00", oldPrice: "$16.00" },
  { name: "Sliced Fig", img: "/images/image-12.png", price: "$10.00", oldPrice: "$16.00" },
  { name: "Sliced Papaya", img: "/images/image-13.png", price: "$10.00", oldPrice: "$16.00" },
  { name: "Brown Almond", img: "/images/image-14.png", price: "$10.00", oldPrice: "$16.00" },
  { name: "Corns", img: "/images/image-15.png", price: "$10.00", oldPrice: "$16.00" },
  { name: "Bundle", img: "/images/image-16.png", price: "$10.00", oldPrice: "$16.00" },
  { name: "pink Leaves", img: "/images/image-17.png", price: "$10.00", oldPrice: "$16.00" },
  { name: "Under the Garlic", img: "/images/image-18.png", price: "$10.00", oldPrice: "$16.00" },
];

const ProductList = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
        {products.map((product, index) => (
          <div
            key={index}
            className="bg-white border rounded-lg overflow-hidden shadow-md transition-transform duration-300 transform hover:shadow-pink-300 hover:scale-105"
          >
            <img src={product.img} alt={product.name} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-md text-gray-500 text-center">{product.name}</h3>
              <p className="text-sm text-gray-400  text-center">12 Pc(s)</p>
              <div className="flex  justify-center">
                <span className="text-pink-600 text-md">{product.price}</span>
                <span className="text-gray-500 font-thin line-through ml-2">{product.oldPrice}</span>
              </div>
              <div className="flex items-center">
                <button className='flex-1 bg-white text-pink-600 text-lg font-bold'>
                  Details
                </button>
              </div>
              <div className="flex items-center mt-2">
                <button className="flex-1 text-white bg-pink-500 py-1 px-4 rounded-lg hover:bg-pink-600 hover:shadow-md transition duration-300">
                  <FontAwesomeIcon icon={faCartPlus} className="mr-2" /> Add to Cart
                </button>
              </div>
              <div className="flex bg-pink-500 items-center mt-2 justify-between rounded-lg">
                <button className="text-white bg-pink-600 py-1 px-3 rounded-lg hover:bg-pink-600 transition duration-300">
                  <FontAwesomeIcon icon={faMinus} />
                </button>
                <span className=" text-white text-lg font-semibold">1</span>
                <button className="text-white bg-pink-600 py-1 px-3 rounded-lg hover:bg-pink-600 transition duration-300">
                  <FontAwesomeIcon icon={faPlus} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
