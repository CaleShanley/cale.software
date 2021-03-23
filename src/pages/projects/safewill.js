import React from 'react';
import styled from 'styled-components';
import Layout from '../../components/page-layout';
import Safewill from '../../components/safewill';
import { media } from '../../utils';
import { Container } from '../../components/layoutComponents';

const ProjectsPage = () => (
  <Layout>
    <Wrapper>
      <Text>
        <Title>Safewill</Title>
        <Paragraph>
          I'm currently working for Safewill as a Junior QA engineer. It's a
          legal tech statup made to help everyday Australians write their will
          online.
        </Paragraph>
        <nav>
          <a
            href="https://safewill.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Live Demo
          </a>
        </nav>
      </Text>
      <Preview>
        <Safewill />
      </Preview>
    </Wrapper>
  </Layout>
);

const Wrapper = styled(Container)`
  display: flex;
  flex-direction: column;
  max-width: 1125px;

  a {
    &:hover {
      text-decoration: underline;
    }
  }

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
