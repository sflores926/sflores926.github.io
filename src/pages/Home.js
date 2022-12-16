import React from 'react';
// import { FaHeart } from "react-icons/fa";
import "./styleHome.css"
import Typewriter from "typewriter-effect";

export default function Home() {
  const styles={
    taco: {
      // backgroundColor: "blue",
      // animation: "barry 2s infinite",
      // position: "relative",
      // marginTop: "100px",

      // display:"flex",
      // justifyContent: "center",
      // width: "100vw"
      paddingTop: "200px"
    },
    cat: {
      display:"flex",
      justifyContent: "center",
      padding: "15px",
      color: "whitesmoke",
      
    },
    dog: {
      // marginTop: "150px",
      // padding: "200px", 
      // position:'relative',
      justifyContent: "center",
      width: "100vw",
      // marginTop: "100px",
      // border: 'solid white',
      


      
    }
  }

  return (
    <div className='cover-container d-flex w-100 h-100 p-3 mx-auto flex-column"'>
    <div className="text-center" style={styles.taco}>
    <div className="introBox" style={styles.dog}>
      <div className='introWords'>
        <h2 className='p-3'>Hello</h2>
        <h1 className='p-3 '>I am Stephany Flores,</h1>
        {/* <p className='p-3'> A full stack web developer located in the East Coast <FaHeart /></p> */}
        <div style={styles.cat}>
        <Typewriter 
          options={{
            strings: ['A full stack web developer located in New Jersey', 'Cant wait to work with you'],
            autoStart: true,
            loop: true,
          }}
        />
        </div>
      </div>
      <br></br>

      <div className='d-flex justify-content-center'>
        <div className='px-2'>
          <a
            href="#/portfolio"
            className=" mr-2 btn btn-info text-white">
            My Portfolio
          </a>
        </div>
        <div className='px-2'>
          <a
            href="#/contact"
            className=" btn btn-secondary text-white">
            Work With Me
          </a>
        </div>
      </div>
    </div>
    </div>
    </div>
  );
}

