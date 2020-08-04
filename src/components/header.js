import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import { Container } from './layoutComponents'

const Header = ({ siteTitle, className }) => (
  <header className={className}>
    <Container>
      <h1>
        <Link to="/">{siteTitle}</Link>
      </h1>
    </Container>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string
}

Header.defaultProps = {
  siteTitle: ``
}

const StyledHeader = styled(Header)`
  color: var(--white);
  background: var(--white);
  padding: 1rem 0;
  margin-bottom: 1rem;
  font-size: 22px;
  font-weight: 500;
  h1 {
    margin: 0;
  }
`

export default StyledHeader
