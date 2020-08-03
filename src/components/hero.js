import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import { Container } from './layoutComponents'
import Image from '../components/image'

const Hero = ({ siteTitle, className }) => (
  <div className={className}>
    <Container>
      <div>
        <h1>My name is cale</h1>
        <Paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
          convallis eget ante semper finibus. Nunc pretium purus ac felis
          lobortis scelerisque. Maecenas semper fringilla nibh, in consectetur
          erat efficitur sed. Morbi vel tellus at mauris sagittis tristique.
          Nulla a fermentum massa. Nam porta dui eget augue ullamcorper, vel
          feugiat libero pharetra. Suspendisse potenti. Nunc sed sapien feugiat,
          suscipit urna quis, feugiat arcu. Nam vel eleifend lectus. Class
          aptent taciti sociosqu ad litora torquent per conubia nostra, per
          inceptos himenaeos. Aliquam sem diam, blandit eu augue ac, placerat
          finibus enim. In vitae quam nisl. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. In convallis nisi bibendum suscipit
          ultrices. Etiam hendrerit nunc egestas aliquet scelerisque. Integer
          sit amet nunc rhoncus, sollicitudin turpis non, volutpat elit.
        </Paragraph>
      </div>
    </Container>
  </div>
)

Hero.propTypes = {
  siteTitle: PropTypes.string
}

Hero.defaultProps = {
  siteTitle: ``
}

const StyledHero = styled(Hero)`
  color: var(--white);
  background: var(--primary-color);
  padding: 1rem 0;
  margin-bottom: 1rem;
  h1 {
    margin: 0;
  }
`

const Paragraph = styled.p`
  color: red;
`

export default StyledHero
