import React from 'react'
import SocialFollow from "../SocialFollow";
import {FaFacebook, FaInstagram, FaYoutube, FaTwitter, FaLinkedin} from 'react-icons/fa';

import {FooterContainer, FooterWrap, FooterLinksContainer, FooterLinksWrapper, FooterLinkItems, FooterLinkTitle, FooterLink, SocialMedia, SocialMediaWrap, SocialLogo, WebsiteRights, SocialIcons, SocialIconLink} from '../FooterElements';

const Footer = () => {
    return (
        <>
        <FooterContainer>
        <FooterWrap>
        <FooterLinksContainer>
        <FooterLinksWrapper> 
        <FooterLinkItems> 
        <FooterLinkTitle>Useful Links</FooterLinkTitle>
        <FooterLink href="https://github.com/" target="_blank" aria-label="Github">GitHub</FooterLink>
        <FooterLink href="https://www.w3schools.com/default.asp" target="_blank" aria-label="W3Schools"> W3Schools</FooterLink>
        <FooterLink href="https://www.netlify.com/" target="_blank" aria-label="Netlify">Netlify</FooterLink>
        

        </FooterLinkItems>
        <FooterLinkItems>
        <FooterLinkTitle>Resources</FooterLinkTitle>
        <FooterLink href="https://reactjs.org/" target="_blank" aria-label="React.Js">React.js</FooterLink>
        <FooterLink href="https://styled-components.com/" target="_blank" aria-label="Styled Components"> Styled Components</FooterLink>
        <FooterLink href="https://reactrouter.com/" target="_blank" aria-label="React Router">React Router</FooterLink>
        
        </FooterLinkItems>
            </FooterLinksWrapper>
        </FooterLinksContainer>
        <SocialMedia>
            <SocialMediaWrap>
                <SocialLogo to='/'>
                    
                </SocialLogo>
                <WebsiteRights>Slav's Portfolio ® {new Date().getFullYear()} All Rights reserved.</WebsiteRights>
                <SocialIcons>
                    <SocialIconLink href="https://www.facebook.com/cvetislav.petrov/" target="_blank" aria-label="Facebook">
                        <FaFacebook />
                    </SocialIconLink>
                    <SocialIconLink href="https://www.instagram.com/tsvetislavp/" target="_blank" aria-label="Instagram">
                        <FaInstagram />
                    </SocialIconLink>
                    <SocialIconLink href="https://www.twitter.com/" target="_blank" aria-label="Twitter">
                        <FaTwitter />
                    </SocialIconLink>
                    <SocialIconLink href="https://www.linkedin.com/in/tsvetislav-ivanchev/" target="_blank" aria-label="Linkedin">
                        <FaLinkedin />
                    </SocialIconLink>
                    <SocialIconLink href="https://www.youtube.com/cvetisla" target="_blank" aria-label="Youtube">
                        <FaYoutube />
                    </SocialIconLink>

                </SocialIcons>
            </SocialMediaWrap>
        </SocialMedia>
        </FooterWrap>
        </FooterContainer>
        </>
    )
}

export default Footer


