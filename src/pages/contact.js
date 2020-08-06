import React from 'react'
import SEO from '../components/seo'
import Drinkproject from '../components/drinkproject'
import Todolistproject from '../components/todolistproject'
import Tictactoeproject from '../components/tictactoeproject'
import Layout from '../components/layout'

import { Container } from '../components/layoutComponents'

const ContactPage = () => (
  <Layout>
    <Container>
      <SEO title="Page two" />
      <Drinkproject />
      <Todolistproject />
      <Tictactoeproject />
    </Container>
  </Layout>
)

export default ContactPage
