import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import TicTacToe from './tictactoe';
import ToDoList from './todolist';
import DrinkGame from './drinkgame';
import Fished from './fished';
import { Link } from 'gatsby';
import { Container } from './layoutComponents';
import { media } from '../utils';

const Portfolio = ({ siteTitle, className }) => (
  <div className={className}>
    <Container>
      <h1>My Projects:</h1>
      <PortfolioContainer>
        <TextDiv>
          <h2>
            These are the Projects I've completed while at General Assembly.
          </h2>
          <LinkInfoDiv>
            <Link to="/projects/">More Info on Projects</Link>
          </LinkInfoDiv>
        </TextDiv>
        <ProjectsWrapper>
          <DesktopProjects>
            <FeatureLogo>
              <a href="/projects">
                <Fished />
              </a>
            </FeatureLogo>
            <FeatureLogo>
              <a href="/projects">
                <DrinkGame />
              </a>
            </FeatureLogo>
          </DesktopProjects>
          <DesktopProjects>
            <FeatureLogo>
              <a href="/projects">
                <ToDoList />
              </a>
            </FeatureLogo>
            <FeatureLogo>
              <a href="/projects">
                <TicTacToe />
              </a>
            </FeatureLogo>
          </DesktopProjects>
        </ProjectsWrapper>
      </PortfolioContainer>
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
  padding: 2rem 0;
  margin-bottom: 5rem;
  margin-top: 10em;

  h1 {
    margin: 1rem auto;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    text-align: center;

    ${media.desktop`
    font-size: 45px;
  `}
  }

  h2 {
    margin: 2rem auto;
    width: 100%;
    font-size: 28px;
    line-height: 1.3;
    text-align: center;
  }

  a {
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    color: black;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const ProjectsWrapper = styled.div``;

const FeatureLogo = styled.div`
  transition: all 0.3s ease-in;
  margin: 2rem 0 3rem 0;
  box-shadow: 2px 2px 50px 0 rgba(0, 0, 0, 0.3);
  width: 400px;
  height: 200px;
  cursor: pointer;
  &:hover {
    transform: scale(1.05);
  }

  ${media.desktop`
    width: 400px;
  `}
`;

const LinkInfoDiv = styled.div`
  margin-top: 2rem;
  font-size: 20px;
`;

const TextDiv = styled.div``;

const PortfolioContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
`;

const DesktopProjects = styled.div`
  ${media.desktop`
    display: flex;
    flex-direction: row;
  `}
`;
export default StyledPortfolio;
