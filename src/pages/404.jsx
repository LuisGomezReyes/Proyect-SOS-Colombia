import React from 'react';
import { Link } from 'gatsby';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import { Header } from 'components';
import { Layout, Container } from 'layouts';

const ErrorPage = center => (
  <Layout>
    <Helmet title={'Error 404'} />
    <Header title="Error 404" />
    <Container center={center}>
      <h1>Uppsss, Algo salio mal.</h1>
      <h3>Esta pagina no existe.</h3>
      <h3>
        Puedes returnar a la <Link to="/">Inicio</Link>.
      </h3>
    </Container>
  </Layout>
);

export default ErrorPage;

ErrorPage.propTypes = {
  center: PropTypes.object,
};
