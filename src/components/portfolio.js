import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import TicTacToe from './tictactoe'
import ToDoList from './todolist'
import DrinkGame from './drinkgame'
import { Container } from './layoutComponents'

const Portfolio = ({ siteTitle, className }) => (
  <div className={className}>
    <Container>
      <h1>My Projects:</h1>
      <PortfolioContainer>
        <h2>Here are the Projects I've made.</h2>
        <div class="projects-wrapper">
          <div class="project-image-drink feature">
            <a href="DrinkGame">
              <DrinkGame />
            </a>
          </div>
          <div class="project-image-todolist feature">
            <a href="ToDoList">
              <ToDoList />
            </a>
          </div>
          <div class="project-image-tictactoe feature">
            <a href="TicTacToe">
              <TicTacToe />
            </a>
          </div>
        </div>
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
  margin-bottom: 1rem;
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
  display: grid;
  grid-template-columns: 2fr 2fr;
  gap: 5rem;
`

export default StyledPortfolio
