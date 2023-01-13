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
          <div className="bio col p-2 m-2">
            <h3 className="text-warning text-center">
              Hi, I'm Stephany, I love to build amazing
              apps.
            </h3>
            <br></br>
            <div className=''>
              <p className="text-white" style={styles.dog}>
              I am a recent graduate of a full stack flex development bootcamp and a proud mother of two. I have a passion for creating and building beautiful, functional websites and web applications. My bootcamp education gave me a strong foundation in HTML, CSS, JavaScript and various web development frameworks. I have a proven ability to learn quickly and am always eager to stay up-to-date with the latest web development trends and technologies. As a mom of two, I know the importance of time management and I am able to balance my work and personal life effectively. I am a problem solver and a team player, and I am dedicated to producing high-quality, user-friendly websites that meet the needs of both the client and the end-user. I am excited to start my career in web development and to continue learning and growing in this field.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
