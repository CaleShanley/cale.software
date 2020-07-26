import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import { Container } from './layoutComponents'

const Languages = ({ siteTitle, className }) => (
  <div className={className}>
    <Container>
      <h1>Languages I can't use</h1>
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
        non, volutpat elit.
      </p>
    </Container>
  </div>
)

Languages.propTypes = {
  siteTitle: PropTypes.string
}

Languages.defaultProps = {
  siteTitle: ``
}

const StyledLanguages = styled(Languages)`
  color: var(--white);
  background: var(--primary-color);
  padding: 1rem 0;
  margin-bottom: 1rem;
  h1 {
    margin: 0;
  }
`

export default StyledLanguages
