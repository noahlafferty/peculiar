<template lang='pug'>
div.swirl-break(@click='handleClick', :class='{ clicked }', :style='{ filter: `hue-rotate(${scrollPosition * shiftFactor}deg)` }')
  div.character 
    span(v-if='life') 命
    span(v-else) 死
</template>

<script>
import Vue from 'vue'
import FixedMarquee from './FixedMarquee'

let Marquee = Vue.extend(FixedMarquee)

export default {
  name: 'SwirlBreak',
  data () {
    return {
      clicked: false,
      shiftFactor: 0.065,
      scrollPosition: 0,
      life: false
    }
  },
  methods: {
    updateScrollPosition () {
      this.scrollPosition = window.scrollY
    },
    handleClick () {
      let marquee = new Marquee()
      marquee.$mount()
      document.getElementById('app').appendChild(marquee.$el)

      this.life = !this.life
      this.clicked = true
      setTimeout(() => {
        this.clicked = false
      }, 1000)
    }
  },
  mounted () {
    this.$nextTick(() => {
      // window.addEventListener('scroll', this.updateScrollPosition)
    })
  }
}
</script>

<style lang='scss'>
.swirl-break {
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 30vw;
  box-sizing: border-box;

  background: url('/images/iri.jpg') no-repeat center center;
  background-size: 100% 100%;

  &.clicked {
    animation: glow-up 1s;

    .character {
      animation: pulse 1s;
    }
  }
}

.character {
  font-size: 4rem;
  font-weight: bold;
  color: red;
  // text-shadow: 0 0 20px rgba(255, 0, 0, 0.5);
  opacity: 0;
}

@keyframes glow-up {
  0% {
    filter: hue-rotate(0);
  }

  30% {
    filter: hue-rotate(50deg);
  }
}

@keyframes pulse {
  0% {
    opacity: 0;
  }

  30% {
    opacity: 0.1;
  }
}
</style>