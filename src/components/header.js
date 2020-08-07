import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import { Container } from './layoutComponents';

const Header = ({ siteTitle, className }) => (
  <header className={className}>
    <Container>
      <NavMenu>
        <Title>
          <Link to="/">{siteTitle}</Link>
        </Title>
        <NavLinks>
          <FeatureDiv>
            <a href="/projects">Projects</a>
          </FeatureDiv>
        </NavLinks>
      </NavMenu>
    </Container>
  </header>
);

const StyledHeader = styled(Header)`
  color: var(--white);
  background: var(--white);
  padding: 1rem 0;
  align-content: center;

  a {
    font-size: 20px;
  }
`;

const FeatureDiv = styled.div`
  display: inline-flex;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

const Title = styled.h1`
  font-size: 22px;
`;

const NavLinks = styled.div`
  margin-bottom: 1.4rem;
  margin-right: 10px;
`;

const NavMenu = styled.nav`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  line-height: 1.1;
  font-size: 16px;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
`;

export default StyledHeader;
