import React from 'react';
import styled from 'styled-components';
import { Container } from './layoutComponents';
import { ReactComponent as Csslogo } from '../images/svg/csslogo.svg';
import { ReactComponent as Htmllogo } from '../images/svg/htmllogo.svg';
import { ReactComponent as Javascriptlogo } from '../images/svg/javascriptlogo.svg';
import { ReactComponent as Npmlogo } from '../images/svg/npmlogo.svg';
import { ReactComponent as Vuelogo } from '../images/svg/vuelogo.svg';
import { ReactComponent as Railslogo } from '../images/svg/railslogo.svg';
import { ReactComponent as Nodelogo } from '../images/svg/nodelogo.svg';
import { ReactComponent as Gitlogo } from '../images/svg/gitlogo.svg';
import { ReactComponent as Mysqllogo } from '../images/svg/mysqllogo.svg';
import { media } from '../utils';

const Languages = () => (
  <Wrapper id="skills">
    <Container>
      <Heading2>My Skills:</Heading2>
      <DeviconWrapper>
        <RowDiv>
          <Csslogo />
          <Htmllogo />
          <Javascriptlogo />
        </RowDiv>
        <RowDiv>
          <Npmlogo />
          <Gitlogo />
          <Vuelogo />
        </RowDiv>
        <RowDiv>
          <Railslogo />
          <Nodelogo />
          <Mysqllogo />
        </RowDiv>
      </DeviconWrapper>
      <Paragraph>
        <SkillsWrapper>
          <FrontEndDiv>
            <Heading3>Font End Development</Heading3>
            <p>
              (Desired Career) My code is always structured and thought out. I
              use all the latest CSS, HTML and JavaScript to ensure that the
              designs are responsive. I also implement the principal of DRY
              (Don't repeat yourself) when developing any website.
            </p>
          </FrontEndDiv>
          <BackEndDiv>
            <Heading3>Back End Development</Heading3>
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
  </Wrapper>
);

const Wrapper = styled.div`
  background: #daeaf6;
  margin: 6rem auto 2rem;
  padding: 3rem 0 1rem;
  max-width: 1125px;
`;

const DeviconWrapper = styled.div`
  width: 100%;
  min-height: 10rem;
  display: flex;
  justify-content: center;
  flex-direction: column;

  ${media.tablet`
    font-size: 30px;
    flex-direction: row;
    justify-content: space-around;
  `}
`;

const RowDiv = styled.div`
  width: 100%;
  margin: 1.5rem 0;
  display: flex;
  flex-direction: row;
  justify-content: space-around;

  ${media.tablet`
    margin: 0;
  `}
`;

const FrontEndDiv = styled.div`
  margin-bottom: 2rem;
  ${media.desktop`
    margin-right: 2rem;
  `}
`;

const BackEndDiv = styled.div`
  ${media.desktop`
    margin-right: 2rem;
  `}
`;

const SkillsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 2rem 0 3rem 0;

  ${media.desktop`
    display: flex;
    flex-direction: row;
    text-align: center;
    justify-content: space-between;
  `}
`;

const Heading2 = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  text-align: center;
`;

const Heading3 = styled.h2`
  font-size: 1.5rem;
  font-weight: 700;
  text-align: center;
`;

const Paragraph = styled.div`
  color: grey;
  font-size: 18px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  text-align: center;

  ${media.desktop`
    font-size: 20px;
  `}
`;

export default Languages;
