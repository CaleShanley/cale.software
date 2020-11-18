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

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://metatags.io/" />
        <meta property="og:title" content="Cale's Portfolio" />
        <meta property="og:description" content="Junior Website Developer" />
        <meta
          property="og:image"
          content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png"
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
