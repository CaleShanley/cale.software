import React from 'react';
import styled from 'styled-components';
import Layout from '../../components/layout';

import { Container } from '../../components/layoutComponents';

const ProjectsPage = () => (
  <Layout>
    <Container>
      <Title>Fished.io:</Title>
      <PortfolioContainer>
        <div>
          <p>
            I developed a landing page for Fished Security, a pre-launch start
            up I am working on with a friend. We're using React, BaseWeb and
            Styletron for CSS in JS.
          </p>
        </div>
        <ProjectsWrapper>
          <FeatureDiv>{/* <Fished /> */}</FeatureDiv>
        </ProjectsWrapper>
      </PortfolioContainer>
      <nav>
        <a href="https://fished.io" target="_blank" rel="nofollow noreferrer">
          Live Demo
        </a>
      </nav>
    </Container>
  </Layout>
);

const FeatureDiv = styled.div`
  transition: all 0.3s ease-in;
  margin: 2rem 6rem 0;
  box-shadow: 2px 2px 50px 0 rgba(0, 0, 0, 0.3);
  width: 400px;

  &:hover {
    transform: scale(1.05);
  }
`;
const Title = styled.h1`
  margin: 1rem 0 0 4rem;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
`;

const ProjectsWrapper = styled.div``;

const PortfolioContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export default ProjectsPage;
