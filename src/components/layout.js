/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import "../styles/materialize.css"
import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0px 1.0875rem 1.45rem`,
          paddingTop: 0,
        }}
      >
        <main>{children}</main>

        <footer class="page-footer card-panel green darken-4">
          <div class="container">
            <div class="row">
              <div class="col l6 s12">
                <h5 class="white-text">Thank You for the visit.</h5>
                <p class="grey-text text-lighten-4">
                  This site was developed with gatsby js which is powered by
                  react and JSX. Wordpress sites are listed below.
                </p>
                <h2>Rock and Roll Canada</h2>
                <img
                  className="center-align"
                  src={require("../images/canada.png")}
                  alt="The Original Rock and Roll Canada Logo"
                />
              </div>
              <div class="col l4 offset-l2 s12">
                <h5 class="white-text">Authored web sites.</h5>
                <ul>
                  <li>
                    <a
                      class="grey-text text-lighten-3"
                      href="https://rockandrollcanada.ca/show"
                    >
                      Rock and Roll Show Canada Website
                    </a>
                  </li>
                  <li>
                    <a
                      class="grey-text text-lighten-3"
                      href="https://sourceonesupply.ca/"
                    >
                      Source one Supply Canadian Web Site
                    </a>
                  </li>
                  <li>
                    <a class="grey-text text-lighten-3" href="https://xyzed.ca">
                      xyzed recording studios website
                    </a>
                  </li>
                  <li>
                    <a
                      class="grey-text text-lighten-3"
                      href="https://cannabiscomedychurch.com"
                    >
                      Cannabis Comedy Church
                    </a>
                  </li>
                  <li>
                    <a
                      class="grey-text text-lighten-3"
                      href="https://willyjack.ca"
                    >
                      WillyJack
                    </a>
                  </li>
                  <li>
                    <a
                      class="grey-text text-lighten-3"
                      href="https://biggybiggbud.ca/"
                    >
                      biggybiggbud
                    </a>
                  </li>
                  <li>
                    <a
                      class="grey-text text-lighten-3"
                      href="https://ganjatarianedibles.ca/"
                    >
                      ganjatarianedibles
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="footer-copyright">
            <div class="container">
              © 2020 Rock and Roll Canada
              <a class="grey-text text-lighten-4 right" href="#!">
                It is not just a website. It is an attitude.
              </a>
            </div>
          </div>
          <div className="center-align">
            © {new Date().getFullYear()}, Built by Glen Smith with gatsbyjs
            Canada
          </div>
          {` `}
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
