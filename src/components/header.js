import React from 'react'
import Link from 'gatsby-link'
import './Header.css'
import {Helmet} from "react-helmet";
// import

const Header = ({ siteTitle }) => (
  
  <div>
      <link rel="icon" type="png" ></link>
    <div className="div1">
    
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
  
  </div>
)

export default Header
