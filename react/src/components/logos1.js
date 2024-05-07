import React from 'react'

import PropTypes from 'prop-types'

import './logos1.css'

const Logos1 = (props) => {
  return (
    <div className="logos1-container thq-section-padding">
      <div className="logos1-max-width thq-section-max-width">
        <h2 className="logos1-text thq-heading-2">{props.heading1}</h2>
        <div className="thq-grid-6">
          <img
            alt={props.logo1Alt}
            src={props.logo1Src}
            className="logos1-logo1 thq-img-ratio-16-9"
          />
          <img
            alt={props.logo2Alt}
            src={props.logo2Src}
            className="logos1-logo2 thq-img-ratio-16-9"
          />
          <img
            alt={props.logo3Alt}
            src={props.logo3Src}
            className="logos1-logo3 thq-img-ratio-16-9"
          />
          <img
            alt={props.logo4Alt}
            src={props.logo4Src}
            className="logos1-logo4 thq-img-ratio-16-9"
          />
          <img
            alt={props.logo5Alt}
            src={props.logo5Src}
            className="logos1-logo5 thq-img-ratio-16-9"
          />
          <img
            alt={props.logo6Alt}
            src={props.logo6Src}
            className="logos1-logo6 thq-img-ratio-16-9"
          />
        </div>
      </div>
    </div>
  )
}

Logos1.defaultProps = {
  logo1Alt: 'Tech Company Logo 1',
  logo2Alt: 'Tech Company Logo 2',
  heading1: 'Welcome to Professor Website for Tech Company',
  logo5Alt: 'Tech Company Logo 5',
  logo6Src:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/84ec08e8-34e9-42c7-9445-d2806d156403/07f56a12-c428-4896-8819-194d1fef39f2?org_if_sml=1&q=80&force_format=original',
  logo3Alt: 'Tech Company Logo 3',
  logo1Src:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/84ec08e8-34e9-42c7-9445-d2806d156403/838a2368-6357-4526-a3f3-57fee519d8ec?org_if_sml=1&q=80&force_format=original',
  logo4Alt: 'Tech Company Logo 4',
  logo2Src:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/84ec08e8-34e9-42c7-9445-d2806d156403/2cf31efa-183b-4247-920e-60025ea69bfe?org_if_sml=1&q=80&force_format=original',
  logo4Src:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/84ec08e8-34e9-42c7-9445-d2806d156403/c78f8e14-cf7b-4e8b-821c-3d6b89ed8db4?org_if_sml=1&q=80&force_format=original',
  logo6Alt: 'Tech Company Logo 6',
  logo3Src:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/84ec08e8-34e9-42c7-9445-d2806d156403/49215785-2559-40a7-be66-9dd3bdf5eb7a?org_if_sml=1&q=80&force_format=original',
  logo5Src:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/84ec08e8-34e9-42c7-9445-d2806d156403/97476fa7-08ff-463d-99d2-c4ceb6ae9222?org_if_sml=1&q=80&force_format=original',
}

Logos1.propTypes = {
  logo1Alt: PropTypes.string,
  logo2Alt: PropTypes.string,
  heading1: PropTypes.string,
  logo5Alt: PropTypes.string,
  logo6Src: PropTypes.string,
  logo3Alt: PropTypes.string,
  logo1Src: PropTypes.string,
  logo4Alt: PropTypes.string,
  logo2Src: PropTypes.string,
  logo4Src: PropTypes.string,
  logo6Alt: PropTypes.string,
  logo3Src: PropTypes.string,
  logo5Src: PropTypes.string,
}

export default Logos1
