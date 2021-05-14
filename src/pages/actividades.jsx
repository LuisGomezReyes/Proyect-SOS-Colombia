import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import { Header } from 'components';
import { Layout, Container } from 'layouts';
import { Link } from 'gatsby';

const Actividades = center => (
  <Layout>
    <Helmet title={'Actividades'} />
    <Header title="Actividades">Algunas activdades durante el paro nacional </Header>
    <Container center={center}>
      <h2>
        Actividades semana 17-23
        <Link to="/Semana1"> Las encuentras aqui </Link>
      </h2>
    </Container>
  </Layout>
);

export default Actividades;

Actividades.propTypes = {
  center: PropTypes.object,
};
