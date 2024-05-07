<template>
  <div class="hero3-header9" v-bind:class="rootClassName"
    ><div class="hero3-container"></div
    ><div class="hero3-content thq-section-padding"
      ><div class="hero3-max-width thq-section-max-width thq-flex-row"
        ><div class="hero3-container1"
          ><div class="hero3-column"></div
          ><h1 class="hero3-text thq-heading-1">{{ heading1 }}</h1></div
        ><div class="hero3-column1"
          ><p class="hero3-text1 thq-body-large">{{ content1 }}</p
          ><div class="hero3-actions"
            ><button class="hero3-button thq-button-filled"
              ><span class="thq-body-small">{{ action1 }}</span></button
            ><button class="thq-button-outline hero3-button1"
              ><span class="hero3-text3 thq-body-small"
                >{{ action2 }}</span
              ></button
            ></div
          ></div
        ></div
      ></div
    ></div
  >
</template>

<script>
export default {
  name: 'Hero3',
  props: {
    imageSrc: {
      type: String,
      default:
        'https://images.unsplash.com/photo-1582647921189-67575e3823fb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8c2VhcmNofDgwfHxzY2hvb2x8ZW58MHx8fHwxNzE1MDk3NzYzfDA&ixlib=rb-4.0.3&q=80&w=1500',
    },
    imageSrc1: {
      type: String,
      default:
        'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8c2VhcmNofDJ8fHRlY2h8ZW58MHx8fHwxNzE1MDk4MzM1fDA&ixlib=rb-4.0.3&q=80&w=1500',
    },
    heading1: {
      type: String,
      default: 'Professor John Smith',
    },
    action2: {
      type: String,
      default: 'Learn More',
    },
    imageAlt1: {
      type: String,
      default: 'image',
    },
    imageSrc2: {
      type: String,
      default:
        'https://images.unsplash.com/photo-1531297484001-80022131f5a1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8c2VhcmNofDF8fHRlY2h8ZW58MHx8fHwxNzE1MDk4MzM1fDA&ixlib=rb-4.0.3&q=80&w=1200',
    },
    image1Alt: {
      type: String,
      default: 'Professor Website Logo',
    },
    content1: {
      type: String,
      default: "Welcome to Professor Smith's Website",
    },
    rootClassName: String,
    action1: {
      type: String,
      default: 'Contact Professor',
    },
    imageAlt: {
      type: String,
      default: 'image',
    },
    imageAlt2: {
      type: String,
      default: 'image',
    },
    image1Src: {
      type: String,
      default:
        'https://images.unsplash.com/photo-1528980917907-8df7f48f6f2a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxNTA5NzM3Nnw&ixlib=rb-4.0.3&q=80&w=1080',
    },
  },
}
</script>

<style scoped>
.hero3-header9 {
  width: 100%;
  height: 100%;
  display: flex;
  position: relative;
  align-items: center;
  flex-direction: column;
  background-size: cover;
  background-image: url('https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDF8fHRlY2h8ZW58MHx8fHwxNzE1MDk4MzM1fDA&ixlib=rb-4.0.3&w=1500');
}
.hero3-container {
  flex: 0 0 auto;
  width: auto;
  border: 2px dashed rgba(120, 120, 120, 0.4);
  height: 674px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
}
.hero3-content {
  height: 333px;
  display: flex;
  justify-content: center;
  background-color: #060606;
}
.hero3-max-width {
  align-self: center;
  align-items: center;
}
.hero3-container1 {
  flex: 0 0 auto;
  width: auto;
  height: auto;
  display: flex;
  flex-direction: column;
}
.hero3-column {
  flex: 1;
  width: auto;
  border: 2px dashed rgba(120, 120, 120, 0.4);
  display: flex;
  align-items: flex-start;
  flex-shrink: 0;
  flex-direction: column;
}
.hero3-text {
  color: #ffffff;
  font-style: normal;
  font-family: "Georgia";
  font-weight: 600;
}
.hero3-column1 {
  gap: var(--dl-space-space-twounits);
  flex: 1;
  width: auto;
  display: flex;
  align-items: flex-start;
  flex-shrink: 0;
  flex-direction: column;
}
.hero3-text1 {
  color: #e9e1e1;
  font-family: "Exo 2";
}
.hero3-actions {
  gap: var(--dl-space-space-unit);
  display: flex;
  align-items: flex-start;
}
.hero3-button {
  background-color: #4c4846;
}
.hero3-text3 {
  color: #f3f1ef;
}
.hero3-root-class-name {
  background-color: #716b6b;
}
@media(max-width: 991px) {
  .hero3-column {
    width: 100%;
  }
  .hero3-column1 {
    width: auto;
  }
}
@media(max-width: 767px) {
  .hero3-text {
    text-align: center;
  }
  .hero3-text1 {
    text-align: center;
  }
  .hero3-actions {
    width: 100%;
    justify-content: center;
  }
}
@media(max-width: 479px) {
  .hero3-actions {
    flex-direction: column;
  }
  .hero3-button {
    width: 100%;
  }
  .hero3-button1 {
    width: 100%;
    padding-left: var(--dl-space-space-oneandhalfunits);
    padding-right: var(--dl-space-space-oneandhalfunits);
  }
}
</style>
