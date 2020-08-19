import React from 'react';
import styled from 'styled-components';
import TicTacToe from './tictactoe';
import ToDoList from './todolist';
import DrinkGame from './drinkgame';
import Fished from './fished';
import { Link } from 'gatsby';
import { Container } from './layoutComponents';
import { media } from '../utils';

const Portfolio = () => (
  <Wrapper id="projects">
    <Container>
      <Heading2>My Projects:</Heading2>
      <PortfolioContainer>
        <TextDiv>
          <Paragraph>These are the projects I've completed.</Paragraph>
        </TextDiv>
        <ProjectsWrapper>
          <DesktopProjects>
            <FeatureLogo>
              <a href="/projects/fished">
                <Fished />
              </a>
            </FeatureLogo>
            <FeatureLogo>
              <a href="/projects/drink">
                <DrinkGame />
              </a>
            </FeatureLogo>
          </DesktopProjects>
          <DesktopProjects>
            <FeatureLogo>
              <a href="/projects/todolist">
                <ToDoList />
              </a>
            </FeatureLogo>
            <FeatureLogo>
              <a href="/projects/tictactoe">
                <TicTacToe />
              </a>
            </FeatureLogo>
          </DesktopProjects>
        </ProjectsWrapper>
      </PortfolioContainer>
    </Container>
  </Wrapper>
);

const Wrapper = styled.div`
  background: #bcf4de;
  margin: 2rem auto 2rem;
  padding: 3rem 0;
  max-width: 1125px;
`;

const ProjectsWrapper = styled.div``;

const FeatureLogo = styled.div`
  transition: all 0.3s ease-in;
  margin: 2rem 1rem 3rem 1rem;
  box-shadow: 2px 2px 50px 0 rgba(0, 0, 0, 0.3);
  width: 300px;

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
    margin: 2rem 0 2rem;
  `}
`;

const Heading2 = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  text-align: center;
`;

const Paragraph = styled.p`
  color: grey;
  font-size: 18px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  text-align: center;

  ${media.desktop`
    font-size: 20px;
  `}
`;

export default Portfolio;
