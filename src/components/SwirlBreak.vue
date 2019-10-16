<template lang='pug'>
div.swirl-break(@click='handleClick', :style='{ filter: `hue-rotate(${scrollPosition * shiftFactor}deg)` }')
</template>

<script>
export default {
  name: 'SwirlBreak',
  data () {
    return {
      shiftFactor: 0.065,
      scrollPosition: 0
    }
  },
  methods: {
    updateScrollPosition () {
      this.scrollPosition = window.scrollY
    },
    handleClick () {
      this.$root.$emit('swirl-click')
    }
  },
  mounted () {
    // if (Math.random() < 0.3333) {
    this.$nextTick(() => {
      window.addEventListener('scroll', this.updateScrollPosition)
    })
    // }
  }
}
</script>

<style lang='scss'>
.swirl-break {
  width: 100%;
  height: 30vw;
  box-sizing: border-box;

  background: url('/images/iri.jpg') no-repeat center center;
  background-size: 100% 100%;
}
</style>