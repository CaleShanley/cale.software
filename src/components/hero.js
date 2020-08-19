import React from 'react';
import styled from 'styled-components';
import {ReactComponent as GitHubIcon} from '../images/svg/githublogo.svg';
import {ReactComponent as LinkedInIcon} from '../images/svg/linkedinlogo.svg';
import {ReactComponent as EmailIcon} from '../images/svg/email.svg';
import Headshot from './headshot';
import { media } from '../utils';

const Hero = () => (
  <HeroContainer>
    <Headshot />
    <Text>
      <Subtitle> Currently looking for work</Subtitle>
      <Title>Cale Shanley</Title>
      <p>
        Recently graduated General Assembly's Software Engineering course. I'm
        passionate, motivated and excited for my future in the industry.
      </p>

      <IconWrapper>
        <Icon
          href="https://github.com/CaleShanley"
          target="_blank"
          rel="nofollow"
        >
          <GitHubIcon />
        </Icon>
        <Icon
          href="https://www.linkedin.com/in/caleshanley/"
          target="_blank"
          rel="nofollow"
        >
          <LinkedInIcon />
        </Icon>
        <Icon href="mailto:caleshanley.0@gmail.com">
          <EmailIcon />
        </Icon>
      </IconWrapper>
    </Text>
  </HeroContainer>
);

const Title = styled.h1`
  margin: 1.5rem 0;
  color: black;
  font-size: 3rem;
  font-weight: 800;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

  ${media.desktop`
    font-size: 4rem;
  `}
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
  flex-direction: column;
  align-items: center;

  ${media.desktop`
    flex-direction: row;
  `}
`;

const Icon = styled.a`
  height: 32px;
  width: 32px;
  margin-right: 1rem;
`;

const Text = styled.div`
  color: black;
  padding: 2rem 0 0;

  ${media.desktop`
    padding: 0 4rem 0 0;
  `}
`;

const Subtitle = styled.h2`
  font-size: 1rem
`

export default Hero;
