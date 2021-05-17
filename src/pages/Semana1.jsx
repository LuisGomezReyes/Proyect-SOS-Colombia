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
      <P>
      <p> <a href="https://www.instagram.com/p/CO9aY96tp9G/?igshid=1aex4lb6vdo8c" target="_blank"> Consulte información de Medellin aqui </a></p>
       <p>
     8am Olla Comunitaria - Parque San Antonio de Prado(Medellin)
     </p>
     <p>
     10:30am Movilizacion - Glorieta el Hatillo(Medellin)
     </p>
     <p>
     11am Retorno al Paro - Estación Niquira/Exito Robledo/Estación La Estrella(Medellin)
     </p>
     <p>
     12pm Asamblea Popular - Parque la Resistencia(Medellin)
     </p>
      <p>
     1:30pm Movilización Mujeres del Norte - Glorieta Estación Niquira(Medellin)
     </p>
      <p>
     2pm Caravana motera bloqueo Palmas - Primer Mirador de las Palmas(Medellin)
     </p>
       <p>
     2pm Todxs lxs maricas,lesbianas,trans resistimos - Museo Casa de la Memoria(Medellin)
     </p>
       <p>
     3pm Velatón cultural contra la violencia a la población LGBTI - Calle Barbacoas CLL 57a con Crr 46(Medellin)
     </p>
       <p>
     3pm Vamos a Pararte - Barnaby Jones bar(Envigado)
     </p>
       <p>
     3pm Arte al servicio de la Revolución - Manga Biblioteca Débora Arango(Envigado)
     </p>
       <p>
     5pm Plantón por la vida - Parque San Javier(Medellin)
     </p>
       <p>
     7pm Velatón en honor a Allison - Parque Principal de Bello(Medellin)
     </p>
     </P>
     </h3>
     <h3>
     Martes 18 
     <P>
     <p> <a href="https://www.instagram.com/p/CO_XDWNLIIG1fMB82cQIUbbLz-y-eNzJuYrq1w0/?igshid=gn9xwi05gd6t" target="_blank"> Consulte sobre la marcha en Bogotá aquí </a></p>
     <p> 8am Encuentro marcha 19M-Parque el Virrey(Bogotá)   </p>
     <p>
     10am <a href="https://www.youtube.com/watch?v=vKtre7TrQBY" target="_blank">Siempre en Paro: Deuda Histórica con los Pueblos Originarios   </a>
     </p>
     <p> 11am Encuentro marcha 19M-Estadio Nemesio Camacho el Campín(Bogotá)   </p>
     <p> 3pm Plaza de Bolivar(Bogotá)   </p>
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
