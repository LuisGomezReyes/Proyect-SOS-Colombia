import React from 'react';
import styled from '@emotion/styled';

const Wrapper = styled.footer`
  position: relative;
  padding-top: 2rem;
  bottom: 0;
  box-shadow: ${props => props.theme.shadow.footer};
  background: ${props => props.theme.gradient.leftToRight};
  font-family: ${props => props.theme.fontFamily.body};
  font-weight: 500;
  @media (max-width: ${props => props.theme.breakpoints.s}) {
    padding-top: 7rem;
  }
`;

const Text = styled.div`
  margin: 0;
  padding-bottom: 2rem;
  text-align: center;
  color: ${props => props.theme.colors.white.light};
`;

const Footer = () => (
  <Wrapper>
    <Text>
      <span>
        Gatsby Tutorial Starter -{' '}
        <a href="https://justinformentin.com">Justin Formentin</a>
      </span>
      <div className="flex justify-center">{/* <Logo /> */}</div>
      <p className="text-white text-sm break-words text-justify">
        Somos una organización que busca empoderar y mostrar el futbol femenino
        en latinoamerica
      </p>
      <span className="pt-4 text-white text-xs break-words text-justify">
        Todos los derechos reservados © 2020 | De Área a Área
      </span>
    </Text>
  </Wrapper>
);
export default Footer;
