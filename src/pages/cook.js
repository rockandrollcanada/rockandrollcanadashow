import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const CookPage = () => (
  <Layout>
    <SEO title="Canadian Cook" />
    <div class="card-panel light-green darken-3 center-align ">
      Grammas Secret Shortbread recipe from the fifties.
    </div>
    <div class="video-container">
      <iframe
        title="rock and roll Canada"
        width="853"
        height="480"
        src="https://player.vimeo.com/video/76687985"
        frameborder="0"
        allowfullscreen
      ></iframe>
    </div>
    <br />
    <div className="card-panel light-green darken-3 center-align ">
      Pork Carnitas for Lunch.{" "}
    </div>
    <img
      src={require("../images/carnitas.jpg")}
      alt="Pork Carnitas for Lunch."
    />
    <br />
    <div className="card-panel light-green darken-3 center-align ">
      Greek Fries loaded with feta for Lunch{" "}
    </div>
    <img
      src={require("../images/greekFries.jpg")}
      alt="Greek Fries loaded with feta for Lunch."
    />
    <br />
    <div className="card-panel light-green darken-3 center-align ">
      Muffins for Breakfast Canada is really just cake.{" "}
    </div>
    <img
      src={require("../images/muffins.jpg")}
      alt="Muffins for Breakfast Canada is really just cake."
    />
    <br />
    <div className="card-panel light-green darken-3 center-align ">
      Daily Danishes for Breakfast and Lunch.{" "}
    </div>
    <img
      src={require("../images/danishes.jpg")}
      alt="Daily Danishes for Breakfast and Lunch."
    />
    <br />
    <div className="card-panel light-green darken-3 center-align ">
      Daily lunch features Canada cooks.{" "}
    </div>
    <img
      src={require("../images/features.jpg")}
      alt="Daily lunch features Canada cooks."
    />
  </Layout>
)

export default CookPage
