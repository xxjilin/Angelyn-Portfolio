import React, {useState} from 'react'
import {SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink, SideBtnWrap, SidebarRouter, SocialIconLink, SocialIcons, DownloadForward, DownloadCV} from './SidebarElements';
import myResume from '../../../../src/Dequito_Angelyn_Resume.pdf'
import {FaFacebook, FaLinkedin, FaGithub} from 'react-icons/fa';

const Sidebar = ({isOpen, toggle}) => {
const [hover1, setHover1] = useState(false)

    const onHover1 = () => {
        setHover1(!hover1)
    }

    return (
      <SidebarContainer isOpen={isOpen} onClick={toggle}>
          <Icon onClick={toggle}>
              <CloseIcon/>
          </Icon>
          <SidebarWrapper>
              <SidebarMenu>
                  <SidebarLink to='skills' onClick={toggle}>
                      Skills
                  </SidebarLink>
                   <SidebarLink to='expertise' onClick={toggle}>
                      Expertise
                  </SidebarLink>
                   <SidebarLink to='portfolio' onClick={toggle}>
                      Portfolio
                  </SidebarLink>
                  <SidebarLink to='contact' onClick={toggle}>
                      Contact
                  </SidebarLink>
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
              </SidebarMenu>
              <SideBtnWrap>
                  <SidebarRouter href={myResume} download="Dequito_Angelyn_Resume.pdf" onMouseEnter={onHover1} onMouseLeave={onHover1}>Download CV{hover1 ? <DownloadForward/> : <DownloadCV/>}</SidebarRouter>
              </SideBtnWrap>
          </SidebarWrapper>
      </SidebarContainer>
    )
}

export default Sidebar
