<template>
  <div class="gallery1-gallery3 thq-section-padding" v-bind:class="rootClassName"
    ><div class="gallery1-max-width thq-section-max-width"
      ><div class="gallery1-section-title"
        ><h2 class="gallery1-text thq-heading-2">{{ heading1 }}</h2
        ><span class="gallery1-text1 thq-body-large">{{ content1 }}</span></div
      ><div class="gallery1-content"
        ><div class="gallery1-container"
          ><img
            :alt="image1Alt"
            :src="image1Src"
            class="thq-img-ratio-4-3" /></div
        ><div class="gallery1-container1"
          ><img
            :alt="image2Alt"
            :src="image2Src"
            class="thq-img-ratio-4-3" /></div
        ><div class="gallery1-container2"
          ><img
            :alt="image3Alt"
            :src="image3Src"
            class="thq-img-ratio-4-3" /></div></div></div
  ></div>
</template>

<script>
export default {
  name: 'Gallery1',
  props: {
    content1: {
      type: String,
      default:
        'Explore some of the latest research projects conducted by our team.',
    },
    image3Alt: {
      type: String,
      default: 'Image of Research Project 3',
    },
    heading1: {
      type: String,
      default: 'Research Projects',
    },
    rootClassName: String,
    image1Src: {
      type: String,
      default:
        'https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDZ8fHRlY2h8ZW58MHx8fHwxNzE1MDk4MzM1fDA&ixlib=rb-4.0.3&w=1400',
    },
    image2Alt: {
      type: String,
      default: 'Image of Research Project 2',
    },
    image1Alt: {
      type: String,
      default: 'Image of Research Project 1',
    },
    image3Src: {
      type: String,
      default:
        'https://images.unsplash.com/photo-1588590560438-5e27fe3f6b71?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDcwfHx0ZWNofGVufDB8fHx8MTcxNTA5OTIyNXww&ixlib=rb-4.0.3&w=1400',
    },
    image2Src: {
      type: String,
      default:
        'https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDl8fHRlY2h8ZW58MHx8fHwxNzE1MDk4MzM1fDA&ixlib=rb-4.0.3&w=1400',
    },
  },
}
</script>

<style scoped>
.gallery1-gallery3 {
  gap: var(--dl-space-space-fiveunits);
  width: 100%;
  height: auto;
  display: flex;
  overflow: hidden;
  position: relative;
  align-items: center;
  flex-shrink: 0;
  flex-direction: column;
  background-image: radial-gradient(circle at left top, rgb(189, 195, 199) 0.00%,rgb(0, 0, 0) 18.00%);
}
.gallery1-max-width {
  gap: var(--dl-space-space-twounits);
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
}
.gallery1-section-title {
  gap: var(--dl-space-space-oneandhalfunits);
  width: auto;
  display: flex;
  max-width: 800px;
  align-items: center;
  flex-shrink: 0;
  flex-direction: column;
}
.gallery1-text {
  color: #ffffff;
  text-align: center;
}
.gallery1-text1 {
  color: #ffffff;
  text-align: center;
}
.gallery1-content {
  gap: var(--dl-space-space-twounits);
  width: 100%;
  display: flex;
  align-self: stretch;
  align-items: center;
  flex-shrink: 0;
  justify-content: center;
}
.gallery1-container {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.gallery1-container1 {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.gallery1-container2 {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

@media(max-width: 991px) {
  .gallery1-content {
    align-items: center;
    flex-direction: column;
  }
}
@media(max-width: 767px) {
  .gallery1-gallery3 {
    background-color: #101010;
  }
  .gallery1-text {
    color: #e8e1e1;
    font-style: normal;
    font-family: Noto Sans;
    font-weight: 700;
    text-transform: uppercase;
  }
  .gallery1-text1 {
    color: #f9f5f5;
  }
  .gallery1-root-class-name {
    background-color: #000000;
  }
}
@media(max-width: 479px) {
  .gallery1-root-class-name {
    background-color: #060606;
  }
}
</style>
