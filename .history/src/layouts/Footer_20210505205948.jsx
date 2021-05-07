import React from 'react';
import styled from '@emotion/styled';
import IconInstagram from '../components/icons/IconInstagram';
import IconTikTok from '../components/icons/IconTikTok';
import IconYouTube from '../components/icons/IconYouTube';
import IconFacebook from '../components/icons/IconFacebook';
import IconTwitter from '../components/icons/IconTwitter';

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

const Div = styled.div``;

const Footer = () => (
  <Wrapper>
    <Text>
      <p className="text-white text-xl text-justify">
        Siguenos en redes sociales.
      </p>
      <div className="flex flex-auto items-baseline justify-between m-4">
        <IconInstagram link="#" />
        <IconTikTok link="#" />
        <IconYouTube link="#" />
        <IconFacebook link="#" />
        <IconTwitter link="#" />
      </div>
      <div className="text-white text-sm text-justify">
        Iconos diseñados por
        <a href="https://www.flaticon.es/autores/freepik" title="Freepik">
          Freepik
        </a>
        from
        <a href="https://www.flaticon.es/" title="Flaticon">
          www.flaticon.es
        </a>
      </div>
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
