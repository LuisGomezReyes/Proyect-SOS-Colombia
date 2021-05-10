import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import styled from '@emotion/styled';
import { Header, PostList } from 'components';
import { Layout } from 'layouts';
import { Link } from 'gatsby';
const PostWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 4rem 4rem 1rem 4rem;
  @media (max-width: 1000px) {
    margin: 4rem 2rem 1rem 2rem;
  }
  @media (max-width: 700px) {
    margin: 4rem 1rem 1rem 1rem;
  }
`;



const Titulo = styled.div`

  text-align: center;
  left: 50%;
  color:  #ff0000;
  padding-top:1rem;
`;

const estilosform = styled.div`
form {
  background-color: #fff;
  color: #ff0000;
  width: 50%;
  height: 50px;
  justify-content: center;
  align-items: center;
  text-align: center;
  display: flex;
  border-radius: 6px;
  box-shadow: 2px 2px 10px #666;
  margin: 5px;
  padding: 5px;
}

.form button {
  background-color: red;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 7px;
  box-shadow: 2px 2px 10px #666;
}

.form input {
  padding: 5px;
  border-radius: 5px;
  border: #9b9b9b solid;
}



`;





const Index = ({ data }) => {
  const { edges } = data.allMarkdownRemark;
  return (
    <Layout>
      <Helmet title={'SOS Colombia'} />
      <Header title="SOS Colombia">
        Este es tu espacio para conocer toda la información acerca del paro
        Nacional del año 2021
      </Header>
 <Titulo><h2>Newsletter</h2> </Titulo>
 <estilosform>
<div class="form">
<form method="post" action="https://getform.io/f/e8fb3d9f-234e-4a26-901c-4dd1393d7a66">
  <label>
    Nombre
    <input type="text" name="name" id="name" placeholder="Nombre Completo"/>
  </label>
  <input type="hidden" name="subject" id="subject" value="newsletter"/>
  <label>
    Email
    <input type="email" name="email" id="email" placeholder="Correo Electronico"/>
  </label>
  
  
  <button type="submit">Send</button>
  
</form>
</div>
 </estilosform>
      <PostWrapper>
        {edges.map(({ node }) => {
          const { id, excerpt, frontmatter } = node;
          const { cover, path, title, date } = frontmatter;
          return (
            <PostList
              key={id}
              cover={cover.childImageSharp.fluid}
              path={path}
              title={title}
              date={date}
              excerpt={excerpt}
            />
          );
        })}
      </PostWrapper>
        <Titulo><h2>Últimas Publicaciones</h2></Titulo>

        <Titulo><Link to="tags"> <button type="button">All Tags</button></Link></Titulo>
       
    </Layout>
  );
};

export default Index;

Index.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            excerpt: PropTypes.string,
            frontmatter: PropTypes.shape({
              cover: PropTypes.object.isRequired,
              path: PropTypes.string.isRequired,
              title: PropTypes.string.isRequired,
              date: PropTypes.string.isRequired,
              tags: PropTypes.array,
            }),
          }),
        }).isRequired
      ),
    }),
  }),
};

export const query = graphql`
  query {
    allMarkdownRemark(
      limit: 6
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
      edges {
        node {
          id
          excerpt(pruneLength: 75)
          frontmatter {
            title
            path
            tags
            date(formatString: "MM.DD.YYYY")
            cover {
              childImageSharp {
                fluid(
                  maxWidth: 1000
                  quality: 90
                  traceSVG: { color: "#2B2B2F" }
                ) {
                  ...GatsbyImageSharpFluid_withWebp_tracedSVG
                }
              }
            }
          }
        }
      }
    }
  }
`;
