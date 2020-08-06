import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import { Container } from './layoutComponents';
import { ReactComponent as Githublogo } from '../images/svg/githublogo.svg';
import { ReactComponent as Linkedinlogo } from '../images/svg/linkedinlogo.svg';
import { ReactComponent as Envelopelogo } from '../images/svg/envelope.svg';
import Headshot from './headshot';

const Hero = () => (
  <HeroContainer>
    <Headshot />
    <Text>
      <Title>I'm a Junior Web developer from Sydney.</Title>
      <p>
        Over the past 4 months, I've gained a ton of experience studying through
        General Assembly's Software Engineering immersive course. I'm
        passionate, motivated and excited for my future in the industry.
      </p>

      <IconWrapper>
        <Icon
          href="https://github.com/CaleShanley"
          target="_blank"
          rel="nofollow"
        >
          <Githublogo />
        </Icon>
        <Icon
          href="https://www.linkedin.com/in/caleshanley/"
          target="_blank"
          rel="nofollow"
        >
          <Linkedinlogo />
        </Icon>
        <Icon href="mailto:caleshanley.0@gmail.com">
          <Envelopelogo />
        </Icon>
      </IconWrapper>
    </Text>
  </HeroContainer>
);

const Title = styled.h1`
  margin: 1.5rem 0;
  color: black;
  font-size: 45px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`;

const IconWrapper = styled.div`
  display: flex;
`;

const HeroContainer = styled.div`
  background: var(--white);
  padding: 1rem 0;
  margin-bottom: 3rem;
  margin-top: 1em;
  margin-right: 2rem;
  font-size: 20px;
  word-spacing: 2px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

  display: flex;
  align-items: center;
`;

const Icon = styled.a`
  height: 32px;
  width: 32px;
  margin-right: 1rem;
`;

const Text = styled.p`
  color: black;
  padding-left: 4rem;
`;

export default Hero;
