import React from 'react';
import MetaTags from 'react-meta-tags';
import Layout from '../components/layout';
import Hero from '../components/hero';
import Languages from '../components/languages';
import Portfolio from '../components/portfolio';
import { Container } from '../components/layoutComponents';
import SEO from '../components/seo';

const IndexPage = () => (
  <Layout>
    <Container>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <meta
        property="og:image"
        content="src/images/cale_headshot_b_w-removebg-preview (1) (8).png"
      />
      <Hero />
      <Languages />
      <Portfolio />
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}></div>
    </Container>
  </Layout>
);

export default IndexPage;
