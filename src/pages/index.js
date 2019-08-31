import React from 'react'
import Link from 'gatsby-link'
// import Img from 'gatsby-image'
// import { graphql } from "gatsby"
import {pic1} from '/Users/linyuanhong/Documents/ceshi/src/pages/313.jpg'

const IndexPage = () => (
  <div>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <img className='pic1' src={pic1}  data-src={pic1}></img>
    <Link to="/page-2/">Go to page 2</Link>
  </div>
)

export default IndexPage
