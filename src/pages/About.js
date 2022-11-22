import React from 'react';
import me from '../assets/IMG_8474.jpg'


export default function About() {
  const styles = {
    taco: {
      fontSize: '18px',

    },
    cat: {
      opacity: '0.4',
      background: 'black',
    }
  }


  return (
    <div>
      <div class="container">
        <div class="row">
          <div class="col ">
            <img src={me} width='350' heights='100' alt="Girl in a jacket" />
          </div>
          <div class="col">
            <h1 className="text-white">
              Hi, I'm Stephany.
              <br />I love to build amazing
              apps.
            </h1>
            <div style={styles.cat}>
              <p style={styles.taco} className="mb-8 text-white">
                This has been a journey for me, it all began with a tik tok video. I started to learn a little here and there and realized I wanted to learn more. Then I decided to take a coding bootcamp at Rutgers University to learn and gain the skills to make this a life long career. This is definitely a change from the career I started to pursue which was Nursing. I have come to see that with coding you can also make a change in peoples lives. You can help some or even millions of people out there. I hope to be able to join a team that is like minded and can help me grow as a software engineer.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
