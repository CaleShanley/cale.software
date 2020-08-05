import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import { Container } from './layoutComponents'

const Header = ({ siteTitle, className }) => (
  <header className={className}>
    <Container>
      <nav class="navmenu">
        <h1>
          <Link to="/">{siteTitle}</Link>
        </h1>
        <div class="navlinks">
          <div class="feature">
            <a class="navsize" href="#skills">
              Skills
            </a>
          </div>
          <div class="feature">
            <a class="navsize" href="/projects">
              Projects
            </a>
          </div>
          <div class="feature">
            <a class="navsize" href="/contact">
              Contact
            </a>
          </div>
        </div>
      </nav>
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
  align-content: center;
  h1 {
    margin-right: 39rem;
    font-size: 22px;
  }

  .navmenu {
    display: flex;
    margin-left: 0%;
    margin-top: 0%;
    justify-content: flex-end;
    align-items: center;
    flex: 1;
    line-height: 1.1;
    font-size: 16px;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;

    .navlinks {
      margin-bottom: 1.4rem;
      margin-right: 10px;
    }

    .feature {
      transition: all 0.3s ease-in;
      display: inline-flex;

      cursor: pointer;
      &:hover {
        transform: scale(1.05);
        text-decoration: underline;
      }
    }
  }

  a.navsize {
    font-size: 20px;
    margin-left: 2rem;
  }
`

export default StyledHeader
