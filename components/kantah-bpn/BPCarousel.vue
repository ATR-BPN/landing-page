<template>
  <header class="masthead">
    <div class="container mt-4 h-80">
      <b-carousel
        id="carousel-1"
        v-model="slide"
        :interval="3500"
        controls
        indicators
        style="text-shadow: 1px 1px 2px #333"
        @sliding-start="onSlideStart"
        @sliding-end="onSlideEnd"
      >
        <b-carousel-slide v-for="image in images" :key="image" :img-src="image">
          <template #img>
            <img
              class="d-block img-fluid w-100"
              width="1024"
              height="480"
              :src="image"
              alt="image slot"
            />
          </template>
        </b-carousel-slide>
      </b-carousel>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      slide: 0,
      sliding: null,
      images: [
        '/carousel/slide-1.jpeg',
        '/carousel/slide-2.jpeg',
        '/carousel/slide-3.jpeg',
        '/carousel/slide-4.jpeg',
      ],
    }
  },
  methods: {
    onSlideStart(slide) {
      this.sliding = true
    },
    onSlideEnd(slide) {
      this.sliding = false
    },
  },
}
</script>

<style lang="scss" scoped>
.carousel-inner {
  border-radius: 8px;
}
</style>
