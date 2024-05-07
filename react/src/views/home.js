import React from 'react'

import { Helmet } from 'react-helmet'

import Navbar4 from '../components/navbar4'
import Hero3 from '../components/hero3'
import Logos1 from '../components/logos1'
import Gallery1 from '../components/gallery1'
import Features17 from '../components/features17'
import Features18 from '../components/features18'
import Features171 from '../components/features171'
import CTA1 from '../components/cta1'
import FAQ1 from '../components/faq1'
import Contact4 from '../components/contact4'
import Footer15 from '../components/footer15'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Jolly Hearty Chicken</title>
        <meta property="og:title" content="Jolly Hearty Chicken" />
      </Helmet>
      <div className="home-navbar1">
        <Navbar4 rootClassName="navbar4-root-class-name"></Navbar4>
      </div>
      <div className="home-hero2">
        <Hero3 rootClassName="hero3-root-class-name"></Hero3>
      </div>
      <div className="home-logos3">
        <Logos1></Logos1>
      </div>
      <div className="home-gallery4">
        <Gallery1 rootClassName="gallery1-root-class-name"></Gallery1>
      </div>
      <div className="home-features5">
        <Features17></Features17>
      </div>
      <div className="home-features6">
        <Features18></Features18>
      </div>
      <div className="home-features7">
        <Features171 rootClassName="features171-root-class-name"></Features171>
      </div>
      <div className="home-cta8">
        <CTA1></CTA1>
      </div>
      <div className="home-faq9">
        <FAQ1 rootClassName="faq1-root-class-name"></FAQ1>
      </div>
      <div className="home-contact10">
        <Contact4 rootClassName="contact4-root-class-name"></Contact4>
      </div>
      <div className="home-footer11">
        <Footer15 rootClassName="footer15-root-class-name"></Footer15>
      </div>
    </div>
  )
}

export default Home
