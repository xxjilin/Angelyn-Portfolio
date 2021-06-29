import React, {useState, useEffect} from 'react';
import myResume from '../../../src/Dequito_Angelyn_Resume.pdf'
import {FaBars} from 'react-icons/fa';
import {animateScroll as scroll} from 'react-scroll';
import AD from '../../images/AD.png'
import {Nav, NavbarContainer, NavLogo, NavLogoIcon, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink, DownloadCV, DownloadForward} from './NavbarElements';

const Navbar = ({toggle}) => {
    const  [scrollNav, setScrollNav] = useState(false)

    const changeNav = ()=> {
        if(window.scrollY >= 80) {
            setScrollNav(true)
        } else {
            setScrollNav(false)
        }
    }

    const [hover1, setHover1] = useState(false)

    const onHover1 = () => {
        setHover1(!hover1)
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, [])

    const toggleHome = () => {
        scroll.scrollToTop();
    }

    return (
        <>
            <Nav scrollNav={scrollNav}>
                <NavbarContainer>
                    <NavLogo to='/' onClick={toggleHome}><NavLogoIcon src={AD} /></NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars/>
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to="skills" smooth={true} duration={500} spy={true} exact='true' offset={-80}>Skills</NavLinks>
                        </NavItem>
                         <NavItem>
                            <NavLinks to="expertise" smooth={true} duration={500} spy={true} exact='true' offset={-80}>Expertise</NavLinks>
                        </NavItem>
                         <NavItem>
                            <NavLinks to="portfolio" smooth={true} duration={500} spy={true} exact='true' offset={-80} >Portfolio</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="contact" smooth={true} duration={500} spy={true} exact='true' offset={-80} >Contact</NavLinks>
                        </NavItem>
                    </NavMenu>
                    <NavBtn>
                            <NavBtnLink href={myResume} download="Dequito_Angelyn_Resume.pdf" onMouseEnter={onHover1} onMouseLeave={onHover1}>Download CV{hover1 ? <DownloadForward/> : <DownloadCV/>}   
                            </NavBtnLink>
                           
                            
                    </NavBtn>
                </NavbarContainer>
            </Nav>
        </>
    )
}

export default Navbar
