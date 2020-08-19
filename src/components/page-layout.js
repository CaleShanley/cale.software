import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { GlobalStyle } from './globalStyle';
import { MainWrapper } from './layoutComponents';
import Header from './header';
import Footer from './footer';

const Layout = ({ children }) => (
  <>
    <GlobalStyle />
    <MainWrapper>
      <Header page={true} />
      <main>{children}</main>
      <Footer />
    </MainWrapper>
  </>
);

export default Layout;
