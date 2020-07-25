import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import Hero from '../components/Hero'
import Languages from '../components/Languages'
import Portfolio from '../components/Portfolio'
import { Container } from "../components/layoutComponents"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Container>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <Hero />
      <Languages/>
      <Portfolio/>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
      <Link to="/page-2/">Go to page 2</Link>
    </Container>
  </Layout>
)

export default IndexPage
