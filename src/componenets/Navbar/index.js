import React from 'react';
import { FaBars } from 'react-icons/fa';
import {
    Nav,
    NavbarContainer,
    NavLogo,
    MobileIcon,
    NavMenu,
    NavItem,
    NavLinks,
    Navbtn,
    NavBtnLink
  } from './NavbarElements';

const Navbar = ({toggle}) => {

    return (
    <>
        <Nav>
         <NavbarContainer>
         <NavLogo to="/">
         HMUSHOP

         </NavLogo> 
         <MobileIcon onClick={toggle}>
              <FaBars />
         </MobileIcon>
         <NavMenu>
          <NavItem>
            <NavLinks to="about">About</NavLinks>

          </NavItem>
          <NavItem>
            <NavLinks to="services">Services</NavLinks>

          </NavItem>
          <NavItem>
            <NavLinks to="products">Products</NavLinks>

          </NavItem>
          <NavItem>
            <NavLinks to="Sign-up">Sign Up</NavLinks>

          </NavItem>

         </NavMenu>
         {/* for Nav button */}
         <Navbtn> 
            <NavBtnLink to="/signin">Sign In</NavBtnLink>

         </Navbtn>

       </NavbarContainer>

       </Nav>
    </>
    )
}

export default Navbar

//type Rafce functional compoenets created
