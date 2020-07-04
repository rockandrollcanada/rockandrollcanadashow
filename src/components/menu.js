import React from "react"
import Link from "gatsby-link"
import "../styles/materialize.css"
const Menu = () => (
  <div
    style={{
      background: "red",

      paddingTop: "30px",
    }}
  >
    <ul
      style={{
        listStyle: "none",

        display: "flex",
        justifyContent: "space-evenly",
      }}
    >
      <li>
        <Link
          to="/"
          style={{
            color: `red`,
            backgroundColor: ` white`,
            borderRadius: `2px`,
          }}
        >
          Index
        </Link>
      </li>
      <li>
        <Link
          to="/photo"
          style={{
            color: `red`,
            backgroundColor: ` white`,
            borderRadius: `2px`,
          }}
        >
          {" "}
          Photo
        </Link>
      </li>
      <li>
        <Link
          to="/video"
          style={{
            color: `red`,
            backgroundColor: ` white`,
            borderRadius: `2px`,
          }}
        >
          Video
        </Link>
      </li>
      <li>
        <Link
          to="/show"
          style={{
            color: `red`,
            backgroundColor: ` white`,
            borderRadius: `2px`,
          }}
        >
          show
        </Link>
      </li>
      <li>
        {" "}
        <Link
          to="/cook"
          style={{
            color: `red`,
            backgroundColor: ` white`,
            borderRadius: `2px`,
          }}
        >
          Cook
        </Link>
      </li>
      <li>
        <Link
          to="/code"
          style={{
            color: `red`,
            backgroundColor: ` white`,
            borderRadius: `2px`,
          }}
        >
          Code
        </Link>
      </li>
      <li>
        <Link
          to="/resume"
          style={{
            color: `red`,
            backgroundColor: ` white`,
            borderRadius: `2px`,
          }}
        >
          Resume
        </Link>
      </li>
    </ul>
  </div>
)

export default Menu
