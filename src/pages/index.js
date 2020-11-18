import React from 'react';
import MetaTags from 'react-meta-tags';
import Layout from '../components/layout';
import Hero from '../components/hero';
import Languages from '../components/languages';
import Portfolio from '../components/portfolio';
import { Container } from '../components/layoutComponents';
import { Helmet } from 'react-helmet';
import SEO from '../components/seo';

const IndexPage = () => (
  <Layout>
    <Container>
      <Helmet>
        <title>Cale's Portfolio</title>
        <meta name="title" content="Cale's Portfolio" />
        <meta name="description" content="Junior Website Developer" />
        <meta property="og:image" content="src/images/portfolio-meta.png" />
        <meta property="og:url" content="https://cale.software" />
      </Helmet>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <Hero />
      <Languages />
      <Portfolio />
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}></div>
    </Container>
  </Layout>
);

export default IndexPage;
