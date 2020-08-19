import React from 'react'
import styled from 'styled-components'
import { Container } from './layoutComponents'

const Footer = ({ className }) => (
  <footer className={className}>
    <Container>
      © {new Date().getFullYear()} Cale Shanley, This website is made using
      React and Gatsby. Hosted via Netlify.
      {` `}
    </Container>
  </footer>
)

const StyledFooter = styled(Footer)`
  color: #333;
  padding: 1rem 0;
  font-size: 17px;
  text-align: center;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`

export default StyledFooter
