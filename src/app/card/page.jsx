// pages/index.js
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus, faPlus, faMinus, faTimes } from '@fortawesome/free-solid-svg-icons';

const CartPage = () => {
  const cartItems = [
    { id: 1, name: 'Broiler Chicken Skin Off', quantity: 1, price: 329, oldPrice: 339, weight: '50 gm', image: '/images/image-1.png' },
    { id: 2, name: 'Broiler Chicken Skin On', quantity: 14, price: 4186, oldPrice: 4186, weight: '50 gm', image: '/images/image-2.png' },
    { id: 3, name: 'Sobuj Angur (Green Grapes)', quantity: 2, price: 238, oldPrice: 250, weight: '12 gm', image: '/images/image-11.png' },
    { id: 4, name: 'Potato Regular', quantity: 1, price: 9, oldPrice: 9, weight: '50 gm', image: '/images/image-4.png' },
    { id: 5, name: 'Shagor Kola (Banana Sagor)', quantity: 1, price: 49, oldPrice: 49, weight: '4 pcs', image: '/images/image-5.png' },
    { id: 6, name: 'Banana Chompa (Ready To Eat)', quantity: 1, price: 29, oldPrice: 35, weight: '4 pcs', image: '/images/image-6.png' },
    { id: 7, name: 'Chaldal Premium Broiler Chicken Curry Cut', quantity: 1, price: 399, oldPrice: 410, weight: '50 gm', image: '/images/image-7.png' },
    { id: 8, name: 'Deshi Peyaj (Local Onion)', quantity: 1, price: 85, oldPrice: 90, weight: '50 gm', image: '/images/image-8.png' }
  ];

  const totalAmount = cartItems.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className="max-w-md mx-auto p-4 bg-white shadow-md rounded-md">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">9 ITEMS</h2>
        <button className="text-gray-600">
          <FontAwesomeIcon icon={faTimes} /> Close
        </button>
      </div>
      <div className="bg-green-500 text-white text-center p-2 rounded-md mb-4">
        You have reduced delivery charge <span className="font-bold">৳ 39</span>
      </div>
      {cartItems.map(item => (
        <div key={item.id} className="flex items-center justify-between mb-4 border-b border-gray-300 pb-4">
          <img src={item.image} alt={item.name} className="w-16 h-16 rounded-md" />
          <div className="flex-1 ml-4">
            <h3 className="text-lg font-semibold">{item.name}</h3>
            <p className="text-sm text-gray-500">{item.weight}</p>
            <div className="text-red-500 font-bold">৳ {item.price}</div>
            <div className="text-gray-500 line-through">৳ {item.oldPrice}</div>
          </div>
          <div className="flex items-center">
            <button className="text-gray-600 bg-gray-200 py-1 px-2 rounded-lg hover:bg-gray-300 transition duration-300">
              <FontAwesomeIcon icon={faMinus} />
            </button>
            <span className="mx-2 text-lg font-semibold">{item.quantity}</span>
            <button className="text-gray-600 bg-gray-200 py-1 px-2 rounded-lg hover:bg-gray-300 transition duration-300">
              <FontAwesomeIcon icon={faPlus} />
            </button>
          </div>
          <button className="text-red-600 ml-4">
            <FontAwesomeIcon icon={faTimes} />
          </button>
        </div>
      ))}
      <div className="flex justify-between items-center border-t border-gray-300 pt-4 mt-4">
        <input type="text" placeholder="Have a special code?" className="flex-1 border border-gray-300 p-2 rounded-md" />
        <div className="text-lg font-bold text-red-500">৳ {totalAmount}</div>
      </div>
      <button className="w-full bg-red-500 text-white py-2 mt-4 rounded-md hover:bg-red-600 transition duration-300">
        Place Order
      </button>
    </div>
  );
};

export default CartPage;