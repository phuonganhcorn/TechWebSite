import React from 'react'

import PropTypes from 'prop-types'

import './faq1.css'

const FAQ1 = (props) => {
  return (
    <div className={`faq1-faq7 thq-section-padding ${props.rootClassName} `}>
      <div className="faq1-max-width thq-section-max-width">
        <div className="thq-flex-column">
          <h2 className="faq1-text thq-heading-2">{props.heading1}</h2>
          <p className="faq1-text1 thq-body-large">{props.content1}</p>
        </div>
        <div className="thq-flex-column faq1-list">
          <div className="faq1-list-item1">
            <p className="faq1-faq1-question thq-body-large">
              {props.faq1Question}
            </p>
            <span className="faq1-faq1-answer thq-body-small">
              {props.faq1Answer}
            </span>
          </div>
          <div className="faq1-list-item2">
            <p className="faq1-faq2-question thq-body-large">
              {props.faq2Question}
            </p>
            <span className="faq1-faq2-answer thq-body-small">
              {props.faq2Answer}
            </span>
          </div>
          <div className="faq1-list-item3">
            <p className="faq1-faq3-question thq-body-large">
              {props.faq3Question}
            </p>
            <span className="faq1-faq3-answer thq-body-small">
              {props.faq3Answer}
            </span>
          </div>
          <div className="faq1-list-item4">
            <p className="faq1-faq4-question thq-body-large">
              {props.faq4Question}
            </p>
            <span className="faq1-faq4-answer thq-body-small">
              {props.faq4Answer}
            </span>
          </div>
          <div className="faq1-list-item5">
            <p className="faq1-faq5-question thq-body-large">
              {props.faq5Question}
            </p>
            <span className="thq-body-small">{props.faq5Answer}</span>
          </div>
        </div>
        <div className="thq-flex-column">
          <div className="faq1-content1">
            <h2 className="faq1-text2 thq-heading-2">{props.heading2}</h2>
            <p className="faq1-text3 thq-body-large">{props.content2}</p>
          </div>
          <div className="faq1-container">
            <button className="thq-button-outline faq1-button">
              <span className="faq1-action1 thq-body-small">
                {props.action1}
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

FAQ1.defaultProps = {
  faq2Answer:
    'You can schedule an appointment by logging into your account and selecting a time slot from the available options.',
  faq5Answer:
    'You can cancel or reschedule your appointment up to 24 hours in advance by accessing your account and making the necessary changes.',
  content1:
    'If you have any other questions or concerns, please feel free to reach out to us.',
  content2: 'Our team is here to assist you with any queries you may have.',
  faq5Question:
    'What should I do if I need to cancel or reschedule my appointment?',
  faq3Question: 'Is there a limit to the number of consultations I can have?',
  faq4Question: 'Can I bring additional materials to the consultation?',
  heading1: 'Frequently Asked Questions',
  action1: 'Contact',
  faq2Question: 'How can I schedule an appointment with the professor?',
  faq4Answer:
    'Yes, you are encouraged to bring any relevant materials or documents that will aid in the discussion.',
  faq3Answer:
    'Each student is entitled to two consultations per week, with each session lasting up to 30 minutes.',
  heading2: 'Still Have Questions?',
  faq1Question: 'What are the office hours for consultations?',
  faq1Answer:
    'Consultation hours are from Monday to Friday, 9:00 AM to 5:00 PM.',
  rootClassName: '',
}

FAQ1.propTypes = {
  faq2Answer: PropTypes.string,
  faq5Answer: PropTypes.string,
  content1: PropTypes.string,
  content2: PropTypes.string,
  faq5Question: PropTypes.string,
  faq3Question: PropTypes.string,
  faq4Question: PropTypes.string,
  heading1: PropTypes.string,
  action1: PropTypes.string,
  faq2Question: PropTypes.string,
  faq4Answer: PropTypes.string,
  faq3Answer: PropTypes.string,
  heading2: PropTypes.string,
  faq1Question: PropTypes.string,
  faq1Answer: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default FAQ1
