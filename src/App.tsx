import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './Components/Layout/Layout';
import Contact from './Pages/Contact/Contact';
import About from './Pages/About/About';
import Home from './Pages/Home/Home'

function App() {
  return (
    <>
      <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Contact/>} />
        </Routes>
      </Layout>
    </Router>
    </>
  )
}

export default App
