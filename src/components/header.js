import { Link, navigate } from 'gatsby';
import React, { useState } from 'react';
import styled from 'styled-components';
import { Container } from './layoutComponents';
import { ReactComponent as MenuIcon } from '../images/svg/menubar.svg';
import { media } from '../utils';

const Header = ({ siteTitle, className }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    console.log(isOpen);
  };

  const navigate = (event, id) => {
    event.preventDefault();

    const el = document.getElementById(id);
    const top = window.pageYOffset + el.getBoundingClientRect().top;
    console.log(el, top);

    window.scrollTo({
      top,
      behavior: 'smooth'
    });
  };

  return (
    <header className={className}>
      <Container>
        <NavMenu>
          <Title>
            <Link to="/">{siteTitle}</Link>
          </Title>
          <MenuBtn onClick={() => toggleMenu()} />
          <NavLinks isOpen={isOpen}>
            <LinkBtn onClick={e => navigate(e, 'skills')}>Skills</LinkBtn>
            <LinkBtn onClick={e => navigate(e, 'projects')}>Projects</LinkBtn>
            <LinkBtn onClick={e => navigate(e, 'contact')}>Contact Me</LinkBtn>
          </NavLinks>
        </NavMenu>
      </Container>
    </header>
  );
};

const StyledHeader = styled(Header)`
  color: var(--white);
  background: var(--white);
  padding: 1rem 0;
  align-content: center;

`;

const Title = styled.h1`
  font-size: 22px;
  margin-bottom: 0;
`;

const NavLinks = styled.div`
  background: var(--secondary-color);
  display: ${props => (props.isOpen ? 'flex' : 'none')};
  position: absolute;
  width: 100%;
  height: 400px;
  left: 0;
  top: 0;
  justify-content: space-around;
  flex-direction: column;
  z-index: 5;

  ${media.desktop`
    position: relative;
    display: block;
    background: var(--white);
    height: 25px;
    width: 293px;
    margin-right: 0;
    margin-left: 1rem;
  `}
`;

const LinkBtn = styled.button`
  background: transparent;
  border: none;
  padding: 0;
  font-size: 22px;
  cursor: pointer;

  &:hover {
    text-decoration: underline
  }

  ${media.desktop`
    margin-left: 1rem;
    margin-right: 0;
  `}
`;

const MenuBtn = styled(MenuIcon)`
  z-index: 10;

  ${media.desktop`
    display: none;
  `}
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
