import React from 'react';
import medley from '../assets/Medley.gif';
import notetaker from '../assets/NoteTaker.gif';
import google from '../assets/GoogleBookSearch.gif';
import furrever from '../assets/furrever.gif';
import workScheduler from '../assets/WorkDayScheduler.gif';
import techNews from '../assets/Homepage - Just Tech News.gif'
import { FaGithub } from 'react-icons/fa';
import "./portfolioStyle.css";




export default function Portfolio() {
  return (
    <div className='portfolio-wrapper m-4 pb-4'>
      <div className='border border-warning projects py-4 my-4'>
        <h1 className='text-uppercase text-center text-white'>Portfolio</h1>
        <h4 className='pb-4 text-center'>Apps I've built</h4>
        <div className='row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3'>
          <div className='col p-2' >
            <figure className='p-3'>
              <a href='https://radiant-bayou-27595.herokuapp.com/'>
                <h5 className='text-white text-center'>Book Search Engine</h5>
                <img className='img-fluid img-thumbnail' src={google} alt='book_look project' />
              </a>
              <figcaption className='text-center text-light'>MERN stack <a href="https://github.com/sflores926/Book-Search-Engine"><FaGithub id="portfolio-github" className='github-icon' size={23} /></a></figcaption>
            </figure>
          </div>
          <div className='portfolio-image-box col p-2'>
            <figure className='p-3'>
              <a href='https://sflores926.github.io/Work-Day-Scheduler/'>
                <h5 className='text-white text-center'>Work Day Scheduler</h5>
                <img className='img-fluid img-thumbnail' src={workScheduler} alt='scheduler project' />
              </a>
              <figcaption className='text-center text-light'>Third Party APIs <a href="https://github.com/sflores926/Work-Day-Scheduler"><FaGithub className='github-icon' size={23} /></a></figcaption>
            </figure>
          </div>
          <div className='portfolio-image-box col p-2'>
            <figure className='p-3'>
              <a href='https://medley.herokuapp.com/'>
                <h5 className='text-white text-center'>Medley</h5>
                <img className='img-fluid img-thumbnail' src={medley} alt='medley project' />
              </a>
              <figcaption className='text-center text-white'>MERN Stack <a href="https://github.com/CoffeeEyes28/Medley" ><FaGithub className='github-icon' size={23} /></a></figcaption>
            </figure>
          </div>
          <div className='portfolio-image-box col p-2'>
            <figure className='p-3'>
              <a href='https://evening-brook-11484.herokuapp.com/'>
                <h5 className='text-white text-center'>NoteTaker</h5>
                <img className='img-fluid img-thumbnail' src={notetaker} alt='notetaker' />
              </a>
              <figcaption className='text-center text-light'>Express <a href="https://github.com/sflores926/Note-Taker"><FaGithub className='github-icon' size={23} /></a></figcaption>
            </figure>
          </div>
          <div className='portfolio-image-box col p-2'>
            <figure className='p-3'>
              <a href='https://tech-news-java-api-0.herokuapp.com/'>
                <h5 className='text-white text-center'>Just Tech News</h5>
                <img className='img-fluid img-thumbnail' src={techNews} alt=' Just Tech News' />
              </a>
              <figcaption className='text-center text-light'>Java <a href="https://github.com/sflores926/tech-news-java-api"><FaGithub className='github-icon' size={23} /></a></figcaption>
            </figure>
          </div>
          <div className='portfolio-image-box col p-2'>
            <figure className='p-3'>
              <a href='https://enigmatic-gorge-61389.herokuapp.com/ '>
                <h5 className='text-white text-center'>Furrever</h5>
                <img className='img-fluid img-thumbnail' src={furrever} alt='furrever project' />
              </a>
              <figcaption className='text-center text-light'>MVC <a href="https://github.com/CoffeeEyes28/Furrever"><FaGithub className='github-icon' size={23} /></a></figcaption>
            </figure>
          </div>
        </div>
      </div>
    </div>

  );
}
