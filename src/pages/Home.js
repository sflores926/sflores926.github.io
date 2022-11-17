import React from 'react';
import { FaHeart } from "react-icons/fa";
import "./styleHome.css"

export default function Home() {
  // const styles={
  //   taco: {
  //     backgroundColor: "blue",
  //     animation: "barry 2s infinite",
  //     position: "relative",
  //     marginTop: "100px",

  //     display:"flex",
  //     justifyContent: "center",
  //     width: "100vw"
  //   },
  // }

  return (
    <div className="ben">
      <div className='justify-content-end'>
      <p className='p-3 fs-5'>Hello</p>
      <h1 className='p-2'>I am Stephany Flores</h1>
      <p className='p-3 fs-5'>
        Full stack web developer <FaHeart />
      </p>
      </div>
      <br></br>

      <div className='d-flex justify-content-center'>
        <div className='px-2'>
          <a
            href="/portfolio"
            className=" mr-2 btn btn-warning text-white">
            My Portfolio
          </a>
        </div>
        <div className='px-2'>
          <a
            href="/contact"
            className=" btn btn-secondary text-white">
            Work With Me
          </a>
        </div>
      </div>
    </div>
  );
}

