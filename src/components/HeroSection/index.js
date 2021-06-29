import React, {useState} from 'react'
import Image from '../../images/hero.png'
import Image1 from '../../images/mobileHero.png'
import ADLogo from '../../images/ADicon.png'
import {HeroContainer, HeroImage, HeroImage1, HeroBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight, HeroLogo} from './HeroElements'
import {Button} from '../ButtonElement'

const HeroSection = () => {
    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }

    const [hover1, setHover1] = useState(false)

    const onHover1 = () => {
        setHover1(!hover1)
    }

    return (
        <HeroContainer id='home'>
            <HeroBg>
                <HeroImage src={Image} type='image' />
                <HeroImage1 src={Image1} type='image' />
            </HeroBg>
            <HeroContent>
                <HeroLogo src={ADLogo} type='image'></HeroLogo>
                <HeroH1>Angelyn Dequito</HeroH1>
                <HeroP>Frontend Developer | UI Designer</HeroP> 
                <HeroBtnWrapper>
                    <Button onMouseEnter={onHover} onMouseLeave={onHover}  to='portfolio' primary='true' dark='true' smooth={true} duration={500} spy={true} exact='true'>Portfolio{hover ? <ArrowForward/> : <ArrowRight/>}</Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection
