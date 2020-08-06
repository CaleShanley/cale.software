import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import TicTacToe from './tictactoe'
import ToDoList from './todolist'
import DrinkGame from './drinkgame'
import { Link } from 'gatsby'
import { Container } from './layoutComponents'

const Portfolio = ({ siteTitle, className }) => (
  <div className={className}>
    <Container>
      <h1>My Projects:</h1>
      <PortfolioContainer>
        <div class="projects-wrapper">
          <h2>
            These are the Projects I've completed while at General Assembly
          </h2>

          <div class="project-image-drink feature">
            <a href="/projects">
              <DrinkGame />
            </a>
          </div>
          <div class="project-image-todolist feature">
            <a href="/projects">
              <ToDoList />
            </a>
          </div>
          <div class="project-image-tictactoe feature">
            <a href="/projects">
              <TicTacToe />
            </a>
          </div>
        </div>
        <Link class="infopage" to="/projects/">
          More Info on Projects
        </Link>
      </PortfolioContainer>
    </Container>
  </div>
)

Portfolio.propTypes = {
  siteTitle: PropTypes.string
}

Portfolio.defaultProps = {
  siteTitle: ``
}

const StyledPortfolio = styled(Portfolio)`
  color: black;
  background: var(--primary-color);
  padding: 1rem 0;
  margin-bottom: 5rem;
  margin-top: 10em;
  h1 {
    margin: 1rem 0 0 4rem;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  }

  h2 {
    margin: 2rem 0 0 4rem;
    width: 100%;
    font-size: 28px;
    line-height: 1.3;
    display: inline-block;
  }
  .projects-wrapper {
    display: flex;
    flex: column;
    justify-content: space-around;
  }
  .infopage {
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    color: black;
    margin: 0 0 3rem 4rem;
    &:hover {
      text-decoration: underline;
    }
  }

  .feature {
    transition: all 0.3s ease-in;
    margin: 2rem 6rem 3rem 0;
    box-shadow: 2px 2px 50px 0 rgba(0, 0, 0, 0.3);
    width: 400px;
    cursor: pointer;
    &:hover {
      transform: scale(1.05);
    }
  }
`

const PortfolioContainer = styled.div`
  /* display: grid;
  grid-template-columns: 2fr 2fr;
  gap: 8rem; */
`

export default StyledPortfolio
