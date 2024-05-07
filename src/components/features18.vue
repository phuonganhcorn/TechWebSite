<template>
  <div class="features18-layout349 thq-section-padding"
    ><div class="features18-max-width thq-section-max-width"
      ><div class="features18-content"
        ><div class="features18-section-title"
          ><span class="features18-text thq-body-small">{{ feature1Slogan }}</span
          ><div class="features18-content1"
            ><h2 class="features18-text1 thq-heading-2">{{ feature1Title }}</h2
            ><p class="features18-text2 thq-body-large"
              >{{ feature1Description }}</p
            ></div
          ></div
        ></div
      ><div class="features18-image-container"
        ><img
          :alt="feature1ImageAlt"
          :src="feature1ImageSrc"
          class="thq-img-ratio-16-9" /></div></div
  ></div>
</template>

<script>
export default {
  name: 'Features18',
  props: {
    feature1Title: {
      type: String,
      default: 'Cutting-Edge Technology',
    },
    feature1Description: {
      type: String,
      default:
        'Our professors are at the forefront of technological advancements, conducting groundbreaking research that shapes the future.',
    },
    feature1Slogan: {
      type: String,
      default: 'Innovative Research',
    },
    feature1ImageAlt: {
      type: String,
      default: 'Image depicting feature 1',
    },
    feature1ImageSrc: {
      type: String,
      default:
        'https://images.unsplash.com/photo-1531973576160-7125cd663d86?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxNTA5NzM3Nnw&ixlib=rb-4.0.3&q=80&w=1080',
    },
  },
}
</script>

<style scoped>
.features18-layout349 {
  display: flex;
  overflow: hidden;
  position: relative;
  align-items: center;
  flex-direction: column;
  background-image: radial-gradient(circle at right top, rgb(189, 195, 199) 0.00%,rgb(0, 0, 0) 28.00%);
}
.features18-max-width {
  gap: var(--dl-space-space-fiveunits);
  display: flex;
  align-items: center;
}
.features18-content {
  gap: var(--dl-space-space-oneandhalfunits);
  flex: 1;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.features18-section-title {
  gap: var(--dl-space-space-oneandhalfunits);
  display: flex;
  align-self: stretch;
  align-items: flex-start;
  flex-direction: column;
}
.features18-text {
  color: #ffffff;
}
.features18-content1 {
  gap: var(--dl-space-space-oneandhalfunits);
  display: flex;
  align-self: stretch;
  align-items: flex-start;
  flex-direction: column;
}
.features18-text1 {
  color: #ffffff;
}
.features18-text2 {
  color: #ffffff;
}
.features18-image-container {
  flex: 1;
  display: flex;
  position: relative;
  align-items: center;
}
@media(max-width: 991px) {
  .features18-max-width {
    gap: var(--dl-space-space-twounits);
    flex-direction: column-reverse;
  }
}
@media(max-width: 767px) {
  .features18-layout349 {
    background-color: #000000;
  }
  .features18-text {
    color: #ffffff;
  }
}
</style>
