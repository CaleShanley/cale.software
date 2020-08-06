import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import { Container } from './layoutComponents';
import { ReactComponent as Csslogo } from '../images/svg/csslogo.svg';
import { ReactComponent as Htmllogo } from '../images/svg/htmllogo.svg';
import { ReactComponent as Javascriptlogo } from '../images/svg/javascriptlogo.svg';
import { ReactComponent as Npmlogo } from '../images/svg/npmlogo.svg';
import { ReactComponent as Reactlogo } from '../images/svg/reactlogo.svg';
import { ReactComponent as Railslogo } from '../images/svg/railslogo.svg';
import { ReactComponent as Nodelogo } from '../images/svg/nodelogo.svg';
import { ReactComponent as Mysqllogo } from '../images/svg/mysqllogo.svg';
import { ReactComponent as Gitlogo } from '../images/svg/gitlogo.svg';

const Languages = ({ siteTitle, className }) => (
  <div className={className}>
    <Container>
      <h3>Some of My Skills:</h3>
      <DeviconWrapper>
        <Csslogo />
        <Htmllogo />
        <Javascriptlogo />
        <Npmlogo />
        <Gitlogo />
        <Reactlogo />
        <Railslogo />
        <Nodelogo />
        <Mysqllogo />
      </DeviconWrapper>
      <Paragraph>
        <SkillsWrapper>
          <FrontEndDiv>
            <h3>Font End Development</h3>
            <p>
              My code is always structured and thought out. I use all the latest
              CSS, HTML and JavaScript to ensure that the designs are
              responsive. I also implement the principal of DRY (Don't repeat
              yourself) when developing any website.
            </p>
          </FrontEndDiv>
          <BackEndDiv>
            <h3>Back End Development</h3>
            <p>
              Although invisible, this is one of the most important steps in any
              web-based project. I have learnt to build backend work using Node
              and Ruby. I am also familar with databases such as MySQL and
              PostgreSQL.
            </p>
          </BackEndDiv>
        </SkillsWrapper>
      </Paragraph>
    </Container>
  </div>
);

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

  scroll-container {
    display: block;
    width: 350px;
    height: 200px;
    overflow-y: scroll;
    scroll-behavior: smooth;
  }
`;

const DeviconWrapper = styled.div`
  max-width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(30px, 1fr));
  grid-gap: 3rem;
  align-items: center;
  margin: 4rem 5em 4rem 5em;
`;

const FrontEndDiv = styled.div`
  margin-right: 3rem;
`;

const BackEndDiv = styled.div``;

const SkillsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin: 3rem 0 3rem 0;
`;

const Paragraph = styled.p`
  color: grey;
  font-size: 18px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  text-align: center;
`;

export default StyledLanguages;
