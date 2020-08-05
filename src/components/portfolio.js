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
      <h1>Projects</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
        convallis eget ante semper finibus. Nunc pretium purus ac felis lobortis
        scelerisque. Maecenas semper fringilla nibh, in consectetur erat
        efficitur sed. Morbi vel tellus at mauris sagittis tristique. Nulla a
        fermentum massa. Nam porta dui eget augue ullamcorper, vel feugiat
        libero pharetra. Suspendisse potenti. Nunc sed sapien feugiat, suscipit
        urna quis, feugiat arcu. Nam vel eleifend lectus. Class aptent taciti
        sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
        Aliquam sem diam, blandit eu augue ac, placerat finibus enim. In vitae
        quam nisl. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
        convallis nisi bibendum suscipit ultrices. Etiam hendrerit nunc egestas
        aliquet scelerisque. Integer sit amet nunc rhoncus, sollicitudin turpis
        non, volutpat elit. Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Mauris convallis eget ante semper finibus. Nunc pretium purus ac
        felis lobortis scelerisque. Maecenas semper fringilla nibh, in
        consectetur erat efficitur sed. Morbi vel tellus at mauris sagittis
        tristique. Nulla a fermentum massa. Nam porta dui eget augue
        ullamcorper, vel feugiat libero pharetra. Suspendisse potenti. Nunc sed
        sapien feugiat, suscipit urna quis, feugiat arcu. Nam vel eleifend
        lectus. Class aptent taciti sociosqu ad litora torquent per conubia
        nostra, per inceptos himenaeos. Aliquam sem diam, blandit eu augue ac,
        placerat finibus enim. In vitae quam nisl. Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. In convallis nisi bibendum suscipit
        ultrices. Etiam hendrerit nunc egestas aliquet scelerisque. Integer sit
        amet nunc rhoncus, sollicitudin turpis non, volutpat elit. Lorem ipsum
        dolor sit amet, consectetur adipiscing elit. Mauris convallis eget ante
        semper finibus. Nunc pretium purus ac felis lobortis scelerisque.
        Maecenas semper fringilla nibh, in consectetur erat efficitur sed. Morbi
        vel tellus at mauris sagittis tristique. Nulla a fermentum massa. Nam
        porta dui eget augue ullamcorper, vel feugiat libero pharetra.
        Suspendisse potenti. Nunc sed sapien feugiat, suscipit urna quis,
        feugiat arcu. Nam vel eleifend lectus. Class aptent taciti sociosqu ad
        litora torquent per conubia nostra, per inceptos himenaeos. Aliquam sem
        diam, blandit eu augue ac, placerat finibus enim. In vitae quam nisl.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis
        nisi bibendum suscipit ultrices. Etiam hendrerit nunc egestas aliquet
        scelerisque. Integer sit amet nunc rhoncus, sollicitudin turpis non,
        volutpat elit.
      </p>
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
    margin: 0;
  }

  .feature {
    transition: all 0.3s ease-in;

    &:hover {
      transform: scale(1.05);
    }
  }

  .projects-wrapper {
    position: relative;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
    width: 400px;
    box-shadow: 2px 2px 50px 0 rgba(0, 0, 0, 0.22);
    cursor: pointer;
  }
`

export default StyledPortfolio
