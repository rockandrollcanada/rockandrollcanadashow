import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ResumePage = () => (
  <Layout>
    <SEO title="Canadian Coder" />
    <h1 className="card-panel red darken-4 center-align">
      <a href="https://my.indeed.com/p/glens-zwjug96">Link to online Resume</a>
    </h1>
    <hr></hr>

    <img
      src={require("../images/danishes.jpg")}
      alt="Nashville Pussy comming to Canada."
    />
    <p className="center-align">
      I am Glen Smith a Canadian Web Developr based in Toronto, CANADA.
    </p>
  </Layout>
)

export default ResumePage
