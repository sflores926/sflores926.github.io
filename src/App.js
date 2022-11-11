import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./index.css";
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import NavTabs from './components/NavTabs';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// import PortfolioContainer from "./components/PortfolioContainer";


// const App = () => <PortfolioContainer />;

function App() {
    return (
      <>
        {/* Wrap page elements in Router component to keep track of location state */}
        <Router>
          <div className="flex-column justify-flex-start min-100-vh">
            <NavTabs />
            <div className="container">
              {/* Wrap Route elements in a Routes component */}
              <Routes>
                {/* Define routes using the Route component to render different page components at different paths */}
                {/* Define a default route that will render the Home component */}
                <Route 
                  path="/" 
                  element={<Home />} 
                />
                {/* Define a route that will take in variable data */}
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
        </Router>
      </>
    );
  }




export default App;
