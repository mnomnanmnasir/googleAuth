import React, { useEffect, useState } from 'react';
import { Outlet, Route, Router, Routes } from 'react-router-dom';
import NavBar from './comp/Navbar/Header';
import SideBar from './comp/SideBar/SideBar';
import icon1 from './assets/icon1.png';
import icon2 from './assets/icon2.png';
import icon3 from './assets/icon3.png';
import icon4 from './assets/icon4.png';
import icon5 from './assets/icon5.png';
import icon6 from './assets/calender-icon.png';
import icon7 from './assets/caiif-icon.png';
import icon8 from './assets/marketing.png';
import icon9 from './assets/b.png';
import dollar from './assets/dollar.svg';

const Layout = () => {

    const [items, setItems] = useState([
        { path: '/', isActive: false },
        { path: '/deals', isActive: false },
        { path: '/gmail', isActive: false },
        { path: '/docs', isActive: false },
        { path: '/calender', isActive: false },
        { path: '/sstrack', isActive: false },
        { path: '/verdebooks', isActive: false },
        { path: '/click HR', isActive: false },
        { path: '/caiif', isActive: false },
        { path: '/campaigns', isActive: false },
    ]);

    const icons = [
        <img width={30} src={icon9} alt="" />,
        <img width={30} src={dollar} alt="" />,
        <img width={30} src={icon3} alt="" />,
        <img width={30} src={icon5} alt="" />,
        <img width={30} src={icon6} alt="" />,
        <img width={30} src={icon1} alt="" />,
        <img width={30} src={icon4} alt="" />,
        <img width={30} src={icon2} alt="" />,
        <img width={30} src={icon7} alt="" />,
        <img width={30} src={icon8} alt="" />,
    ];

    const [selectedItem, setSelectedItem] = useState('');

    const handleSelect = (item) => {
        setSelectedItem(item);
    };

    return (
        <div>
            <NavBar />
            <SideBar items={items} setItems={setItems} icons={icons} onSelect={handleSelect} selectedItem={selectedItem} />
            <div className='content'>
                <Outlet />
            </div>
        </div>
    );
}

export default Layout;
