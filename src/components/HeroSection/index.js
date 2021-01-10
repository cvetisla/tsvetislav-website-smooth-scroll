import React, {useState} from 'react';
import Video from '../../videos/video.mp4'
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, 
    HeroBtnWrapper,ArrowForward, ArrowRight} from './HeroElements';
import { Button, Button1  } from '../ButtonElements'; 
import Typical from 'react-typical'

const HeroSection = () => {
    const [hover, setHover] = useState (false);

    const onHover = () => {
setHover(!hover);
 };

return (
    <HeroContainer>
        <HeroBg>
          <VideoBg autoPlay loop muted src={Video} type='video/mp4'/>


        </HeroBg>
        <HeroContent>
        <HeroH1>Tsvetislav Ivanchev personal portfolio</HeroH1>
        <HeroP> 

         <Typical loop={Infinity} wrapper="b"
         steps ={['Contact me', 1000, 'for networking', 1000, 'or consultation today', 1000]}
        />
        </HeroP>
    
        <HeroBtnWrapper>
            <Button to="/register" onMouseEnter ={onHover} onMouseLeave={onHover}
            primary="true"
            dark="true"
            
            
            >
             Register to the website {hover ? <ArrowForward /> : <ArrowRight /> }
 </Button>

 
        </HeroBtnWrapper>
        </HeroContent>
        
    </HeroContainer>
);
};

export default HeroSection;
