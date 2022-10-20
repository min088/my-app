import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import Header from './components/header/Header';
import MainPage from './components/main-page/MainPage';
import About from './components/about-page/About';
import Contact from './components/contact-page/Contact';
import Experience from './components/experience-page/Experience'
import Work from './components/work-page/Work';
import React, { Component } from 'react';
import Profile from './components/home/Profile';
import Footer from './components/footer/Footer';

class App extends Component {

  render() {

    return (
      <div className="App">
        {/* <div class="site-container"> */}
          <Header />

          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Profile/>} />
              <Route path="/about" element={<About/>} />
              <Route path="/contact" element={<Contact/>} />
              <Route path="/work" element={<Work/>} />
            </Routes>
          </BrowserRouter>
        {/* </div> */}
        <About />
        <Experience />
        <Work />
        <Contact />
        <Footer />
      </div>
    );
  }
}

export default App;
