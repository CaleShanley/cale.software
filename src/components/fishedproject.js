import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import Fished from './fished';
import { Container } from './layoutComponents';

const Portfolio = ({ siteTitle, className }) => (
  <div className={className}>
    <Container>
      <Title>Fished.io:</Title>
      <PortfolioContainer>
        <div>
          <p>
            Landing page for Fished.io - This is currently the Project I am
            working on with a good friend of mine. This website will educate
            companys about Phishing.
          </p>
        </div>
        <ProjectsWrapper>
          <FeatureDiv>
            <Fished />
          </FeatureDiv>
        </ProjectsWrapper>
      </PortfolioContainer>
      <nav>
        <a href="https://fished.io" target="_blank"
          rel="nofollow noreferrer">
          Live Demo
        </a>
      </nav>
    </Container>
  </div>
);

Portfolio.propTypes = {
  siteTitle: PropTypes.string
};

Portfolio.defaultProps = {
  siteTitle: ``
};

const StyledPortfolio = styled(Portfolio)`
  color: black;
  background: var(--secondary-color);
  padding: 1rem 0;
  margin-bottom: 1rem;

  p {
    margin: 2rem 0 0 4rem;
    width: 100%;
    font-size: 20px;
    line-height: 1.3;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  }

  a {
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    transition: all 0.3s ease-in;
    margin: 0 0 1rem 4rem;
    &:hover {
      transform: scale(1.05);
      text-decoration: underline;
    }
  }
`;

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

export default StyledPortfolio;
