import React, { useState } from 'react';
import './AdminSideBar.css';

const AdminSidebar = ({ categories, onSelect, selectedItem }) => {


    return (
        <div className="admin-sidebar">


            <div className="admin-sidebar-menu">
                {categories.map((category, categoryIndex) => (
                    <div key={categoryIndex}>
                        <h5>{category.category}</h5>
                        <ul>
                            {category.items.map((item, itemIndex) => (
                                <li
                                    key={itemIndex}
                                    className={selectedItem === item.name ? 'active' : ''}
                                    onClick={() => onSelect(item.name)}
                                >
                                    <span>{item.name}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>

        </div>
    );
};

export default AdminSidebar;
