import react from 'react';
import { ButtonContainer, LinkContainer, LogoContainer, NavContainer, NavLink, Text, CustomButton } from './NavbarStyles';

export function NavBar(){
    return(
        <NavContainer>
            <LogoContainer> <Text>Skyswyp</Text></LogoContainer>
            <LinkContainer>
                <NavLink>Home</NavLink>
                <NavLink>Services</NavLink>
                <NavLink>Blog</NavLink>
                <NavLink>Contacts</NavLink>
            </LinkContainer>
            <ButtonContainer>
                <CustomButton>Start</CustomButton>
            </ButtonContainer>
            

        </NavContainer>
    )
}