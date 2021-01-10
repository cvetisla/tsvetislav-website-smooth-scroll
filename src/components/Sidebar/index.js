import React from 'react'
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink, SideBtnWrap, SideBarRoute, SideBarRoute1} from './SidebarElements';
import {FaFacebook, FaInstagram, FaYoutube, FaTwitter, FaLinkedin} from 'react-icons/fa';
import {SocialIcons, SocialIconLink} from '../FooterElements';
const Sidebar = ({isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
               <CloseIcon />
            
            </Icon>
            <SidebarWrapper>
            <SidebarMenu>
            <SocialIcons>
                    <SocialIconLink href="https://www.facebook.com/cvetislav.petrov" target="_blank" aria-label="Facebook">
                        <FaFacebook />
                    </SocialIconLink>
                    <SocialIconLink href="https://www.instagram.com/tsvetislavp/" target="_blank" aria-label="Instagram">
                        <FaInstagram />
                    </SocialIconLink>
                    <SocialIconLink href="https://www.twitter.com" target="_blank" aria-label="Twitter">
                        <FaTwitter />
                    </SocialIconLink>
                    <SocialIconLink href="https:///www.linkedin.com/in/tsvetislav-ivanchev/" target="_blank" aria-label="Linkedin">
                        <FaLinkedin />
                    </SocialIconLink>
                    <SocialIconLink href="https://www.youtube.com/cvetisla" target="_blank" aria-label="Youtube">
                        <FaYoutube />
                    </SocialIconLink>

                </SocialIcons>
            
            <SidebarLink to = 'about' onClick={toggle}> About</SidebarLink>
            <SidebarLink to = 'discover' onClick={toggle}> Technologies</SidebarLink>
            <SideBarRoute1 to='wordofmouth' onClick={toggle}>Testemonials</SideBarRoute1>
            <SidebarLink to = 'services'onClick={toggle} >Demo Projects</SidebarLink>
            </SidebarMenu>
           
            <SideBtnWrap>
            <SideBarRoute to="/login">Log In
            </SideBarRoute>
            </SideBtnWrap>
            </SidebarWrapper>
             </SidebarContainer>
    );
};

export default Sidebar
