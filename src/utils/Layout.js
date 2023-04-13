import React, { Fragment, useEffect, useRef, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
const Layout = ({pages}) => {
    return (
        <div className='background_container'>
            <div className='inner_container'>
                <Sidebar items={pages} />
                <div className='main_content'>
                    <Outlet />
                </div>
            </div>
        </div>
    );
}

export default Layout;