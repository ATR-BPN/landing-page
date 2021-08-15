<template>
  <b-navbar
    toggleable="lg"
    type="light"
    variant="white"
    class="d-flex align-items-center shadow-sm fixed-top"
  >
    <div class="container">
      <b-navbar-brand href="#">
        <img src="~/assets/img/kantah-kota-bandung.png" alt="" />
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item href="#about-bpn" class="mx-2">Profile</b-nav-item>
          <b-nav-item href="#about-bpn-people" class="mx-2">
            Pelaksana
          </b-nav-item>
          <b-nav-item-dropdown text="Pelayanan" right>
            <b-dropdown-item href="/pasti" target="_blank">
              PASTI
            </b-dropdown-item>
            <b-dropdown-item href="http://curhatbpn-kotabandung.id/">
              CurhatBPN
            </b-dropdown-item>
            <b-dropdown-item href="#">Standar Pelayanan</b-dropdown-item>
            <b-dropdown-item href="#">Maklumat Pelayanan</b-dropdown-item>
          </b-nav-item-dropdown>
          <b-nav-item href="#contact" class="mx-2">Pengaduan</b-nav-item>
          <b-nav-item href="#" class="mx-2">Penilaian Kinerja</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </div>
  </b-navbar>
</template>

<script>
export default {}
</script>

<style></style>
