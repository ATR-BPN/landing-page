<template>
  <!-- <LandingPage /> -->
  <div>
    <!-- Navigation-->
    <PBNavbar />
    <!-- Mashead header-->
    <PBHeader />
    <!-- Quote/testimonial aside-->
    <PBIntegrity />
    <!-- App features section-->
    <PBFeatures />
    <!-- Call to action section-->
    <PBCurhatBpn />
    <!-- App badge section-->
    <BPContact />
    <!-- Footer-->
    <footer class="bg-black text-center py-5">
      <div class="container px-5">
        <div class="text-white-50 small">
          <div class="mb-2">&copy; PASTIBPN.ID 2020. All Rights Reserved.</div>
          <a href="/">ATR/BPN Kota Bandung</a>
          <span class="mx-1">&middot;</span>
          <a href="#!">Terms</a>
          <span class="mx-1">&middot;</span>
          <a href="#!">FAQ</a>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import PBNavbar from '../../components/pasti-bpn/PBNavbar.vue'
import PBHeader from '../../components/pasti-bpn/PBHeader.vue'
import PBIntegrity from '../../components/pasti-bpn/PBIntegrity.vue'
import PBFeatures from '../../components/pasti-bpn/PBFeatures.vue'
import PBCurhatBpn from '../../components/pasti-bpn/PBCurhatBpn.vue'
import BPContact from '../../components/kantah-bpn/BPContact.vue'

export default {
  components: {
    PBNavbar,
    PBHeader,
    PBIntegrity,
    PBFeatures,
    PBCurhatBpn,
    BPContact,
  },
}
</script>
