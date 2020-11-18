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
        <title>Cale's portfolio</title>
        <meta name="title" content="Cale's portfolio" />
        <meta name="description" content="Junior Website Developer" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://cale.software" />
        <meta property="og:title" content="Cale's portfolio" />
        <meta property="og:description" content="Junior Website Developer" />
        <meta
          property="og:image"
          content="src/images/cale_headshot_b_w-removebg-preview (1) (8).png"
        />
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
