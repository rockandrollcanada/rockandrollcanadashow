import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const PhotoPage = () => (
  <Layout>
    <SEO title="Rock and Roll Canada Photos" />
    <h1>Glen Smith Photo inspirations</h1>
    <div class="card-panel light-green darken-3">
      $PATH reminder in node Java Script. On a Mac you have to run sudo if you
      have not configured your permissions properly.
    </div>
    <div className="container">
      <div className="row">
        <div class="col s6">
          <img
            src={require("../images/nodejs.png")}
            alt="setting up node Java Script"
          />
        </div>
        <div class="col s6">
          <img src={require("../images/liver.jpg")} alt="Glen Rockin Smith" />
        </div>
      </div>
    </div>
    <div class="card-panel light-green darken-3">
      Nashville Pussy playing Toronto Horseshoe September 26,2019. Stay tuned
      for video.
    </div>

    <img
      src={require("../images/nashvillepussy.jpg")}
      alt="Nashville Pussy comming to Canada."
    />
    <div className="card-panel light-green darken-3">
      Money raised for The Canadian Liver associations.
    </div>
    <img src={require("../images/liver.jpg")} alt="Working with GIMP 2.10." />
  </Layout>
)

export default PhotoPage
