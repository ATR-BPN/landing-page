<template>
  <section id="features">
    <div class="container px-5">
      <div class="row gx-5 align-items-center">
        <div class="col-lg-8 order-lg-1 mb-5 mb-lg-0">
          <div class="container-fluid px-5">
            <div class="row gx-5">
              <div class="col-md-6 mb-5">
                <!-- Feature item-->
                <div class="d-flex align-items-center flex-column text-center">
                  <b-icon
                    icon="file-earmark-text"
                    class="icon-feature text-gradient d-block mb-3"
                  ></b-icon>
                  <h3 class="font-alt">Pelayanan Pemberian Hak Atas Tanah</h3>
                  <p class="text-muted mb-0">
                    Hak Milik Perorangan, Hak Milik Badan Hukum dan Hak Lainnya
                  </p>
                </div>
              </div>
              <div class="col-md-6 mb-5">
                <!-- Feature item-->
                <div class="d-flex align-items-center flex-column text-center">
                  <b-icon
                    icon="file-earmark-text"
                    class="icon-feature text-gradient d-block mb-3"
                  ></b-icon>
                  <h3 class="font-alt">Pelayanan Pembaruan Hak</h3>
                  <p class="text-muted mb-0">
                    Hak Guna Usaha Perorangan, Hak Guna Usaha Badan Hukum, Hak
                    Guna Bangunan Perorangan dan Hak Lainnya
                  </p>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-6 mb-5 mb-md-0">
                <!-- Feature item-->
                <div class="d-flex align-items-center flex-column text-center">
                  <b-icon
                    icon="file-earmark-text"
                    class="icon-feature text-gradient d-block mb-3"
                  ></b-icon>
                  <h3 class="font-alt">Pelayanan Peralihan Hak</h3>
                  <p class="text-muted mb-0">
                    Jual Beli, Hibah, Pewarisan, Tukar Menukar dan Jenis
                    Peralihan Lainnya
                  </p>
                </div>
              </div>
              <div class="col-md-6">
                <!-- Feature item-->
                <div class="d-flex align-items-center flex-column text-center">
                  <b-icon
                    icon="file-earmark-text"
                    class="icon-feature text-gradient d-block mb-3"
                  ></b-icon>
                  <h3 class="font-alt">Jenis Pelayanan Lainnya</h3>
                  <p class="text-muted mb-0">Dan Jenis Pelayanan Lainnya</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-4 order-lg-0">
          <!-- Features section device mockup-->
          <div class="features-device-mockup">
            <svg
              class="circle"
              viewBox="0 0 100 100"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient
                  id="circleGradient"
                  gradientTransform="rotate(45)"
                >
                  <stop class="gradient-start-color" offset="0%"></stop>
                  <stop class="gradient-end-color" offset="100%"></stop>
                </linearGradient>
              </defs>
              <circle cx="50" cy="50" r="50"></circle></svg
            ><svg
              class="shape-1 d-none d-sm-block"
              viewBox="0 0 240.83 240.83"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="-32.54"
                y="78.39"
                width="305.92"
                height="84.05"
                rx="42.03"
                transform="translate(120.42 -49.88) rotate(45)"
              ></rect>
              <rect
                x="-32.54"
                y="78.39"
                width="305.92"
                height="84.05"
                rx="42.03"
                transform="translate(-49.88 120.42) rotate(-45)"
              ></rect></svg
            ><svg
              class="shape-2 d-none d-sm-block"
              viewBox="0 0 100 100"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="50" cy="50" r="50"></circle>
            </svg>
            <div class="device-wrapper">
              <div
                class="device"
                data-device="iPhoneX"
                data-orientation="portrait"
                data-color="black"
              >
                <div class="screen bg-black">
                  <!-- PUT CONTENTS HERE:-->
                  <!-- * * This can be a video, image, or just about anything else.-->
                  <!-- * * Set the max width of your media to 100% and the height to-->
                  <!-- * * 100% like the demo example below.-->
                  <img
                    src="~assets/img/Splash-Screen.png"
                    style="max-width: 100%; height: 100%"
                    alt="splash-screen-pastibpn"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { BIcon } from 'bootstrap-vue'
export default {
  components: {
    BIcon,
  },
}
</script>

<style></style>
