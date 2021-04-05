import React,{useState} from 'react'
import Video from '../../videos/video2.mp4';
import {Button} from '../ButtonElement';
import {
    HeroContainer,
    HeroBg,
    VideoBg,
    HeroContent,
    HeroBtnWrapper,
    HeroH1,
    HeroP,
    ArrowForward,
    ArrowRight
} from './HeroElements';

const HeroSection = () => {

    const [hover,setHover]=useState(false);

    const onHover = () =>{
        setHover(!hover)
    }

    return (
     <HeroContainer id="home">
     <HeroBg>
       <VideoBg
        autoPlay loop muted src={Video} type='video/mp4' />


     </HeroBg>
     <HeroContent>
         <HeroH1>
           Create Your Own Website For Online Business

         </HeroH1>
         <HeroP>
             Sign up and Create your onw site for
             for port Portfolio 
             And get 30% off
         </HeroP>
         <HeroBtnWrapper>
             <Button to="signup" onMouseEnter={onHover} onMouseLease={onHover} dark='true' primary='true'>
                 get Started {hover ? <ArrowForward />:<ArrowRight />}

             </Button>
         </HeroBtnWrapper>
     </HeroContent>

     </HeroContainer>
    )
}

export default HeroSection
//for video
// https://www.pexels.com/video/a-computer-monitor-flashing-digital-information-2887463/
