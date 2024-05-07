import React from 'react'

import PropTypes from 'prop-types'

import './navbar4.css'

const Navbar4 = (props) => {
  return (
    <div className={`navbar4-container ${props.rootClassName} `}>
      <header data-thq="thq-navbar" className="navbar4-navbar-interactive">
        <div data-thq="thq-navbar-nav" className="navbar4-desktop-menu">
          <nav className="navbar4-links">
            <span className="navbar4-link1 thq-body-small thq-link">
              {props.link1}
            </span>
            <span className="navbar4-link2 thq-body-small thq-link">
              {props.link2}
            </span>
            <span className="navbar4-link3 thq-body-small thq-link">
              {props.link3}
            </span>
            <span className="navbar4-link4 thq-body-small thq-link">
              {props.link4}
            </span>
            <span className="thq-body-small thq-link">{props.link5}</span>
          </nav>
          <div className="navbar4-buttons">
            <button className="navbar4-action1 thq-button-filled">
              {props.action1}
            </button>
            <button className="navbar4-action2 thq-button-outline">
              {props.action2}
            </button>
          </div>
        </div>
        <div data-thq="thq-burger-menu" className="navbar4-burger-menu">
          <svg viewBox="0 0 1024 1024" className="navbar4-icon">
            <path
              d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"
              className=""
            ></path>
          </svg>
        </div>
        <div data-thq="thq-mobile-menu" className="navbar4-mobile-menu">
          <div className="navbar4-nav">
            <div className="navbar4-top">
              <img
                alt={props.logoAlt}
                src={props.logoSrc}
                className="navbar4-logo"
              />
              <div data-thq="thq-close-menu" className="navbar4-close-menu">
                <svg viewBox="0 0 1024 1024" className="navbar4-icon2">
                  <path
                    d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"
                    className=""
                  ></path>
                </svg>
              </div>
            </div>
            <nav className="navbar4-links1">
              <span className="thq-body-small thq-link">{props.link1}</span>
              <span className="thq-body-small thq-link">{props.link2}</span>
              <span className="thq-body-small thq-link">{props.link3}</span>
              <span className="thq-body-small thq-link">{props.link4}</span>
              <span className="thq-body-small thq-link">{props.link5}</span>
            </nav>
          </div>
          <div className="navbar4-buttons1">
            <button className="thq-button-filled">Login</button>
            <button className="thq-button-outline">Register</button>
          </div>
        </div>
      </header>
    </div>
  )
}

Navbar4.defaultProps = {
  link1: 'Home',
  action1: 'Login',
  logoSrc:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/84ec08e8-34e9-42c7-9445-d2806d156403/fac575ac-7a41-484f-b7ac-875042de11f8?org_if_sml=1&force_format=original',
  action2: 'Search',
  link3: 'Research',
  logoAlt: 'Tech Company Professor Website',
  link2: 'About',
  link5: 'Contact',
  rootClassName: '',
  link4: 'Publications',
}

Navbar4.propTypes = {
  link1: PropTypes.string,
  action1: PropTypes.string,
  logoSrc: PropTypes.string,
  action2: PropTypes.string,
  link3: PropTypes.string,
  logoAlt: PropTypes.string,
  link2: PropTypes.string,
  link5: PropTypes.string,
  rootClassName: PropTypes.string,
  link4: PropTypes.string,
}

export default Navbar4
