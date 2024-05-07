<template>
  <div class="faq1-faq7 thq-section-padding" v-bind:class="rootClassName"
    ><div class="faq1-max-width thq-section-max-width"
      ><div class="thq-flex-column"
        ><h2 class="faq1-text thq-heading-2">{{ heading1 }}</h2
        ><p class="faq1-text1 thq-body-large">{{ content1 }}</p></div
      ><div class="thq-flex-column faq1-list"
        ><div class="faq1-list-item1"
          ><p class="faq1-faq1-question thq-body-large">{{ faq1Question }}</p
          ><span class="faq1-faq1-answer thq-body-small"
            >{{ faq1Answer }}</span
          ></div
        ><div class="faq1-list-item2"
          ><p class="faq1-faq2-question thq-body-large">{{ faq2Question }}</p
          ><span class="faq1-faq2-answer thq-body-small"
            >{{ faq2Answer }}</span
          ></div
        ><div class="faq1-list-item3"
          ><p class="faq1-faq3-question thq-body-large">{{ faq3Question }}</p
          ><span class="faq1-faq3-answer thq-body-small"
            >{{ faq3Answer }}</span
          ></div
        ><div class="faq1-list-item4"
          ><p class="faq1-faq4-question thq-body-large">{{ faq4Question }}</p
          ><span class="faq1-faq4-answer thq-body-small"
            >{{ faq4Answer }}</span
          ></div
        ><div class="faq1-list-item5"
          ><p class="faq1-faq5-question thq-body-large">{{ faq5Question }}</p
          ><span class="thq-body-small">{{ faq5Answer }}</span></div
        ></div
      ><div class="thq-flex-column"
        ><div class="faq1-content1"
          ><h2 class="faq1-text2 thq-heading-2">{{ heading2 }}</h2
          ><p class="faq1-text3 thq-body-large">{{ content2 }}</p></div
        ><div class="faq1-container"
          ><button class="thq-button-outline faq1-button"
            ><span class="faq1-action1 thq-body-small"
              >{{ action1 }}</span
            ></button
          ></div
        ></div
      ></div
    ></div
  >
</template>

<script>
export default {
  name: 'FAQ1',
  props: {
    faq2Answer: {
      type: String,
      default:
        'You can schedule an appointment by logging into your account and selecting a time slot from the available options.',
    },
    faq5Answer: {
      type: String,
      default:
        'You can cancel or reschedule your appointment up to 24 hours in advance by accessing your account and making the necessary changes.',
    },
    content1: {
      type: String,
      default:
        'If you have any other questions or concerns, please feel free to reach out to us.',
    },
    content2: {
      type: String,
      default: 'Our team is here to assist you with any queries you may have.',
    },
    faq5Question: {
      type: String,
      default:
        'What should I do if I need to cancel or reschedule my appointment?',
    },
    faq3Question: {
      type: String,
      default: 'Is there a limit to the number of consultations I can have?',
    },
    faq4Question: {
      type: String,
      default: 'Can I bring additional materials to the consultation?',
    },
    heading1: {
      type: String,
      default: 'Frequently Asked Questions',
    },
    action1: {
      type: String,
      default: 'Contact',
    },
    faq2Question: {
      type: String,
      default: 'How can I schedule an appointment with the professor?',
    },
    faq4Answer: {
      type: String,
      default:
        'Yes, you are encouraged to bring any relevant materials or documents that will aid in the discussion.',
    },
    faq3Answer: {
      type: String,
      default:
        'Each student is entitled to two consultations per week, with each session lasting up to 30 minutes.',
    },
    heading2: {
      type: String,
      default: 'Still Have Questions?',
    },
    faq1Question: {
      type: String,
      default: 'What are the office hours for consultations?',
    },
    faq1Answer: {
      type: String,
      default:
        'Consultation hours are from Monday to Friday, 9:00 AM to 5:00 PM.',
    },
    rootClassName: String,
  },
}
</script>

<style scoped>
.faq1-faq7 {
  display: flex;
  overflow: hidden;
  position: relative;
  align-items: center;
  flex-direction: column;
  background-image: linear-gradient(225deg, rgb(189, 195, 199) 0.00%,rgb(0, 0, 0) 39.00%);
}
.faq1-max-width {
  gap: var(--dl-space-space-fiveunits);
  display: flex;
  align-items: center;
  flex-direction: column;
}
.faq1-text {
  color: #ffffff;
}
.faq1-text1 {
  color: #ffffff;
  text-align: center;
}
.faq1-list-item1 {
  display: flex;
  align-self: stretch;
  align-items: flex-start;
  flex-direction: column;
}
.faq1-faq1-question {
  color: #ffffff;
  font-style: normal;
  text-align: center;
  font-weight: 600;
}
.faq1-faq1-answer {
  color: #ffffff;
}
.faq1-list-item2 {
  display: flex;
  align-self: stretch;
  align-items: flex-start;
  flex-direction: column;
}
.faq1-faq2-question {
  color: #ffffff;
  z-index: 100;
  font-style: normal;
  text-align: center;
  font-weight: 600;
}
.faq1-faq2-answer {
  color: #ffffff;
  z-index: 100;
}
.faq1-list-item3 {
  display: flex;
  align-self: stretch;
  align-items: flex-start;
  flex-direction: column;
}
.faq1-faq3-question {
  color: #ffffff;
  font-style: normal;
  text-align: center;
  font-weight: 600;
}
.faq1-faq3-answer {
  color: #ffffff;
}
.faq1-list-item4 {
  display: flex;
  align-self: stretch;
  align-items: flex-start;
  flex-direction: column;
}
.faq1-faq4-question {
  font-style: normal;
  text-align: center;
  font-weight: 600;
}
.faq1-faq4-answer {
  color: #ffffff;
}
.faq1-list-item5 {
  display: flex;
  align-self: stretch;
  align-items: flex-start;
  flex-direction: column;
}
.faq1-faq5-question {
  color: #ffffff;
  font-style: normal;
  text-align: center;
  font-weight: 600;
}
.faq1-content1 {
  gap: 16px;
  display: flex;
  align-self: stretch;
  align-items: center;
  flex-direction: column;
}
.faq1-text2 {
  color: #ffffff;
}
.faq1-text3 {
  color: #ffffff;
  text-align: center;
}
.faq1-container {
  display: flex;
  position: relative;
}
.faq1-action1 {
  color: #ffffff;
}
.faq1-root-class-name {
  background-image: linear-gradient(135deg, rgb(189, 195, 199) 0.00%,rgb(0, 0, 0) 15.00%,rgb(0, 0, 0) 0.00%,rgb(0, 0, 0) 47.00%);
}
@media(max-width: 991px) {
  .faq1-max-width {
    gap: var(--dl-space-space-oneandhalfunits);
  }
}
@media(max-width: 767px) {
  .faq1-text1 {
    text-align: left;
  }
  .faq1-list {
    gap: var(--dl-space-space-twounits);
  }
  .faq1-button {
    width: 100%;
  }
}
</style>
