import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import { Header } from 'components';
import { Layout, Container } from 'layouts';

const About = center => (
  <Layout>
    <Helmet title={'Acerca de Nosotros'} />
    <Header title="Acerca de Nosotros">Acerca de quienes somos nosotros</Header>
    <Container center={center}>
      <h3>
        If you would like to build this site completely from scratch, you can
        read the guide{' '}
        <a href="https://justinformentin.com/gatsby-v2-guide">here.</a>
      </h3>
    </Container>
  </Layout>
);

export default About;

About.propTypes = {
  center: PropTypes.object,
};
