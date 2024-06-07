'use client';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faChevronRight, faChevronDown, faComments, faMap, faPalette, faCogs } from '@fortawesome/free-solid-svg-icons';
const menuData = [
  {
    name: 'Chat',
    icon: faComments,
    userName: 'User1',
    subMenu: [
      {
        name: 'Group Chat',
        subMenu: [
          {
            name: 'Work Group',
            userName: 'User2',
            subMenu: [
              {
                name: 'Project A',
                userName: 'User3',
              },
              {
                name: 'Project B',
                userName: 'User4',
              },
            ],
          },
          {
            name: 'Friends Group',
            userName: 'User5',
          },
        ],
      },
    ],
  },
  {
    name: 'Map',
    icon: faMap,
    userName: 'User6',
    subMenu: [
      {
        name: 'Google Maps',
        userName: 'User7',
      },
      {
        name: 'Leaflet Maps',
        userName: 'User8',
      },
    ],
  },
  {
    name: 'Theme',
    icon: faPalette,
    userName: 'User9',
  },
  {
    name: 'Components',
    icon: faCogs,
    userName: 'User10',
    subMenu: [
      {
        name: 'Buttons',
        subMenu: [
          {
            name: 'Large Buttons',
            subMenu: [
              {
                name: 'Primary Button',
                userName: 'User11',
              },
              {
                name: 'Secondary Button',
                userName: 'User12',
              },
            ],
          },
        ],
      },
    ],
  },
];

// RecursiveMenu Component
const RecursiveMenu = ({ menu, openMenus, activeMenus, toggleMenu, setActiveMenu, level = 0 }) => (
  <ul className={`pl-${level * 2} space-y-2 transition-all duration-300 ease-in-out`}>
    {menu.map((item, index) => (
      <li key={index}>
        <div
          className={`flex items-center justify-between cursor-pointer p-2 rounded ${
            activeMenus[level] === item.name ? 'bg-violet-600 text-white' : 'text-black hover:bg-indigo-600 hover:text-white'
          }`}
          onClick={() => {
            console.log(`Clicked menu level ${level + 1}: ${item.name}`);
            toggleMenu(item.name);
            setActiveMenu(level, item.name);
          }}
        >
          <div className="flex items-center space-x-2">
            {item.icon && <FontAwesomeIcon icon={item.icon} className="text-red-500" />}
            <span>{item.name}</span>
          </div>
          {item.subMenu && (
            <FontAwesomeIcon
              icon={openMenus.includes(item.name) ? faChevronDown : faChevronRight}
              className="text-red-500"
            />
          )}
        </div>
        {openMenus.includes(item.name) && item.subMenu && (
          <RecursiveMenu 
            menu={item.subMenu} 
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

// Sidebar Component
const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openMenus, setOpenMenus] = useState([]);
  const [activeMenus, setActiveMenus] = useState({});

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
        } md:translate-x-0 transition-transform duration-300 ease-in-out overflow-y-auto`}
      >
        <div className="p-4">
          <div className="text-2xl font-bold">Pro Sidebar</div>
        </div>
        <div className="p-4">
          <RecursiveMenu 
            menu={menuData} 
            openMenus={openMenus} 
            activeMenus={activeMenus} 
            toggleMenu={toggleMenu} 
            setActiveMenu={setActiveMenu} 
          />
        </div>
      </div>
      {isOpen && <div className="fixed inset-0 -z-30 bg-black opacity-50 md:hidden" onClick={toggleSidebar}></div>}
    </>
  );
};

export default Sidebar;