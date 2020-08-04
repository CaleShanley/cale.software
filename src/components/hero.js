import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import { Container } from './layoutComponents'
import Image from '../components/image'
import Zoom from 'react-reveal/Zoom'

const Hero = ({ siteTitle, className }) => (
  <div className={className}>
    <Container>
      <HeroContainer>
        <Zoom>
          <Image />
        </Zoom>
        <Paragraph>
          <h1>I'm a Junior Web developer from Sydney looking for Work.</h1>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde itaque
          commodi reprehenderit eligendi tempore corporis tempora, laboriosam
          ullam nulla praesentium delectus maiores sunt incidunt quas libero at
          natus minima dolore.
        </Paragraph>
      </HeroContainer>
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
  background: var(--white);
  padding: 1rem 0;
  margin-bottom: 3rem;
  margin-top: 1em;
  font-size: 25px;
  word-spacing: 4px;

  h1 {
    margin: 0;
    margin-top: 1.5em;
    margin-bottom: 1rem;
    color: black;
    font-size: 50px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
`

const HeroContainer = styled.div`
  display: grid;
  grid-template-columns: 1.3fr 2fr;
  gap: 5rem;
`

const Paragraph = styled.p`
  color: black;
`

export default StyledHero
