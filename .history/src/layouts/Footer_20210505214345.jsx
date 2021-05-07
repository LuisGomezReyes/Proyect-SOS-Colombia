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
  background: #374151;
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
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));

  --tw-divide-opacity: 1;
  border-color: white;
  border-top-left-radius: 1rem;
  @media (max-width: 700px) {
    grid-template-columns: repeat(1, minmax(0, 1fr));
    border-bottom-left-radius: 1rem;
  }
`;

const P = styled.p`
  text-white text-xl text-justify
`;

const Footer = () => (
  <Wrapper>
    <Text>
      <div>
        <p className="">Siguenos en redes sociales.</p>
        <div className={(css = ``)}>
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
      </div>
      <div>
        <div className="flex justify-center">{/* <Logo /> */}</div>
        <p className="text-white text-sm break-words text-justify">
          Buscamos colaborar y ayudar al pueblo colombiano en el paro nacional
          del año 2021
        </p>
      </div>
      <div>
        <span className="pt-4 text-white text-xs break-words text-justify">
          Todos los derechos reservados © 2021 | SOS Colombia
        </span>
      </div>
    </Text>
  </Wrapper>
);
export default Footer;
