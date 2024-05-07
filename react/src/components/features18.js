import React from 'react'

import PropTypes from 'prop-types'

import './features18.css'

const Features18 = (props) => {
  return (
    <div className="features18-layout349 thq-section-padding">
      <div className="features18-max-width thq-section-max-width">
        <div className="features18-content">
          <div className="features18-section-title">
            <span className="features18-text thq-body-small">
              {props.feature1Slogan}
            </span>
            <div className="features18-content1">
              <h2 className="features18-text1 thq-heading-2">
                {props.feature1Title}
              </h2>
              <p className="features18-text2 thq-body-large">
                {props.feature1Description}
              </p>
            </div>
          </div>
        </div>
        <div className="features18-image-container">
          <img
            alt={props.feature1ImageAlt}
            src={props.feature1ImageSrc}
            className="thq-img-ratio-16-9"
          />
        </div>
      </div>
    </div>
  )
}

Features18.defaultProps = {
  feature1Title: 'Cutting-Edge Technology',
  feature1Description:
    'Our professors are at the forefront of technological advancements, conducting groundbreaking research that shapes the future.',
  feature1Slogan: 'Innovative Research',
  feature1ImageAlt: 'Image depicting feature 1',
  feature1ImageSrc:
    'https://images.unsplash.com/photo-1531973576160-7125cd663d86?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxNTA5NzM3Nnw&ixlib=rb-4.0.3&q=80&w=1080',
}

Features18.propTypes = {
  feature1Title: PropTypes.string,
  feature1Description: PropTypes.string,
  feature1Slogan: PropTypes.string,
  feature1ImageAlt: PropTypes.string,
  feature1ImageSrc: PropTypes.string,
}

export default Features18
