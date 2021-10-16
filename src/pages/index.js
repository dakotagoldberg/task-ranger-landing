import * as React from 'react'
import { Helmet } from "react-helmet"
import Layout from '../components/layout'
import Landing from '../components/landing'

const IndexPage = () => {
  return (
    <>
      <Helmet>
        <title>TaskRanger</title>
        <meta name="icon" href="../images/favicon.ico" />
      </Helmet>
      <Layout pageTitle="TaskRanger">
        <Landing/>
      </Layout>
    </>
  )
}
// Step 3: Export your component
export default IndexPage