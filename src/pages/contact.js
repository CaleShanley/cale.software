import React from 'react'
import SEO from '../components/seo'
import Contactme from '../components/contactme'
import Layout from '../components/layout'

import { Container } from '../components/layoutComponents'

const ContactPage = () => (
  <Layout>
    <Container>
      <SEO title="Page two" />
      <Contactme />
    </Container>
  </Layout>
)

export default ContactPage
