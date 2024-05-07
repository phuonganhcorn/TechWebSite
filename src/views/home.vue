<template>
  <div class="home-container"
    ><div class="home-navbar1"
      ><app-navbar4 rootClassName="navbar4-root-class-name"></app-navbar4></div
    ><div class="home-hero2"
      ><app-hero3 rootClassName="hero3-root-class-name"></app-hero3></div
    ><div class="home-logos3"><app-logos1></app-logos1></div
    ><div class="home-gallery4"
      ><app-gallery1 rootClassName="gallery1-root-class-name"></app-gallery1></div
    ><div class="home-features5"><app-features17></app-features17></div
    ><div class="home-features6"><app-features18></app-features18></div
    ><div class="home-features7"
      ><app-features171
        rootClassName="features171-root-class-name"
      ></app-features171></div
    ><div class="home-cta8"><app-cta1></app-cta1></div
    ><div class="home-faq9"
      ><app-faq1 rootClassName="faq1-root-class-name"></app-faq1></div
    ><div class="home-contact10"
      ><app-contact4 rootClassName="contact4-root-class-name"></app-contact4></div
    ><div class="home-footer11"
      ><app-footer15 rootClassName="footer15-root-class-name"></app-footer15></div
  ></div>
</template>

<script>
import AppNavbar4 from '../components/navbar4'
import AppHero3 from '../components/hero3'
import AppLogos1 from '../components/logos1'
import AppGallery1 from '../components/gallery1'
import AppFeatures17 from '../components/features17'
import AppFeatures18 from '../components/features18'
import AppFeatures171 from '../components/features171'
import AppCta1 from '../components/cta1'
import AppFaq1 from '../components/faq1'
import AppContact4 from '../components/contact4'
import AppFooter15 from '../components/footer15'

export default {
  name: 'Home',
  props: {},
  components: {
    AppNavbar4,
    AppHero3,
    AppLogos1,
    AppGallery1,
    AppFeatures17,
    AppFeatures18,
    AppFeatures171,
    AppCta1,
    AppFaq1,
    AppContact4,
    AppFooter15,
  },
  metaInfo: {
    title: 'Jolly Hearty Chicken',
    meta: [
      {
        property: 'og:title',
        content: 'Jolly Hearty Chicken',
      },
    ],
  },
}
</script>

<style scoped>
.home-container {
  width: 100%;
  display: flex;
  overflow: auto;
  min-height: 100vh;
  align-items: center;
  flex-direction: column;
}
.home-navbar1 {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
}
.home-hero2 {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
}
.home-logos3 {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
}
.home-gallery4 {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
}
.home-features5 {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
}
.home-features6 {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
}
.home-features7 {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
}
.home-cta8 {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
}
.home-faq9 {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
}
.home-contact10 {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
}
.home-footer11 {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
