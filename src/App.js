import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import Header from './components/header/Header';
import MainPage from './components/main-page/MainPage';
import About from './components/about-page/About';
import Contact from './components/contact-page/Contact';
import Work from './components/work-page/Work';
import React, { Component } from 'react';


class App extends Component {

  render() {

    return (
      <div className="App">
        <div class="site-container">
          <Header id="gnb" />

          <BrowserRouter>
            <Routes>
              <Route path="/" element={<MainPage/>} />
              <Route path="/about" element={<About/>} />
              <Route path="/contact" element={<Contact/>} />
              <Route path="/work" element={<Work/>} />
            </Routes>
          </BrowserRouter>
        </div>
      </div>
    );
  }
}

export default App;
