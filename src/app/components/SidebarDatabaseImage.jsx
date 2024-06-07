'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faChevronRight, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

// RecursiveMenu Component
const RecursiveMenu = ({ menu, openMenus, activeMenus, toggleMenu, setActiveMenu, level = 0 }) => {
  const router = useRouter();

  const handleClick = (item) => {
    console.log(`Clicked menu level ${level + 1}: ${item.name}`);
    toggleMenu(item.name);
    setActiveMenu(level, item.name);
    if (item.children && item.children.length > 0) {
      router.push(`/cat/${item.id}`);
    } else {
      router.push(`/product/${item.id}`);
    }
  };

  return (
    <ul className={`pl-${level * 2} space-y-2 transition-all duration-300 ease-in-out`}>
      {menu.map((item, index) => (
        <li key={index}>
          <div
            className={`flex items-center justify-between cursor-pointer p-2 rounded mb-2 ${
              activeMenus[level] === item.name ? 'bg-violet-600 text-white' : 'text-black hover:bg-indigo-600 hover:text-white'
            }`}
            onClick={() => handleClick(item)}
          >
            <div className="flex items-center space-x-2">
              {item.icon && <img src={item.icon} alt={item.name} className="w-6 h-6" />}
              <span>{item.name}</span>
            </div>
            {item.children && item.children.length > 0 && (
              <FontAwesomeIcon
                icon={openMenus.includes(item.name) ? faChevronDown : faChevronRight}
                className="text-red-500"
              />
            )}
          </div>
          {openMenus.includes(item.name) && item.children && item.children.length > 0 && (
            <RecursiveMenu 
              menu={item.children} 
              openMenus={openMenus} 
              activeMenus={activeMenus} 
              toggleMenu={toggleMenu} 
              setActiveMenu={setActiveMenu} 
              level={level + 1} 
            />
          )}
        </li>
      ))}
    </ul>
  );
};

// Sidebar Component
const SidebarDatabaseImage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [menuData, setMenuData] = useState([]);
  const [openMenus, setOpenMenus] = useState([]);
  const [activeMenus, setActiveMenus] = useState({});

  useEffect(() => {
    // Fetch menu data from the backend
    axios.get('http://127.0.0.1:8000/api/categories')
      .then((response) => {
        setMenuData(response.data);
      })
      .catch((error) => {
        console.error('Error fetching menu data:', error);
      });
  }, []);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const toggleMenu = (menu) => {
    setOpenMenus((prevOpenMenus) => {
      if (prevOpenMenus.includes(menu)) {
        return prevOpenMenus.filter((m) => m !== menu);
      } else {
        return [...prevOpenMenus, menu];
      }
    });
  };

  // Function to set the active menu item and clear all other active menus
  const setActiveMenu = (level, menu) => {
    setActiveMenus({ [level]: menu }); // Only keep the active item at the current level
  };

  return (
    <>
      <div className="md:hidden p-4">
        <button onClick={toggleSidebar}>
          <FontAwesomeIcon icon={faBars} size="2x" />
        </button>
      </div>
      <div
        className={`fixed inset-y-0 left-0 w-64 bg-white border-r transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } md:translate-x-0 transition-transform duration-300 ease-in-out overflow-y-auto z-40`}
      >
        <div className="p-4">
          <div className="text-2xl font-bold">Pro Sidebar</div>
        </div>
        <div className="p-4">
          {menuData.length > 0 ? (
            <RecursiveMenu 
              menu={menuData} 
              openMenus={openMenus} 
              activeMenus={activeMenus} 
              toggleMenu={toggleMenu} 
              setActiveMenu={setActiveMenu} 
            />
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </div>
      {isOpen && <div className="fixed inset-0 bg-black opacity-50 md:hidden" onClick={toggleSidebar}></div>}
    </>
  );
};

export default SidebarDatabaseImage;
