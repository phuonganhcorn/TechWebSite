<template>
  <div
    class="features171-layout349 thq-section-padding"
    v-bind:class="rootClassName"
    ><div class="features171-max-width thq-section-max-width"
      ><div class="features171-image-container"
        ><img
          :alt="feature1ImageAlt"
          :src="feature1ImageSrc"
          class="thq-img-ratio-16-9" /></div
      ><div class="features171-content"
        ><div class="features171-section-title"
          ><span class="features171-text thq-body-small"
            >{{ feature1Slogan }}</span
          ><div class="features171-content1"
            ><h2 class="features171-text1 thq-heading-2">{{ feature1Title }}</h2
            ><p class="features171-text2 thq-body-large"
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
  name: 'Features171',
  props: {
    feature1Slogan: {
      type: String,
      default: 'Stay ahead with the latest innovations',
    },
    feature1ImageAlt: {
      type: String,
      default: 'Cutting-Edge Technology Image',
    },
    feature1Description: {
      type: String,
      default:
        'Explore the forefront of technology with our cutting-edge solutions designed to propel your research and projects forward.',
    },
    feature1ImageSrc: {
      type: String,
      default:
        'https://images.unsplash.com/photo-1460518451285-97b6aa326961?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxNTA5NzM3N3w&ixlib=rb-4.0.3&q=80&w=1080',
    },
    feature1Title: {
      type: String,
      default: 'Cutting-Edge Technology',
    },
    rootClassName: String,
  },
}
</script>

<style scoped>
.features171-layout349 {
  display: flex;
  overflow: hidden;
  position: relative;
  align-items: center;
  flex-direction: column;
  background-image: linear-gradient(45deg, rgb(189, 195, 199) 0.00%,rgb(0, 0, 0) 12.00%);
}
.features171-max-width {
  gap: var(--dl-space-space-fiveunits);
  display: flex;
  align-items: center;
}
.features171-image-container {
  flex: 1;
  display: flex;
  position: relative;
  align-items: center;
}
.features171-content {
  gap: var(--dl-space-space-oneandhalfunits);
  flex: 1;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.features171-section-title {
  gap: var(--dl-space-space-oneandhalfunits);
  display: flex;
  align-self: stretch;
  align-items: flex-start;
  flex-direction: column;
}
.features171-text {
  color: #ffffff;
}
.features171-content1 {
  gap: var(--dl-space-space-oneandhalfunits);
  display: flex;
  align-self: stretch;
  align-items: flex-start;
  flex-direction: column;
}
.features171-text1 {
  color: #ffffff;
}
.features171-text2 {
  color: #ffffff;
}
.features171-root-class-name {
  background-image: linear-gradient(45deg, rgb(189, 195, 199) 0.00%,rgb(0, 0, 0) 24.00%);
}
@media(max-width: 991px) {
  .features171-max-width {
    gap: var(--dl-space-space-twounits);
    flex-direction: column;
  }
}
</style>
