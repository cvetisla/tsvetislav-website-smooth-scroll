import React, {useState, useEffect} from 'react';
import {FaBars} from 'react-icons/fa';
import {Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLink, NavBtn, NavBtnLink, NavBarRoute1} from './Navbarelements'


const NavBar = ({ toggle }) => {
    const [scrollNav, setScrolNav] = useState (false);

const  changeNav = () => {
    if (window.scrollY >= 80) {
        setScrolNav(true);
    } else {
        setScrolNav(false);
    }
};

useEffect(() => {

window.addEventListener ('scroll' , changeNav);

}, []);
    return (
        <>
<Nav scrollNav={scrollNav}>
<NavbarContainer>
<NavLogo to="discover" >
    Slav's portfolio
</NavLogo>
<MobileIcon onClick={toggle}> 
    <FaBars />
</MobileIcon>
<NavMenu>
    <NavItem>
        <NavLink to="about">About</NavLink>
    </NavItem>
    <NavItem>
        <NavLink to="discover">Technologies</NavLink>
    </NavItem>
    <NavItem>
        <NavLink to="wordofmouth">Testemonials</NavLink>
    </NavItem>
    <NavItem>
        <NavLink to="services">Demo Projects</NavLink>

    </NavItem>

</NavMenu>
<NavBtn>
<NavBtnLink to="/login">Log In</NavBtnLink>


</NavBtn>
</NavbarContainer>

</Nav>
        </>
    );
};

export default NavBar;
