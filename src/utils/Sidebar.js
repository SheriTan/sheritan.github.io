import React, { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Sidebar = ({ items }) => {
    const location = useLocation();
    const currPath = window.location.pathname.split('/')[1];

    useEffect(() => {
    }, [location])

    return (
        <div className='navbar'>
            <h1>SHERI TAN</h1>
            {items.map((item, index) => (
                <Link to={item.to} key={index}>
                    <div className={`nav_item ${currPath === item.url && 'active primary'}`}>
                        <span>{item.name}</span>
                    </div>
                    {(currPath === item.url && currPath === 'projects') &&
                        item.subsection.map((category, subindex) => (
                            <div key={subindex} className={`nav_item ${category.active && 'active secondary'}`}>
                                <span>{category.section}</span>
                            </div>
                        ))
                    }
                </Link>
            ))}
        </div>
    );
}

export default Sidebar;