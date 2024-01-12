import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import './Layout.css'

const Layout = ({ children }) => {
  return (
    <div className="mainlayout">
      <Header/>
      <div>
        {children}
      </div>
      <Footer/>
    </div>
  );
};

export default Layout;