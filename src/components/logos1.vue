<template>
  <div class="logos1-container thq-section-padding"
    ><div class="logos1-max-width thq-section-max-width"
      ><h2 class="logos1-text thq-heading-2">{{ heading1 }}</h2
      ><div class="thq-grid-6"
        ><img
          :alt="logo1Alt"
          :src="logo1Src"
          class="logos1-logo1 thq-img-ratio-16-9" /><img
          :alt="logo2Alt"
          :src="logo2Src"
          class="logos1-logo2 thq-img-ratio-16-9" /><img
          :alt="logo3Alt"
          :src="logo3Src"
          class="logos1-logo3 thq-img-ratio-16-9" /><img
          :alt="logo4Alt"
          :src="logo4Src"
          class="logos1-logo4 thq-img-ratio-16-9" /><img
          :alt="logo5Alt"
          :src="logo5Src"
          class="logos1-logo5 thq-img-ratio-16-9" /><img
          :alt="logo6Alt"
          :src="logo6Src"
          class="logos1-logo6 thq-img-ratio-16-9" /></div></div
  ></div>
</template>

<script>
export default {
  name: 'Logos1',
  props: {
    logo1Alt: {
      type: String,
      default: 'Tech Company Logo 1',
    },
    logo2Alt: {
      type: String,
      default: 'Tech Company Logo 2',
    },
    heading1: {
      type: String,
      default: 'Welcome to Professor Website for Tech Company',
    },
    logo5Alt: {
      type: String,
      default: 'Tech Company Logo 5',
    },
    logo6Src: {
      type: String,
      default:
        'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/84ec08e8-34e9-42c7-9445-d2806d156403/07f56a12-c428-4896-8819-194d1fef39f2?org_if_sml=1&q=80&force_format=original',
    },
    logo3Alt: {
      type: String,
      default: 'Tech Company Logo 3',
    },
    logo1Src: {
      type: String,
      default:
        'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/84ec08e8-34e9-42c7-9445-d2806d156403/838a2368-6357-4526-a3f3-57fee519d8ec?org_if_sml=1&q=80&force_format=original',
    },
    logo4Alt: {
      type: String,
      default: 'Tech Company Logo 4',
    },
    logo2Src: {
      type: String,
      default:
        'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/84ec08e8-34e9-42c7-9445-d2806d156403/2cf31efa-183b-4247-920e-60025ea69bfe?org_if_sml=1&q=80&force_format=original',
    },
    logo4Src: {
      type: String,
      default:
        'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/84ec08e8-34e9-42c7-9445-d2806d156403/c78f8e14-cf7b-4e8b-821c-3d6b89ed8db4?org_if_sml=1&q=80&force_format=original',
    },
    logo6Alt: {
      type: String,
      default: 'Tech Company Logo 6',
    },
    logo3Src: {
      type: String,
      default:
        'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/84ec08e8-34e9-42c7-9445-d2806d156403/49215785-2559-40a7-be66-9dd3bdf5eb7a?org_if_sml=1&q=80&force_format=original',
    },
    logo5Src: {
      type: String,
      default:
        'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/84ec08e8-34e9-42c7-9445-d2806d156403/97476fa7-08ff-463d-99d2-c4ceb6ae9222?org_if_sml=1&q=80&force_format=original',
    },
  },
}
</script>

<style scoped>
.logos1-container {
  gap: var(--dl-space-space-threeunits);
  width: 100%;
  display: flex;
  position: relative;
  align-items: center;
  flex-direction: column;
  background-image: radial-gradient(circle at left bottom, rgb(189, 195, 199) 0.00%,rgb(0, 0, 0) 19.00%);
}
.logos1-max-width {
  gap: var(--dl-space-space-twounits);
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
}
.logos1-text {
  color: #fffdfd;
  text-align: center;
  font-family: "Georgia";
}
.logos1-logo1 {
  object-fit: contain;
}
.logos1-logo2 {
  object-fit: contain;
}
.logos1-logo3 {
  object-fit: contain;
}
.logos1-logo4 {
  object-fit: contain;
}
.logos1-logo5 {
  object-fit: contain;
}
.logos1-logo6 {
  object-fit: contain;
}
@media(max-width: 767px) {
  .logos1-container {
    gap: var(--dl-space-space-twounits);
  }
  .logos1-max-width {
    gap: var(--dl-space-space-twounits);
  }
  .logos1-text {
    font-size: 30px;
    font-family: Noto Sans;
  }
}
</style>
