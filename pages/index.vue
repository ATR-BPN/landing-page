<template>
  <div>
    <BPNavbar />

    <div id="carousel">
      <BPCarousel />
    </div>

    <BPAboutPeople />

    <BPAbout />

    <BPPerformance />

    <BPActionLink />

    <BPContact />

    <BPFooter />
  </div>
</template>

<script>
import BPCarousel from '../components/kantah-bpn/BPCarousel.vue'
import BPNavbar from '../components/kantah-bpn/BPNavbar.vue'
import BPAbout from '../components/kantah-bpn/BPAbout.vue'
import BPFooter from '../components/kantah-bpn/BPFooter.vue'
import BPContact from '../components/kantah-bpn/BPContact.vue'
import BPAboutPeople from '../components/kantah-bpn/BPAboutPeople.vue'
import BPPerformance from '../components/kantah-bpn/BPPerformance.vue'
import BPActionLink from '../components/kantah-bpn/BPActionLink.vue'

export default {
  components: {
    BPCarousel,
    BPNavbar,
    BPAbout,
    BPFooter,
    BPContact,
    BPAboutPeople,
    BPPerformance,
    BPActionLink,
  },
  data: () => {
    return {}
  },
}
</script>

<style lang="scss" scoped></style>
