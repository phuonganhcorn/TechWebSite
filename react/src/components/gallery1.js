import React from 'react'

import PropTypes from 'prop-types'

import './gallery1.css'

const Gallery1 = (props) => {
  return (
    <div
      className={`gallery1-gallery3 thq-section-padding ${props.rootClassName} `}
    >
      <div className="gallery1-max-width thq-section-max-width">
        <div className="gallery1-section-title">
          <h2 className="gallery1-text thq-heading-2">{props.heading1}</h2>
          <span className="gallery1-text1 thq-body-large">
            {props.content1}
          </span>
        </div>
        <div className="gallery1-content">
          <div className="gallery1-container">
            <img
              alt={props.image1Alt}
              src={props.image1Src}
              className="thq-img-ratio-4-3"
            />
          </div>
          <div className="gallery1-container1">
            <img
              alt={props.image2Alt}
              src={props.image2Src}
              className="thq-img-ratio-4-3"
            />
          </div>
          <div className="gallery1-container2">
            <img
              alt={props.image3Alt}
              src={props.image3Src}
              className="thq-img-ratio-4-3"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

Gallery1.defaultProps = {
  content1:
    'Explore some of the latest research projects conducted by our team.',
  image3Alt: 'Image of Research Project 3',
  heading1: 'Research Projects',
  rootClassName: '',
  image1Src:
    'https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDZ8fHRlY2h8ZW58MHx8fHwxNzE1MDk4MzM1fDA&ixlib=rb-4.0.3&w=1400',
  image2Alt: 'Image of Research Project 2',
  image1Alt: 'Image of Research Project 1',
  image3Src:
    'https://images.unsplash.com/photo-1588590560438-5e27fe3f6b71?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDcwfHx0ZWNofGVufDB8fHx8MTcxNTA5OTIyNXww&ixlib=rb-4.0.3&w=1400',
  image2Src:
    'https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDl8fHRlY2h8ZW58MHx8fHwxNzE1MDk4MzM1fDA&ixlib=rb-4.0.3&w=1400',
}

Gallery1.propTypes = {
  content1: PropTypes.string,
  image3Alt: PropTypes.string,
  heading1: PropTypes.string,
  rootClassName: PropTypes.string,
  image1Src: PropTypes.string,
  image2Alt: PropTypes.string,
  image1Alt: PropTypes.string,
  image3Src: PropTypes.string,
  image2Src: PropTypes.string,
}

export default Gallery1
