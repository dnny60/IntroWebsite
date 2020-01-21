import React from 'react'
import Link from 'next/link'

function HomePage () {
  // import React, { useState } from 'react'
  // const [color, setcolor] = useState('black')
  // background-color: ${color};
  // const [bgColorON, bgColorOff] = useState('rgb(207, 188, 285)')
  // const btLightOn = (x) => {
  //   x.style.backgroundColor = 'rgb(207, 188, 285)'
  //   x.style.borderColor = 'rgb(220, 285, 93)'
  // }
  // const btLightOff = (x) => {
  //   x.style.backgroundColor = 'rgb(177, 158, 255)'
  //   x.style.borderColor = 'rgb(190, 255, 63)'
  // }

  return (
    <div style={{ fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif' }}>
      {/* <!-- Home Part --> */}
      <section className='hero is-link is-fullheight is-fullheight-with-navbar'>
        <div className='welecome'>
          <div className='ItroContainer'>
            <h6>Hello! I am</h6>
            <h1 className='title is-1'>
              Danny
            </h1>
            <h2 className='subtitle is-3'>
                Full Stack Web Developer
            </h2>
            <div style={{ position: 'relative' }}>
              <a href='#introword'>
                <i className='fas fa-info-circle' style={{ fontSize: '150%', width: '50%', color: '#fff', display: 'block', borderRadius: '10px', boxShadow: 'rgba(0, 0, 0, 0.3) 6px 6px 0px 0px' }}>
                  <text style={{ paddingLeft: '10%', fontFamily: 'Monospace', alignSelf: 'center', color: '#fff' }}>About me</text>
                </i>
              </a>

              <i className='fas fa-address-book' style={{ fontSize: '150%', width: '50%', display: 'block', marginTop: '10px', backgroundClip: 'content-box', borderRadius: '10px', boxShadow: 'rgba(0, 0, 0, 0.3) 6px 6px 0px 0px' }}>
                <text style={{ paddingLeft: '10%', fontFamily: 'Monospace', color: '#fff' }}>Contact</text>
              </i>
            </div>

          </div>
          <figure className='IntroLogo'>
            <img src='image/icon.png' alt='Your text' />
          </figure>
          <div className='cricle' />
        </div>
      </section>
      {/* <!-- Home Part End --> */}

      {/* <div className='welcome'>
        <button onClick={function () {
          color === 'black' ? setcolor('cadetblue') : setcolor('black')
        }}
        >turn the light
        </button>
      </div> */}
      {/* https://scontent-hkg3-2.cdninstagram.com/v/t51.2885-19/s320x320/75341299_579789869501270_4966479746192900096_n.jpg?_nc_ht=scontent-hkg3-2.cdninstagram.com&_nc_ohc=X_Y2PvgCevkAX_bHV6j&oh=6db2848c6219cc210d6d85b89505a77e&oe=5EA830DA */}
      <div className='aboutme-title'>
        <i className='fas fa-info-circle'>About me</i>
        <div id='introword' className='intro'>
          <h1>我是Danny。我是一個沒有伴的人，沒有女伴，沒有肥胖。</h1>
          <h1>Hi my name is danny. </h1>
          <Link href='/about'>
            <a>about</a>
          </Link>
        </div>
      </div>
      <div className='social'>
        <h3 style={{ paddingTop: '10%', color: 'rgb(32, 55, 156)', textAlign: 'center' }}>follow me on instagram</h3>
        <a href='https://www.instagram.com/d_nny60/'>
          <img style={{ height: '5%', width: '5%', display: 'block', margin: 'Auto' }} src='https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/1024px-Instagram_logo_2016.svg.png' />
        </a>
      </div>
      <style jsx>{`
        .welcome {
          background-color: rgb(50, 115, 220);  
        }
        .ItroContainer {
          position: absolute;
          left: 147px;
          top: 347px;
        }
        .IntroLogo {
          position: relative;
          left: 604px; 
          top: 58px;
          width: 70%;
          length: 70%;
        }
        .icon img {
          height: 19.5%;
          width: 19.5%;
        }
        .intro {
          padding-top: 3%;
          text-align: center;
          color: #4a4a4a;
        }
        .fas fa-info-circle {
          color: #fff;
        }
        i {
          background-color: rgb(177, 158, 255);
          border: 5px solid black;
          border-style: solid;
          border-color: rgb(190, 255, 63);
        }
        i:hover {
          background-color: rgb(207, 188, 285);
          border: 5px solid black;
          border-style: solid;
          border-color: rgb(220, 285, 93);
        }
      `}
      </style>
    </div>
  )
}

export default HomePage
