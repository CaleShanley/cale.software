import React from 'react'

import Layout from '../components/layout'
import Hero from '../components/hero'
import Languages from '../components/languages'
import Portfolio from '../components/portfolio'
import { Container } from '../components/layoutComponents'
import SEO from '../components/seo'

const IndexPage = () => (
  <Layout>
    <Container>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <Hero />
      <Languages />
      <Portfolio />
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}></div>
    </Container>
  </Layout>
)

export default IndexPage
