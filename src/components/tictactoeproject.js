import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import TicTacToe from './tictactoe'
import { Link } from 'gatsby'
import { Container } from './layoutComponents'

const Portfolio = ({ siteTitle, className }) => (
  <div className={className}>
    <Container>
      <h1>TicTacToe:</h1>
      <PortfolioContainer>
        <p>
          This one was my very first Project when I had started at General
          Assembly. This is the landing page for my TicTacToe Project - an app
          created in JavaScript, HTML and CSS.
          <br />
        </p>
        <div class="projects-wrapper">
          <div class="feature">
            <TicTacToe />
          </div>
        </div>
        <nav>
          <a class="info" href="https://caleshanley.github.io/project0/">
            Live Demo
          </a>
          <a class="info" href="https://github.com/CaleShanley/project0">
            Source Code
          </a>
        </nav>
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
  background: var(--secondary-color);
  padding: 1rem 0;
  margin-bottom: 1rem;
  h1 {
    margin: 1rem 0 0 4rem;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  }

  p {
    margin: 2rem 0 0 4rem;
    width: 100%;
    font-size: 20px;
    line-height: 1.3;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  }

  .info {
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    transition: all 0.3s ease-in;
    margin: 0 0 1rem 4rem;
    &:hover {
      transform: scale(1.05);
      text-decoration: underline;
    }
  }

  .feature {
    transition: all 0.3s ease-in;
    margin: 2rem 6rem 0;
    box-shadow: 2px 2px 50px 0 rgba(0, 0, 0, 0.3);
    width: 400px;

    &:hover {
      transform: scale(1.05);
    }
  }
`

const PortfolioContainer = styled.div`
  display: grid;
  grid-template-columns: 2fr 2fr;
  gap: 2rem;
`

export default StyledPortfolio
