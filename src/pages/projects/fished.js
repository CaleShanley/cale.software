import React from 'react';
import styled from 'styled-components';
import Layout from '../../components/page-layout';
import Fished from '../../components/fished';
import { media } from '../../utils';
import { Container } from '../../components/layoutComponents';

const ProjectsPage = () => (
  <Layout>
    <Wrapper>
      <Text>
        <Title>Fished Security</Title>
        <Paragraph>
          I developed a landing page for Fished Security, a pre-launch start up
          I am working on with a colleague. We're using React, BaseWeb and
          Styletron for CSS in JS.
        </Paragraph>
        <nav>
          <a href="https://fished.io" target="_blank" rel="noopener noreferrer">
            Live Demo
          </a>
        </nav>
      </Text>
      <Preview>
        <Fished />
      </Preview>
    </Wrapper>
  </Layout>
);

const Wrapper = styled(Container)`
  display: flex;
  flex-direction: column;
  max-width: 1125px;

  ${media.desktop`
    margin: 6rem auto;
    flex-direction: row;
  `}
`;

const Preview = styled.div`
  transition: all 0.3s ease-in;
  margin: 2rem 0 0;
  box-shadow: 2px 2px 50px 0 rgba(0, 0, 0, 0.3);
  width: 100%;
  max-width: 900px;
`;

const Title = styled.h1`
  margin: 1rem 0;
`;

const Text = styled.div`
  margin: 3rem 0;
  max-width: 800px;
  padding-right: 2rem;
`;

const Paragraph = styled.p`
  font-size: 1.25rem;
  line-height: 1.25;
`;

export default ProjectsPage;
