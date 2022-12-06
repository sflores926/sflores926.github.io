import React from 'react';
import "./NavTabsStyles.css"
import Pdf from '../assets/Copy of Stephany Flores Resume.pdf'
import { Link } from 'react-router-dom';


function NavTabs({ currentPage, handlePageChange }) {
  // const styles = {
  //   taco: {
  //     backgroundColor: "black",
  //   }
  // }

  return (
    <div className='header'>
      <ul className="nav mb-3 p-3 justify-content-end " >
        <li className=" nav-item">
          <a
            href="/"
            onClick={() => handlePageChange('Home')}
            className={currentPage === 'Home' ? 'nav-link active' : 'nav-link '}
          >
            HOME
          </a>
        </li>
        <li className="nav-item">
          <Link
          to={{pathname: "/about"}}
            className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
          >
            ABOUT
          </Link>
        </li>
        <li className="nav-item">
          <Link
           to={{pathname: "/portfolio"}}
            // href="/portfolio"
            onClick={() => handlePageChange('Portfolio')}
            className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
          >
            PORTFOLIO
          </Link>
        </li>
        <li className="nav-item">
          <Link
           to={{pathname: "/contact"}}
            // href="/contact"
            onClick={() => handlePageChange('Contact')}
            className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
          >
            CONTACT
          </Link>
        </li>
        <li className='nav-item ' ><a className="nav-link btn btn-outline-warning" href={Pdf}>Resume</a></li>
      </ul>


    {/* <Link to="/">
        <h1>Stephany</h1>
      </Link>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/portfolio">Portfolio</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul> */}

{/* <nav className="navbar navbar-expand-lg ">
  <a className="navbar-brand" href="#home">Stephy</a> 
   <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button> 
  <div className="collapse navbar-collapse mb-3 p-3 justify-content-end" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item active">
        <a className="nav-link" href="#home" >Home</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#about">About</a>
      </li>
      <li className="nav-item">
        <a  href="#portfolio"  onClick={() => handlePageChange('Portfolio')}
            // Check to see if the currentPage is `Blog`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
            className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}>Portfolio</a>
      </li>
      <li className="nav-item">
        <a className="nav-link " href="#contact">Contact</a>
      </li>
      <li className='nav-item ' ><a class="nav-link btn btn-outline-warning" href={Pdf}>Resume</a></li>
    </ul>
  </div>
</nav> */}





    </div>


  


  );
}

export default NavTabs;
