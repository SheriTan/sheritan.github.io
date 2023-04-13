import './App.css';
import React, { useEffect, useRef, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Layout from './utils/Layout';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

const App = () => {

  const pages = [
    {
      name: 'About',
      to: '/',
      url: '',
    },
    {
      name: 'Projects',
      to: '/projects',
      url: 'projects',
      subsection: [
        {section: 'Polytechnic', active: true},
      ]
    },
    {
      name: 'Contact',
      to: '/contact',
      url: 'contact',
    },
  ]

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout pages={pages} />}>
          <Route path='/' element={<About title={'About Me'}/>}/>
          <Route path='/projects/*' element={<Projects title={'Projects'} pages={pages} />}/>
          <Route path='/contact' element={<Contact title={'Contact Me'}/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;