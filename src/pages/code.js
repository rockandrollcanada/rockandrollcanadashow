import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const CodePage = () => (
  <Layout>
    <SEO title="Canadian Coder" />
    <div class="card-panel light-green darken-3 center-align">
      Getting started with the pwa starter kit from Polymer.
    </div>
    <div class="video-container">
      <iframe
        title="Canadian Web Developer"
        width="853"
        height="480"
        src="https://www.youtube.com/embed/PZ_UuX0AeKk"
        frameborder="0"
        allowfullscreen
      ></iframe>
    </div>
    <br />
    <div className="card-panel light-green darken-3 center-align ">
      WordPress Videos from 2014{" "}
    </div>
    <div className="container">
      <div className="row">
        <div className="col s6">
          <div className="video-container">
            <iframe
              title="Rock and Roll Canada Video"
              width="853"
              height="480"
              src="https://www.youtube.com/embed/9PBkKnW5aRI"
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
          <div className="card-panel light-green darken-3">
            Create a Feature Video instead of a Feature image in your POSTS with
            this free Plugin. Feature Video Plus. We are using the default 2014
            WordPress theme in this tutorial series.
          </div>
        </div>

        <div className="col s6">
          <div className="video-container">
            <iframe
              title="Rock and Roll Canada Video"
              width="853"
              height="480"
              src="https://www.youtube.com/embed/ZjGFMZcm4F8"
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
          <div className="card-panel light-green darken-3">
            In this video we discus making a standard post in WordPress using
            the 2014 default theme.{" "}
          </div>
        </div>
      </div>
    </div>
    <hr></hr>
    <div className="container">
      <div className="row">
        <div className="col s6">
          <div className="video-container">
            <iframe
              title="Rock and Roll Canada Video"
              width="853"
              height="480"
              src="https://www.youtube.com/embed/siChdbKPzTQ"
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
          <div className="card-panel light-green darken-3">
            New Show called Tech Talk at Rock and Roll Canada, behind the
            scenes. We will give you some tips on Web Development and Design.
            How you can build your own website. We use WordPress with bluehost
            hosting.
          </div>
        </div>

        <div className="col s6">
          <div className="video-container">
            <iframe
              title="Rock and Roll Canada Video"
              width="853"
              height="480"
              src="https://www.youtube.com/embed/QNGA788-0bU"
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
          <div className="card-panel light-green darken-3">
            Introduction To WordPress 3.8 as part of a video series by Looking
            Fine Web Design. A series of short five to ten minute videos to help
            you learn WordPress in 2014.
          </div>
        </div>
      </div>
    </div>
    <hr></hr>
    <p className="center-align">
      I am Glen Smith a Canadian Web Developr based in Toronto, CANADA.
    </p>
  </Layout>
)

export default CodePage
