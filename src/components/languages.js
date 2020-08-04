import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import { ReactComponent as Csslogo } from '../images/svg/csslogo.svg'
import { ReactComponent as Htmllogo } from '../images/svg/htmllogo.svg'
import { ReactComponent as Javascriptlogo } from '../images/svg/javascriptlogo.svg'
import { ReactComponent as Jquerylogo } from '../images/svg/jquerylogo.svg'
import { ReactComponent as Reactlogo } from '../images/svg/reactlogo.svg'
import { ReactComponent as Railslogo } from '../images/svg/railslogo.svg'
import { ReactComponent as Nodelogo } from '../images/svg/nodelogo.svg'
import { ReactComponent as Mysqllogo } from '../images/svg/mysqllogo.svg'

const Languages = ({ siteTitle, className }) => (
  <div className={className}>
    <h3>Some of My Skills:</h3>
    <Paragraph>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris convallis
      eget ante semper finibus. Nunc pretium purus ac felis lobortis
      scelerisque. Maecenas semper fringilla nibh, in consectetur erat efficitur
      sed. Morbi vel tellus at mauris sagittis tristique. Nulla a fermentum
      massa. Nam porta dui eget augue ullamcorper, vel feugiat libero pharetra.
      Suspendisse potenti. Nunc sed sapien feugiat, suscipit urna quis, feugiat
      arcu. Nam vel eleifend lectus. Class aptent taciti sociosqu ad litora
      torquent per conubia nostra, per inceptos himenaeos. Aliquam sem diam,
      blandit eu augue ac, placerat finibus enim. In vitae quam nisl. Lorem
      ipsum dolor sit amet, consectetur adipiscing elit. In convallis nisi
      bibendum suscipit ultrices. Etiam hendrerit nunc egestas aliquet
      scelerisque. Integer sit amet nunc rhoncus, sollicitudin turpis non,
      volutpat elit.
    </Paragraph>
    <div class="devicon">
      <Csslogo />
      <Htmllogo />
      <Javascriptlogo />
      <Jquerylogo />
      <Reactlogo />
      <Railslogo />
      <Nodelogo />
      <Mysqllogo />
    </div>
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
  text-align: center;
  width: 100vw;
  position: relative;
  left: 50%;
  right: 50%;
  margin: 6rem -50vw 1rem;
  padding: 3rem 0px 2rem;
  h3 {
    margin: 1em 35em 2rem 0;
    color: black;
  }

  .devicon {
    max-width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(30px, 1fr));
    grid-gap: 3rem;
    align-items: center;
    margin: 1rem 10em 0 10em;
  }
`

const Paragraph = styled.p`
  color: grey;
  font-size: 22px;
  margin: 0 7em 0 7em;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`

export default StyledLanguages
