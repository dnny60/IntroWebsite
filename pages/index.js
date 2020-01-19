import { useState } from "react";
import Link from 'next/link';


function HomePage() {
    const [color, setcolor] = useState('black');
    return (
        <div>
          {/* <!-- Header --> */}
         <section class="hero is-link is-fullheight is-fullheight-with-navbar">
            <div class="hero-body">
            <div class="container">Hello! I am
                <h1 class="title is-1">
                Danny
                </h1>
                <h2 class="subtitle is-3">
                Full Stack Web Developer
                </h2>
            </div>
            </div>
        </section>
        <div className="welcome">
            <h1>Hello welcome!!</h1>
            <button onClick={function(){
                color === 'black' ? setcolor('cadetblue') : setcolor('black')
            }}>turn the light</button>
        </div>
        <div className='icon'>
            <img style={{borderRadius: '1000%'}} src="https://scontent-hkg3-2.cdninstagram.com/v/t51.2885-19/s320x320/75341299_579789869501270_4966479746192900096_n.jpg?_nc_ht=scontent-hkg3-2.cdninstagram.com&_nc_ohc=X_Y2PvgCevkAX_bHV6j&oh=6db2848c6219cc210d6d85b89505a77e&oe=5EA830DA" alt="me" />
            <img style={{borderRadius: '1000%', transform: 'scaleX(-1)'}} src="https://scontent-hkg3-2.cdninstagram.com/v/t51.2885-19/s320x320/75341299_579789869501270_4966479746192900096_n.jpg?_nc_ht=scontent-hkg3-2.cdninstagram.com&_nc_ohc=X_Y2PvgCevkAX_bHV6j&oh=6db2848c6219cc210d6d85b89505a77e&oe=5EA830DA" alt="me" />
            <img style={{borderRadius: '1000%'}} src="https://scontent-hkg3-2.cdninstagram.com/v/t51.2885-19/s320x320/75341299_579789869501270_4966479746192900096_n.jpg?_nc_ht=scontent-hkg3-2.cdninstagram.com&_nc_ohc=X_Y2PvgCevkAX_bHV6j&oh=6db2848c6219cc210d6d85b89505a77e&oe=5EA830DA" alt="me" />
            <img style= {{borderRadius: '1000%',  transform: 'scaleX(-1)'}} src="https://scontent-hkg3-2.cdninstagram.com/v/t51.2885-19/s320x320/75341299_579789869501270_4966479746192900096_n.jpg?_nc_ht=scontent-hkg3-2.cdninstagram.com&_nc_ohc=X_Y2PvgCevkAX_bHV6j&oh=6db2848c6219cc210d6d85b89505a77e&oe=5EA830DA" alt="me"/>
            <img style= {{borderRadius: '1000%'}} src="https://scontent-hkg3-2.cdninstagram.com/v/t51.2885-19/s320x320/75341299_579789869501270_4966479746192900096_n.jpg?_nc_ht=scontent-hkg3-2.cdninstagram.com&_nc_ohc=X_Y2PvgCevkAX_bHV6j&oh=6db2848c6219cc210d6d85b89505a77e&oe=5EA830DA" alt="me" />
    
        </div>
        <div className="intro">
            <h1 >我是Danny。我是一個沒有伴的人，沒有女伴，沒有肥胖。</h1>
            <h1>Hi my name is danny. </h1>
            <Link href='/about'>
                <a >about</a>
            </Link>
        </div>
        <div className="social">
            <h3 style={{paddingTop: "10%", color: 'rgb(32, 55, 156)', textAlign: 'center'}}>follow me on instagram</h3>
            <a href="https://www.instagram.com/d_nny60/">
            <img style={{height: '5%', width: '5%', display:'block', margin:'Auto'}} src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/1024px-Instagram_logo_2016.svg.png"/>
            </a>
        </div>
        <style jsx>{`
            .welcome {
                color: rebeccapurple;
                padding: 20px 0;
                text-align: center;
                background-color: ${color};
            }
            .icon {
                background-color: beige;
        
            }
            .icon img {
                height: 19.5%;
                width: 19.5%;
                
            }
            .intro {
                padding-top: 3%;
                text-align: center;
                color: #4a4a4a;
            
            `}
        </style>
        </div>
    )
  }
  
  export default HomePage