import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import { ReactComponent as Githublogo } from '../images/svg/githublogo.svg'
import { ReactComponent as Linkedinlogo } from '../images/svg/linkedinlogo.svg'
import { ReactComponent as Envelope } from '../images/svg/envelope.svg'
import { Container } from './layoutComponents'

const Languages = ({ siteTitle, className }) => (
  <div className={className}>
    <Container>
      <h3>Have any Questions?</h3>
      <Paragraph>
        <div>
          <Envelope />
          <p>caleshanley.0@gmail.com</p>
        </div>
      </Paragraph>
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
  background: var(--secondary-color);
  margin-bottom: 1rem;

  width: 100vw;
  position: relative;
  left: 50%;
  right: 50%;
  margin: 6rem -50vw 1rem;
  padding: 3rem 0px 2rem;
  h3 {
    color: black;
    margin-bottom: 1rem;
    text-align: center;
  }

  .devicon-wrapper {
    max-width: 2rem;
    margin-top: 2rem;
  }

  .githublogo {
    margin-bottom: 1rem;
  }
`

const Paragraph = styled.p`
  color: black;
  font-size: 18px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`

export default StyledLanguages
