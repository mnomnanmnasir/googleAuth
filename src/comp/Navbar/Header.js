import React, { useState } from 'react';
import logo from '../../assets/logo.svg';
import './Header.css';
import AccountMenu from '../Menu';
import { IoExtensionPuzzleOutline, IoBulbOutline } from "react-icons/io5";
import { IoIosHelpCircleOutline } from "react-icons/io";
import { CiCirclePlus } from "react-icons/ci";
import { useLocation } from 'react-router-dom';

const NavBar = () => {

  const [hoveredItem, setHoveredItem] = useState("");
  const location = useLocation()

  const knownRoutes = [
    '/deals',
    '/gmail',
    '/docs',
    '/calender',
    '/sstrack',
    '/verdebooks',
    '/click HR',
    '/caiif',
    '/campaigns',
  ];
  
  const capitalizeFirstLetter = (string) => {
    if (!string) return 'Gmail';
    string = string.startsWith('/') ? string.slice(1) : string;
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
  
  const formattedPath = (path) => {
    if (knownRoutes.includes(path)) {
      return capitalizeFirstLetter(path);
    }
    return 'Gmail';
  };

  return (
    <>
      <nav className="navbar">
        <h1 style={{ color: "black", marginLeft:"30px", fontWeight:"500" }}>{formattedPath(location.pathname)}</h1>
        <div className="search-bar">
          <input style={{
            border: "1px solid #1d1f273d",
            padding: "10px",
            outline: "none",
            borderRadius: "100px"
          }} type="text" placeholder="Search..." />
          <div style={{ position: "relative", cursor: "pointer" }} onMouseEnter={() => setHoveredItem("icon-4")} onMouseLeave={() => setHoveredItem("")}>
            <CiCirclePlus color='#65686f' size={50} />
            {hoveredItem === "icon-4" && <div className="sidebar-tooltip-4">Quick Add</div>}
          </div>
        </div>
        <div className='header-icon-1' onMouseEnter={() => setHoveredItem("icon-1")} onMouseLeave={() => setHoveredItem("")}>
          <IoExtensionPuzzleOutline color='#65686f' size={30} />
          {hoveredItem === "icon-1" && <div className="sidebar-tooltip-1">My apps</div>}
        </div>
        <div className='header-icon-2' onMouseEnter={() => setHoveredItem("icon-2")} onMouseLeave={() => setHoveredItem("")}>
          <IoIosHelpCircleOutline color='#65686f' size={30} />
          {hoveredItem === "icon-2" && <div className="sidebar-tooltip-2">Quick Help</div>}
        </div>
        <div className='header-icon-3' onMouseEnter={() => setHoveredItem("icon-3")} onMouseLeave={() => setHoveredItem("")}>
          <IoBulbOutline color='#65686f' size={30} />
          {hoveredItem === "icon-3" && <div className="sidebar-tooltip-3">Sales</div>}
        </div>
        <AccountMenu />
      </nav>
    </>
  );
};

export default NavBar;