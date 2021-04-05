import React from 'react';
import {
    SidebarContainer,
    Icon,
    CloseIcon,
    SidebarWrapper,
    SidebarMenu,
    SidebarLink,
    SidebarRoute,
    SidebarBtnWrap
    

  } from "./SiteBarElements";


const Sitebar = ({isOpen,toggle}) => {

    return (
        <>
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
        <Icon onClick={toggle}>
            <CloseIcon />
        </Icon>
        <SidebarWrapper>
            <SidebarMenu>
              <SidebarLink to="about" onClick={toggle}>
                About
              </SidebarLink>
              <SidebarLink to="products" onClick={toggle}>
                Products
              </SidebarLink>
              <SidebarLink to="services" onClick={toggle}>
                Services
              </SidebarLink>
              <SidebarLink to="sing-up" onClick={toggle}>
                Sign Up
              </SidebarLink>

            </SidebarMenu>
            <SidebarBtnWrap>
                <SidebarRoute to="/signin">Sign In</SidebarRoute>
            </SidebarBtnWrap>
        </SidebarWrapper>
        
        </SidebarContainer>
            
        </>
    )
}

export default Sitebar
