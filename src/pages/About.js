import React from 'react';
import me from '../assets/StephanyFlores.jpeg'
import "./aboutStyle.css";


export default function About() {
  const styles = {
    dog: {
      fontSize: '17px'
    }
  }


  return (
    <div className='mb-4 pb-4'>
      <div className=" mb-4 pb-4 "  >
        <div className="row p-4" style={styles.taco}>
          <div className="col text-center">
            <div>
              <img src={me} width='400' heights='100' alt="Girl with brown hair and brown eyes" />
            </div>
          </div>
          <div className="blog col p-2 m-2">
            <h3 className="text-white text-center">
              Hi, I'm Stephany, I love to build amazing
              apps.
            </h3>
            <br></br>
            <div className='bio'>
              <p className="text-white" style={styles.dog}>
                This has been a journey for me, it all began with a tik tok video. I started to learn a little here and there and realized I wanted to learn more. Then I decided to take a coding bootcamp at Rutgers University to learn and gain the skills to make this a life long career.This is definitely a change from the career I started to pursue which was Nursing. I have come to see that with coding you can also make a change in peoples lives. You can help some or even millions of people out there. There have been challenges and when you can figure it out the feeling is like no other. The great thing about this is the challenge and the non stop growing and learning. I hope to be able to join a team that is like minded and can help me grow as a software engineer.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
