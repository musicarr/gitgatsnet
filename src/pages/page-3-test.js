import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
//import Seo from "../components/seo"

const page3test = () => (
  <Layout>
    <h1>this is page 3 test</h1>
    <p>Welcome to page 3</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

//export const Head = () => <Seo title="Page three" />

export default page3test