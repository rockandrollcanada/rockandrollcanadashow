import React from "react"
import Link from "gatsby-link"
import Layout from "../components/layout"

const Menu2 = () => (
  <Layout>
    <div>
      <ul
        style={{
          listStyle: "none",

          display: "flex",
          justifyContent: "space-evenly",
        }}
      >
        <li>
          <Link to="/">Index</Link>
        </li>
        <li>
          <Link to="/photo"> Photo</Link>
        </li>
        <li>
          <Link to="/video">Video</Link>
        </li>
        <li>
          <Link to="/politics">POL 101Y</Link>
        </li>
        <li>
          {" "}
          <Link to="/cook">Cook</Link>
        </li>
        <li>
          <Link to="/code">Code</Link>
        </li>
        <li>
          <Link to="/resume">Resume</Link>
        </li>
      </ul>
    </div>
  </Layout>
)

export default Menu2
