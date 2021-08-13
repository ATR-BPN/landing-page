<template>
  <b-navbar
    toggleable="lg"
    type="light"
    variant="white"
    class="d-flex align-items-center shadow-sm fixed-top"
  >
    <div class="container px-5">
      <b-navbar-brand class="navbar-brand fw-bold" href="#">
        <img src="~assets/img/pastibpn-id.svg" alt="Kitten" />
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item href="#integrity" class="mx-2">Tentang BPN</b-nav-item>
          <b-nav-item href="#features" class="mx-2">Pelayanan</b-nav-item>

          <b-button class="rounded-pill px-4 mb-2 mb-lg-0">
            <span>Login</span>
          </b-button>
        </b-navbar-nav>
      </b-collapse>
    </div>
  </b-navbar>
</template>

<script>
export default {}
</script>

<style></style>
