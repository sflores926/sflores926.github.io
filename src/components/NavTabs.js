import React from 'react';
import "./NavTabsStyles.css"
import Pdf from '../assets/Copy of Stephany Flores Resume.pdf'
import {Link} from 'react-router-dom';

// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
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
            // This is a conditional (ternary) operator that checks to see if the current page is "Home"
            // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
            className={currentPage === 'Home' ? 'nav-link active' : 'nav-link '}
          >
            HOME
          </a>
        </li>
        <li className="nav-item">
          <Link
          to={{pathname: "/about"}}
            // href="/about"
            // onClick={() => handlePageChange('About')}
            // Check to see if the currentPage is `About`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
            className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
          >
            ABOUT
          </Link>
        </li>
        <li className="nav-item">
          <a
            href="/portfolio"
            onClick={() => handlePageChange('Portfolio')}
            // Check to see if the currentPage is `Blog`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
            className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
          >
            PORTFOLIO
          </a>
        </li>
        <li className="nav-item">
          <a
            href="/contact"
            onClick={() => handlePageChange('Contact')}
            // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
            className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
          >
            CONTACT
          </a>
        </li>
        <li className='nav-item ' ><a class="nav-link btn btn-outline-warning" href={Pdf}>Resume</a></li>
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



    </div>
  );
}

export default NavTabs;
