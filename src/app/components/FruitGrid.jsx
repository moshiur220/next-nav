// components/FruitGrid.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';

const fruits = [
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
  { name: "Green Leaves", img: "/images/image-17.png", price: "$10.00", oldPrice: "$16.00" },
  { name: "Under the Garlic", img: "/images/image-18.png", price: "$10.00", oldPrice: "$16.00" },
];

const FruitGrid = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {fruits.map((fruit, index) => (
          <div key={index} className="border rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-300 bg-white">
            <img src={fruit.img} alt={fruit.name} className="w-full h-40 object-contain mb-4" />
            <h2 className="text-lg font-semibold mb-2">{fruit.name}</h2>
            <p className="text-gray-600 mb-4">
              <span className="line-through mr-2">{fruit.oldPrice}</span>
              <span className="text-green-600">{fruit.price}</span>
            </p>
            <button className="flex items-center justify-center w-full bg-green-500 text-white py-2 rounded hover:bg-green-600 transition-colors duration-300">
              <FontAwesomeIcon icon={faCartPlus} className="mr-2" />
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FruitGrid;
