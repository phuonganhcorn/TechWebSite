import React from 'react'

import PropTypes from 'prop-types'

import './features171.css'

const Features171 = (props) => {
  return (
    <div
      className={`features171-layout349 thq-section-padding ${props.rootClassName} `}
    >
      <div className="features171-max-width thq-section-max-width">
        <div className="features171-image-container">
          <img
            alt={props.feature1ImageAlt}
            src={props.feature1ImageSrc}
            className="thq-img-ratio-16-9"
          />
        </div>
        <div className="features171-content">
          <div className="features171-section-title">
            <span className="features171-text thq-body-small">
              {props.feature1Slogan}
            </span>
            <div className="features171-content1">
              <h2 className="features171-text1 thq-heading-2">
                {props.feature1Title}
              </h2>
              <p className="features171-text2 thq-body-large">
                {props.feature1Description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Features171.defaultProps = {
  feature1Slogan: 'Stay ahead with the latest innovations',
  feature1ImageAlt: 'Cutting-Edge Technology Image',
  feature1Description:
    'Explore the forefront of technology with our cutting-edge solutions designed to propel your research and projects forward.',
  feature1ImageSrc:
    'https://images.unsplash.com/photo-1460518451285-97b6aa326961?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxNTA5NzM3N3w&ixlib=rb-4.0.3&q=80&w=1080',
  feature1Title: 'Cutting-Edge Technology',
  rootClassName: '',
}

Features171.propTypes = {
  feature1Slogan: PropTypes.string,
  feature1ImageAlt: PropTypes.string,
  feature1Description: PropTypes.string,
  feature1ImageSrc: PropTypes.string,
  feature1Title: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default Features171
