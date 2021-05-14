import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import { Header } from 'components';
import { Layout, Container } from 'layouts';
import { Link } from 'gatsby';
import styled from '@emotion/styled';

const P = styled.p`
  text-align: center;
  font-size: 1rem;
  line-height: 1.5rem;
`;




const Semana1 = center => (
  <Layout>
    <Helmet title={'Semana 17-23 de Mayo'} />
    <Header title="Semana 17-23 de Mayo">Actividades que puedes hacer esta semana </Header>
    <Container center={center}>
     <h3>
     Lunes 17 
     </h3>
     <h3>
     Martes 18 
     <P>
     <p>
     10-11am <a href="https://www.youtube.com/watch?v=vKtre7TrQBY" target="_blank">Siempre en Paro: Deuda Histórica con los Pueblos Originarios   </a>
     </p>
     </P>
     </h3>
     <h3>
     Miercoles 19 
     </h3>
     <h3>
     Jueves 20 
     </h3>
     <h3>
     Viernes 21 
     </h3>
     <h3>
     Sabado 
     </h3>
     <h3>
     Domingo 23 
     </h3>
    </Container>
  </Layout>
);

export default Semana1;

Semana1.propTypes = {
  center: PropTypes.object,
};
