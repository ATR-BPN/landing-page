<template>
  <section id="contact">
    <div class="container">
      <div
        class="row wow fadeInUp"
        style="visibility: visible; animation-name: fadeInUp"
      >
        <div class="col-lg-4 col-md-4">
          <div class="contact-about">
            <a href="#intro">
              <img
                src="~/assets/img/kantah-kota-bandung.png"
                alt=""
                title=""
                width="200px"
              />
            </a>
            <br /><br />
            <p>
              Kantor Pertanahan Kota Bandung <br /><label style="color: orange">
                #atrbpnkinilebihbaik
              </label>
            </p>
            <div class="social-links">
              <a
                href="https://twitter.com/atrbpnkotabdg"
                target="_blank"
                class="icon-social-media twitter"
              >
                <b-icon icon="twitter"></b-icon>
              </a>
              <a
                href="https://www.instagram.com/atrbpnkotabdg/"
                target="_blank"
                class="icon-social-media instagram"
              >
                <b-icon icon="instagram"></b-icon>
              </a>
              <a
                href="https://www.facebook.com/atrbpnkotabandung"
                target="_blank"
                class="icon-social-media facebook"
              >
                <b-icon icon="facebook"></b-icon>
              </a>
            </div>
          </div>
        </div>

        <div class="col-lg-4 col-md-4">
          <div class="info">
            <div class="d-flex align-items-center">
              <p>
                Gedung ATR/BPN Kantah Kota Bandung<br />
                Jalan Soekarno-Hatta Nomor 586<br />
                Bandung 40286
              </p>
            </div>
          </div>
        </div>

        <div class="col-lg-4 col-md-8">
          <div class="info">
            <div class="d-flex align-items-center text-black-50 mb-4">
              <b-icon icon="envelope" font-scale="1.5"></b-icon>
              <a
                href="mailto:atrbpn.kotabandung@gmail.com"
                class="text-black-50 info-link"
              >
                atrbpn.kotabandung@gmail.com
              </a>
            </div>

            <div class="d-flex align-items-center text-black-50 mb-4">
              <b-icon icon="telephone" font-scale="1.5"></b-icon>
              <a href="tel:+62227562055" class="text-black-50 info-link">
                +622-27562055
              </a>
            </div>

            <div class="d-flex align-items-center text-black-50 mb-4">
              <b-icon icon="printer" font-scale="1.5"></b-icon>
              <a href="tel:+62227566165" class="text-black-50 info-link">
                +622-27566165
              </a>
            </div>

            <div class="d-flex align-items-center text-black-50 mb-4">
              <b-icon icon="chat" font-scale="1.5"></b-icon>
              <a href="tel:+6282218761876" class="text-black-50 info-link">
                +62822-1876-1876
              </a>
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

<style lang="scss" scoped>
.social-links {
  padding-bottom: 20px;

  & .icon-social-media {
    font-size: 18px;
    display: inline-block;
    background: #fff;
    line-height: 1;
    padding: 8px 0;
    margin-right: 4px;
    border-radius: 50%;
    text-align: center;
    width: 36px;
    height: 36px;
    transition: 0.3s;

    &.twitter {
      color: #fff;
      background: #1da1fa;
    }

    &.facebook {
      color: #fff;
      background: #3b5998;
    }

    &.instagram {
      color: #fff;
      background: -webkit-radial-gradient(
          32% 106%,
          circle cover,
          rgb(255, 225, 125) 0%,
          rgb(255, 205, 105) 10%,
          rgb(250, 145, 55) 28%,
          rgb(235, 65, 65) 42%,
          transparent 82%
        ),
        -webkit-linear-gradient(-45deg, rgb(35, 75, 215) 12%, rgb(195, 60, 190)
              58%);
      background: -moz-radial-gradient(
          32% 106%,
          circle cover,
          rgb(255, 225, 125) 0%,
          rgb(255, 205, 105) 10%,
          rgb(250, 145, 55) 28%,
          rgb(235, 65, 65) 42%,
          transparent 82%
        ),
        -moz-linear-gradient(-45deg, rgb(35, 75, 215) 12%, rgb(195, 60, 190) 58%);
      background: -ms-radial-gradient(
          32% 106%,
          circle cover,
          rgb(255, 225, 125) 0%,
          rgb(255, 205, 105) 10%,
          rgb(250, 145, 55) 28%,
          rgb(235, 65, 65) 42%,
          transparent 82%
        ),
        -ms-linear-gradient(-45deg, rgb(35, 75, 215) 12%, rgb(195, 60, 190) 58%);
      background: -o-radial-gradient(
          32% 106%,
          circle cover,
          rgb(255, 225, 125) 0%,
          rgb(255, 205, 105) 10%,
          rgb(250, 145, 55) 28%,
          rgb(235, 65, 65) 42%,
          transparent 82%
        ),
        -o-linear-gradient(-45deg, rgb(35, 75, 215) 12%, rgb(195, 60, 190) 58%);
      background: radial-gradient(
          circle farthest-corner at 32% 106%,
          rgb(255, 225, 125) 0%,
          rgb(255, 205, 105) 10%,
          rgb(250, 145, 55) 28%,
          rgb(235, 65, 65) 42%,
          transparent 82%
        ),
        linear-gradient(135deg, rgb(35, 75, 215) 12%, rgb(195, 60, 190) 58%);
    }
  }
}

.info-link {
  text-decoration: none;
  margin: 0 10px;
}

#contact {
  background: #f2f5f7;
}
</style>
