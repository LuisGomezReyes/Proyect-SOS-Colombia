import React from 'react';
import { Link } from 'gatsby';
import styled from '@emotion/styled';
import Headroom from 'react-headroom';
import logo from '../../static/logo/header-logo.png';

const StyledLink = styled(Link)`
  display: flex;
  font-weight: 700;
  align-items: center;
`;
const Imnav= styled.nav`
filter: drop-shadow(1px 1px 4px #444);
    @media (max-width: 700px) {
    display:none;
  }
`;

const Nav = styled.nav`
  display: flex;
  justify-content: flex-end;
  font-family: ${props => props.theme.fontFamily.body};
  font-weight: 500;
  font-size: 1.1rem;
  align-items: center;
  
    @media (max-width: 700px) {
    width:100%;
    
    
  }
  a {
    color: ${props => props.theme.colors.white.base};
    margin-left: 2rem;
    padding-bottom: 2rem;
    transition: all ${props => props.theme.transitions.default.duration};
    &:hover {
      color: ${props => props.theme.colors.white.grey};
    }
    @media (max-width: 700px) {
     margin-left: 0.5rem;
     padding-bottom: 2rem;
     font-size: 0.7rem;
     color: ${props => props.theme.colors.white.nav};
     
    
  }
  }
`;


const NavBar = () => (
  <Headroom calcHeightOnResize disableInlineStyles>
    <StyledLink to="/">
      <Imnav><img src={logo} alt="Bandera de Colombia" /></Imnav>
    </StyledLink>
    <Nav>
      <Link to="/">Inicio</Link>
      <Link to="/blog">Blog</Link>
      <Link to="/banderas">Banderas</Link>
      <Link to="/actividades">Actividades</Link>
      <Link to="/propuestas">Propuestas</Link>
    </Nav>
  </Headroom>
);

export default NavBar;
