import React from "react";
import { ParallaxBanner } from "react-scroll-parallax";
import image1 from "./images/image1.jpg";

const Parallaxing = (props) => {
    return(
        <ParallaxBanner
        
        layers={[{image: props.imgsrc , amount:0.6}]}
        style={[{height: props.height}]}

        >

            <div>
                {props.childern}
            </div>

        </ParallaxBanner>
        

    )
}

export default Parallaxing;