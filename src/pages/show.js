import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Menu from "../components/menu"

const ShowPage = () => (
  <Layout>
    <SEO title="Rock and Roll Canada Show" />
    <div class="card-panel red accent-4 center-align">
      <a href="https://www.rockandrollcanada.ca/show">
        Welcome to the Show Web site{" "}
      </a>
    </div>
    <div class="video-container">
      <iframe
        title="rock and roll Canada"
        width="853"
        height="480"
        src="//www.youtube.com/embed/Gr65RZCitgA?rel=0"
        frameborder="0"
        allowfullscreen
      ></iframe>
    </div>

    <p>Welcome to canadian_politics</p>

    <Menu />
  </Layout>
)

export default ShowPage
