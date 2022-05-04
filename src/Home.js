import React from 'react';
import {ParallaxProvider} from 'react-scroll-parallax';
import Parallaxing from "./Parallaxing";

import image1 from "./images/image1.jpg";


const Home = () => {
    return(
        <ParallaxProvider>

            <Parallaxing imgsrc={image1} height="500px" opacity="0.5">
               
            </Parallaxing>

            <p>
                TVS Motor Company (commonly known as TVS) is an Indian motorcycle manufacturer headquartered in Chennai, Tamil Nadu, India. It is the third largest motorcycle company in India with a revenue of over ₹20,000 crore (US$2.6 billion) in 2018–19. The company has an annual sales of three million units and an annual capacity of over four million vehicles. TVS Motor Company is also the second largest two-wheeler exporter in India with exports to over 60 countries.
                TVS Motor Company Ltd (TVS Motor), a member of the TVS Group, is the largest company of the group in terms of size and turnover.
                </p>
        </ParallaxProvider>
    )
}

export default Home;