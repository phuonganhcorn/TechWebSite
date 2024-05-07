import React from 'react'

import PropTypes from 'prop-types'

import './features17.css'

const Features17 = (props) => {
  return (
    <div className="features17-layout349 thq-section-padding">
      <div className="features17-max-width thq-section-max-width">
        <div className="features17-image-container">
          <img
            alt={props.feature1ImageAlt}
            src={props.feature1ImageSrc}
            className="thq-img-ratio-16-9"
          />
        </div>
        <div className="features17-content">
          <div className="features17-section-title">
            <span className="features17-text thq-body-small">
              {props.feature1Slogan}
            </span>
            <div className="features17-content1">
              <h2 className="features17-text1 thq-heading-2">
                {props.feature1Title}
              </h2>
              <p className="features17-text2 thq-body-large">
                {props.feature1Description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Features17.defaultProps = {
  feature1ImageSrc:
    'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDg3fHx0ZWNofGVufDB8fHx8MTcxNTA5OTIzMnww&ixlib=rb-4.0.3&w=1400',
  feature1ImageAlt: 'Cutting-Edge Research Image',
  feature1Description:
    'Our professors are engaged in groundbreaking research that shapes the future of technology.',
  feature1Slogan: 'Pushing the boundaries of technology',
  feature1Title: 'Cutting-Edge Research',
}

Features17.propTypes = {
  feature1ImageSrc: PropTypes.string,
  feature1ImageAlt: PropTypes.string,
  feature1Description: PropTypes.string,
  feature1Slogan: PropTypes.string,
  feature1Title: PropTypes.string,
}

export default Features17
