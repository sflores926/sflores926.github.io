import React from 'react';
import me from '../assets/StephanyFlores.jpeg'
import "./aboutStyle.css";


export default function About() {
  const styles = {
    taco: {
      // border: '2px solid white',
      // position: "relative",
      // display:"flex",
      // justifyContent: "center",
      // width: "100vw"
      // border: ' solid white',
      borderRadius: '6px',
      // padding: '15px ',
      border: '3px dotted white',
      
      
    
    },
    cat: {
      opacity: '0.7',
      background: 'white',
      borderRadius: '10px',

    },
    dog: {
      // margin: "10px",
      // display:"flex",
      // justifyContent: "center",
      // padding: "15px",
      // position: "relative",
      fontSize: '15px'

    }
  }


  return (
    <div className='mb-5 pb-5'>
      <div className=" mb-3 pb-3 "  >
        <div className="row " >
          <div className="col text-center p-5 m-5 " style={styles.taco}>
            <img src={me} width='350' heights='100' alt="Girl with brown hair and brown eyes" />
          </div>
          <div className="blog col pt-4 mt-4 p-2 m-5 ">
            <h3 className="text-white text-center">
              Hi, I'm Stephany, I love to build amazing
              apps.
            </h3>
            <br></br>
            <div style={styles.cat}>
              <p className="text-black" style={styles.dog}>
                This has been a journey for me, it all began with a tik tok video. I started to learn a little here and there and realized I wanted to learn more. Then I decided to take a coding bootcamp at Rutgers University to learn and gain the skills to make this a life long career. This is definitely a change from the career I started to pursue which was Nursing. I have come to see that with coding you can also make a change in peoples lives. You can help some or even millions of people out there. I hope to be able to join a team that is like minded and can help me grow as a software engineer.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
