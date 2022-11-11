import React from 'react';
import { FaHeart} from "react-icons/fa";
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
      <p className='p-3'>Hello</p>
      <h1>I am Stephany Flores</h1>
      <p className='p-3'>
        Full stack web developer <FaHeart/>
      </p>
    </div>
  );
}

