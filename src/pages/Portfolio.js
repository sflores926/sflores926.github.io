import React from 'react';
import weatherDash from '../assets/WeatherDashboard.gif';
import medley from '../assets/Medley.gif';
import notetaker from '../assets/NoteTaker.gif';
import google from '../assets/GoogleBookSearch.gif';
import furrever from '../assets/furrever.gif';
import workScheduler from '../assets/WorkDayScheduler.gif';
import { FaGithub } from 'react-icons/fa';



export default function Portfolio() {
  return (
    <div className='portfolio-wrapper'>
      <div className='container'>
        <h1 className='text-uppercase text-center py-5'>Portfolio</h1>
        <div className='image-box-wrapper row row-cols-auto justify-content-center'>
          <div className='portfolio-image-box'>
            <figure>
              <a href='https://radiant-bayou-27595.herokuapp.com/' target={'_blank'}>
                <img className='img-fluid img-thumbnail' width={'75%'} src={google} alt='book_look project' />
                <figcaption className='text-center'>Book Look <a href="https://github.com/sflores926/Book-Search-Engine" target={'_blank'}><FaGithub id="portfolio-github" className='github-icon' size={23} /></a></figcaption>
              </a>
            </figure>
          </div>
          <div className='portfolio-image-box'>
            <figure>
              <a href='https://sflores926.github.io/Work-Day-Scheduler/' target={'_blank'}>
                <img className='img-fluid img-thumbnail' width={'75%'} src={workScheduler} alt='scheduler project' />
                <figcaption className='text-center'>Work Day Scheduler <a href="https://github.com/sflores926/Work-Day-Scheduler" target={'_blank'}><FaGithub className='github-icon' size={23} /></a></figcaption>
              </a>
            </figure>
          </div>
          <div className='portfolio-image-box'>
            <figure>
              <a href='https://medley.herokuapp.com/' target={'_blank'}>
                <img className='img-fluid img-thumbnail' width={'75%'} src={medley} alt='medley project' />
                <figcaption className='text-center'>Medley <a href="https://github.com/CoffeeEyes28/Medley" target={'_blank'}><FaGithub className='github-icon' size={23} /></a></figcaption>
              </a>
            </figure>
          </div>
          <div className='portfolio-image-box'>
            <figure>
              <a href='https://evening-brook-11484.herokuapp.com/' target={'_blank'}>
                <img className='img-fluid img-thumbnail' width={'75%'} src={notetaker} alt='furrever project' />
                <figcaption className='text-center'>Furrever <a href="https://github.com/sflores926/Note-Taker" target={'_blank'}><FaGithub className='github-icon' size={23} /></a></figcaption>
              </a>
            </figure>
          </div>
          <div className='portfolio-image-box'>
            <figure>
              <a href='https://sflores926.github.io/Weather-Dashboard/' target={'_blank'}>
                <img className='img-fluid img-thumbnail' width={'75%'} src={weatherDash} alt='furrever project' />
                <figcaption className='text-center'>Furrever <a href="https://github.com/CoffeeEyes28/Furrever" target={'_blank'}><FaGithub className='github-icon' size={23} /></a></figcaption>
              </a>
            </figure>
          </div>
          <div className='portfolio-image-box'>
            <figure>
              <a href='https://enigmatic-gorge-61389.herokuapp.com/ ' target={'_blank'}>
                <img className='img-fluid img-thumbnail' width={'75%'} src={furrever} alt='furrever project' />
                <figcaption className='text-center'>Furrever <a href="https://github.com/CoffeeEyes28/Furrever" target={'_blank'}><FaGithub className='github-icon' size={23} /></a></figcaption>
              </a>
            </figure>
          </div>
        </div>
      </div>
    </div>

  );
}
