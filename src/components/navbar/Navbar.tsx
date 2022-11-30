import React from 'react';
import { StyledNavbar } from './Navbar.styles';

export type NavBarProps ={
    key?:string
}

export const NavBar = (props: NavBarProps) =>{
    return (
        <StyledNavbar>
            <p>Logo</p>
            
        </StyledNavbar>
    )
    

}