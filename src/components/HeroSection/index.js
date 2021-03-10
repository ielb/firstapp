import React , {useState} from 'react';
import Video from '../../video/video.mp4';
import { Button } from '../ButtonElements';
import {
    HeroContainer,
    HeroBg,
    VideoBg,
    HeroBtnWrapper,
    HeroContent,
    HeroH1,
    HeroP,
    ArrowForward,
    ArrowRight

}from './HeroElements'


const HeroSection=()=> {
    const [hover ,setHover] = useState(false);

    const onHover= ()=>{
        setHover(!hover);
    }

    return (
        <HeroContainer>
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type="video/mp4"/>
            </HeroBg>
            <HeroContent>
                <HeroH1>Virtual Banking  Made Easey</HeroH1>
                <HeroP>
                    Sign up for new account today and receive $250 in credit towards your next payment.
                </HeroP>
                
                <HeroBtnWrapper>
                    <Button to="signup"
                    onMouseEnter={onHover}
                    onMouseLeave={onHover}
                    primary="true"
                    dark = "true"
                    >
                        Get started{hover ? <ArrowForward/> :<ArrowRight/>}
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
        
    );
}

export default HeroSection
