import React, { useRef, useEffect } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Home from './components/pages/Home'
import Bestsellingproducts from './components/Productspages/Bestsellingproducts'
import Navbar from './components/navbar/Navbar'
import Footer from './components/Footer/Footer'
import About from './components/About us/About'
import Services from './components/Services/Services'
import Blog from './components/Bloges/Blog'
import Contact from './components/Contactus/Contact'
import Shoping from './components/shoping/Shoping'

function App() {
  const shadowRef = useRef(null)

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (shadowRef.current) {
        shadowRef.current.style.top = `${e.clientY}px`
        shadowRef.current.style.left = `${e.clientX}px`
      }
    }

    window.addEventListener('mousemove', handleMouseMove)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return (
    <>
      <style>{`
        body {
          margin: 0;
          background: #1a1a1a;
          scroll-behavior: smooth;
        }

        .shadow {
          position: fixed;
          top: 0;
          left: 0;
          width: 50px;
          height: 50px;
          background: radial-gradient(circle, gold);
          border-radius: 50%;
          pointer-events: none;
          transform: translate(-50%, -50%);
          filter: blur(40px);
          z-index: 9999;
          transition: none;
          mix-blend-mode: screen;
        }
      `}</style>

      <div className="shadow" ref={shadowRef}></div>

      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/shop" element={<Bestsellingproducts />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/shoping" element={<Shoping />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App