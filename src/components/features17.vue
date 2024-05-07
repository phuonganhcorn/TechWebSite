<template>
  <div class="features17-layout349 thq-section-padding"
    ><div class="features17-max-width thq-section-max-width"
      ><div class="features17-image-container"
        ><img
          :alt="feature1ImageAlt"
          :src="feature1ImageSrc"
          class="thq-img-ratio-16-9" /></div
      ><div class="features17-content"
        ><div class="features17-section-title"
          ><span class="features17-text thq-body-small">{{ feature1Slogan }}</span
          ><div class="features17-content1"
            ><h2 class="features17-text1 thq-heading-2">{{ feature1Title }}</h2
            ><p class="features17-text2 thq-body-large"
              >{{ feature1Description }}</p
            ></div
          ></div
        ></div
      ></div
    ></div
  >
</template>

<script>
export default {
  name: 'Features17',
  props: {
    feature1ImageSrc: {
      type: String,
      default:
        'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDg3fHx0ZWNofGVufDB8fHx8MTcxNTA5OTIzMnww&ixlib=rb-4.0.3&w=1400',
    },
    feature1ImageAlt: {
      type: String,
      default: 'Cutting-Edge Research Image',
    },
    feature1Description: {
      type: String,
      default:
        'Our professors are engaged in groundbreaking research that shapes the future of technology.',
    },
    feature1Slogan: {
      type: String,
      default: 'Pushing the boundaries of technology',
    },
    feature1Title: {
      type: String,
      default: 'Cutting-Edge Research',
    },
  },
}
</script>

<style scoped>
.features17-layout349 {
  display: flex;
  overflow: hidden;
  position: relative;
  align-items: center;
  flex-direction: column;
  background-image: radial-gradient(circle at right bottom, rgb(189, 195, 199) 0.00%,rgb(0, 0, 0) 28.00%);
}
.features17-max-width {
  gap: var(--dl-space-space-fiveunits);
  display: flex;
  align-items: center;
}
.features17-image-container {
  flex: 1;
  display: flex;
  position: relative;
  align-items: center;
}
.features17-content {
  gap: var(--dl-space-space-oneandhalfunits);
  flex: 1;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.features17-section-title {
  gap: var(--dl-space-space-oneandhalfunits);
  display: flex;
  align-self: stretch;
  align-items: flex-start;
  flex-direction: column;
}
.features17-text {
  color: #ffffff;
}
.features17-content1 {
  gap: var(--dl-space-space-oneandhalfunits);
  display: flex;
  align-self: stretch;
  align-items: flex-start;
  flex-direction: column;
}
.features17-text1 {
  color: #ffffff;
}
.features17-text2 {
  color: #ffffff;
}
@media(max-width: 991px) {
  .features17-max-width {
    gap: var(--dl-space-space-twounits);
    flex-direction: column;
  }
}
@media(max-width: 767px) {
  .features17-layout349 {
    border-radius: var(--dl-radius-radius-radius4);
    background-color: #080808;
  }
  .features17-text1 {
    color: #fdfdfd;
    font-size: 30px;
    font-style: normal;
    font-family: Noto Sans;
    font-weight: 400;
  }
}
</style>
