import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import { Container } from './layoutComponents'
import { ReactComponent as Githublogo } from '../images/svg/githublogo.svg'
import { ReactComponent as Linkedinlogo } from '../images/svg/linkedinlogo.svg'
import Headshot from './headshot'

const Hero = ({ siteTitle, className }) => (
  <div className={className}>
    <Container>
      <HeroContainer>
        <Headshot />
        <Paragraph>
          <h1>I'm a Junior Web developer from Sydney.</h1>
          Over the past 4 months, I've gained a ton of new experience studying
          through General Assembly's Software Engineering immersive course. I'm
          passionate, motivated and excited for my future in the industry.
          <div class="devicon-wrapper">
            <div class="githublogo">
              <a href="https://github.com/CaleShanley">
                <Githublogo />
              </a>
            </div>
            <div class="linkedinlogo">
              <a href="https://www.linkedin.com/in/caleshanley/">
                <Linkedinlogo />
              </a>
            </div>
          </div>
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
  background: var(--white);
  padding: 1rem 0;
  margin-bottom: 3rem;
  margin-top: 1em;
  font-size: 25px;
  word-spacing: 2px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

  h1 {
    margin: 0;
    margin-top: 1.5em;
    margin-bottom: 1rem;
    color: black;
    font-size: 45px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  .devicon-wrapper {
    max-width: 2rem;
    margin-top: 2rem;
  }

  .githublogo {
    margin-bottom: 1rem;
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
