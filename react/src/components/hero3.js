import React from 'react'

import PropTypes from 'prop-types'

import './hero3.css'

const Hero3 = (props) => {
  return (
    <div className={`hero3-header9 ${props.rootClassName} `}>
      <div className="hero3-container"></div>
      <div className="hero3-content thq-section-padding">
        <div className="hero3-max-width thq-section-max-width thq-flex-row">
          <div className="hero3-container1">
            <div className="hero3-column"></div>
            <h1 className="hero3-text thq-heading-1">{props.heading1}</h1>
          </div>
          <div className="hero3-column1">
            <p className="hero3-text1 thq-body-large">{props.content1}</p>
            <div className="hero3-actions">
              <button className="hero3-button thq-button-filled">
                <span className="thq-body-small">{props.action1}</span>
              </button>
              <button className="thq-button-outline hero3-button1">
                <span className="hero3-text3 thq-body-small">
                  {props.action2}
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Hero3.defaultProps = {
  imageSrc:
    'https://images.unsplash.com/photo-1582647921189-67575e3823fb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8c2VhcmNofDgwfHxzY2hvb2x8ZW58MHx8fHwxNzE1MDk3NzYzfDA&ixlib=rb-4.0.3&q=80&w=1500',
  imageSrc1:
    'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8c2VhcmNofDJ8fHRlY2h8ZW58MHx8fHwxNzE1MDk4MzM1fDA&ixlib=rb-4.0.3&q=80&w=1500',
  heading1: 'Professor John Smith',
  action2: 'Learn More',
  imageAlt1: 'image',
  imageSrc2:
    'https://images.unsplash.com/photo-1531297484001-80022131f5a1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8c2VhcmNofDF8fHRlY2h8ZW58MHx8fHwxNzE1MDk4MzM1fDA&ixlib=rb-4.0.3&q=80&w=1200',
  image1Alt: 'Professor Website Logo',
  content1: "Welcome to Professor Smith's Website",
  rootClassName: '',
  action1: 'Contact Professor',
  imageAlt: 'image',
  imageAlt2: 'image',
  image1Src:
    'https://images.unsplash.com/photo-1528980917907-8df7f48f6f2a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxNTA5NzM3Nnw&ixlib=rb-4.0.3&q=80&w=1080',
}

Hero3.propTypes = {
  imageSrc: PropTypes.string,
  imageSrc1: PropTypes.string,
  heading1: PropTypes.string,
  action2: PropTypes.string,
  imageAlt1: PropTypes.string,
  imageSrc2: PropTypes.string,
  image1Alt: PropTypes.string,
  content1: PropTypes.string,
  rootClassName: PropTypes.string,
  action1: PropTypes.string,
  imageAlt: PropTypes.string,
  imageAlt2: PropTypes.string,
  image1Src: PropTypes.string,
}

export default Hero3
