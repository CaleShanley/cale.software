import { Link } from 'gatsby'
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
    <h1>Some topics I've learned over the course</h1>
    <div>
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
      <div class="devicon-git-plain">
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
  color: black;
  text-align: center;
  width: 100vw;
  position: relative;
  left: 50%;
  right: 50%;
  margin: 6rem -50vw 1rem;
  padding: 6rem 0px 2rem;
  h1 {
    margin: 1em auto;
    color: black;
  }

  .devicon-git-plain {
    max-width: 3em;
    margin: auto;
  }
`

export default StyledLanguages
