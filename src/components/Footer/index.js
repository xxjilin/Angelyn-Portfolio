import React from 'react';
import {animateScroll as scroll} from 'react-scroll';
import {FooterContainer, FooterWrap, SocilaMediaWrap, SocialLeft, SocialRight, SocialIcons, SocialLogo, SocialLogoIcon, SocialMedia, SocialIconLink, WebsiteRights, Powered} from './FooterElements';
import {FaFacebook, FaLinkedin, FaGithub} from 'react-icons/fa';
import AD from '../../images/SocialLogoIcon.png'

const Footer = () => {

    const toggleHome = () => {
        scroll.scrollToTop();
    }

    return (
        <FooterContainer>
            <FooterWrap>
                <SocialMedia>
                    <SocilaMediaWrap>
                        <SocialLeft>
                            <SocialLogo to='/' onClick={toggleHome}><SocialLogoIcon src={AD}/></SocialLogo>
                        <Powered>Powered by React.js</Powered>
                        
                        </SocialLeft>
                        <SocialRight>
                            <WebsiteRights>AD &#169; {new Date().getFullYear()} All rights reserved.</WebsiteRights>
                            <SocialIcons>
                                <SocialIconLink href='//www.linkedin.com/in/angelyn-dequito-b256aa165/' target='_/blank' aria-label='Linkedin'>
                                    <FaLinkedin/>
                                </SocialIconLink>
                                <SocialIconLink href='//github.com/xxjilin' target='_/blank' aria-label='Github'>
                                    <FaGithub/>
                                </SocialIconLink>
                                <SocialIconLink href='//www.facebook.com/dequitoangelyn/' target='_/blank' aria-label='Facebook'>
                                    <FaFacebook/>
                                </SocialIconLink>
                        </SocialIcons>

                        </SocialRight>
                        
                    </SocilaMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer
