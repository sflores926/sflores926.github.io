import React from "react";
import "./index.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import NavTabs from './components/NavTabs';
import Footer from './components/Footer';

import {HashRouter, Route, Routes} from 'react-router-dom';
// import { BrowserRouter, Route, Routes } from 'react-router-dom';


// import PortfolioContainer from "./components/PortfolioContainer";


// const App = () => <PortfolioContainer />;

function App() {
  return (
    <HashRouter>
        <div className="flex-column justify-flex-start min-100-vh">
          <NavTabs />
          <div className="">
            <Routes>
              <Route 
                path="/" 
                element={<Home />} 
              />
              <Route 
                path="/about" 
                element={<About />} 
              />
               <Route 
                path="/portfolio" 
                element={<Portfolio />} 
              />
               <Route 
                path="/contact" 
                element={<Contact />} 
              />
            </Routes>
          </div>
          <Footer />
        </div>
    </HashRouter>

    // <BrowserRouter>
    //  <div className="flex-column justify-flex-start min-100-vh">
    // <NavTabs />
    // </div>
    // <Routes>
    //   <Route 
    //   path="/section"
    //   element={<Section />}/>
    // </Routes>
    // <Footer />
    // </BrowserRouter>

    // <div className="flex-column justify-flex-start min-100-vh">
    //   <NavTabs />
    //   <Home />
    //   <About />
    //   <Portfolio />
    //   <Contact />
    //   <Footer />
    // </div>





  );
}








export default App;
