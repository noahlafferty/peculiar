<template lang='pug'>
div.swirl-break(@click='handleClick', :class='{ clicked }')
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
      life: false,
      resetTimeout: null
    }
  },
  methods: {
    handleClick () {
      let marquee = new Marquee()
      marquee.$mount()
      document.getElementById('app').appendChild(marquee.$el)

      if (!this.clicked) {
        this.life = !this.life
        this.clicked = true
        clearTimeout(this.resetTimeout)
        this.resetTimeout = setTimeout(() => {
          this.clicked = false
        }, 1000)
      }
    }
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

  cursor: pointer;

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

  20% {
    filter: hue-rotate(50deg);
  }

  100% {
    filter: hue-rotate(0deg);
  }
}

@keyframes pulse {
  0% {
    opacity: 0;
  }

  20% {
    opacity: 0.1;
  }
}
</style>