<template lang='pug'>
div.peculiar-album__wrapper
  a.ode__wrapper(:style='{ "max-width": maxWidth + "px" }', v-scroll-to='"#lyrics"', @mouseover='hover = true', @mouseleave='hover = false')
    div.noise__wrapper
    div.ode__content
      div.gold__wrapper
        div.album__inner
          div.flower__wrapper(:style='{ background: `url("./assets/gradient-noise.png") no-repeat center center, linear-gradient(to bottom right, ${topColor}, ${bottomColor})` }')
            div.flowers(:style='{ transform: `translate3d(${xOffset}%, ${yOffset}%, 0px` }')
          div.felt__wrapper
            div.felt
      div.marble
  a.vinyl(:class='{ "hover-effect": effect === 2, hover }', :style='{ "max-width": maxWidth + "px" }')
    div.vinyl__content
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'PeculiarAlbum',
  data () {
    return {
      hover: false,
      effect: 0,
      maxWidth: window.innerWidth,
      scaleFactor: 6,
    }
  },
  computed: {
    ...mapState(['mouse']),
    topColor () {
      return (this.effect === 0) ? `hsl(${(this.mouse.x / window.innerWidth) * 30 + 250}, 100%, 50%)` : '#0060ff'
    },
    bottomColor () {
      return (this.effect === 0) ? `hsl(${(this.mouse.y / window.innerHeight) * 25 + 35}, 100%, 50%)` : '#ffba00'
    },
    xOffset () {
      return (this.effect === 1) ? (-1 * this.mouse.x / window.innerWidth * this.scaleFactor) : 0
    },
    yOffset () {
      return (this.effect === 1) ? (-1 * this.mouse.y / window.innerHeight * this.scaleFactor) : 0
    }
  },
  methods: {
    updateWindowSize () {
      let maxWidth = (window.innerWidth < window.innerHeight) ? window.innerWidth : window.innerHeight;
      this.maxWidth = maxWidth * 0.6
    },
    toColor (num) {
      num >>>= 0
      var b = num & 0xFF,
          g = (num & 0xFF00) >>> 8,
          r = (num & 0xFF0000) >>> 16,
          a = 1
      return 'rgba(' + [r, g, b, a].join(',') + ')'
    }
  },
  mounted () {
    this.effect = Math.floor(Math.random() * 2)

    this.$nextTick(() => {
      this.updateWindowSize()
      window.addEventListener('resize', this.updateWindowSize)
    })
  }
}
</script>

<style lang='scss'>
$gradient-yellow: #ffba00;
$gradient-blue: #0060ff;

.peculiar-album__wrapper {
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100vh;
}

.ode__wrapper {
  position: relative;
  width: 60%;
  top: 0;

  box-shadow: 0px 5px 25px rgba(0, 0, 0, .25);
  
  z-index: 2;

  cursor: pointer;

  &::after {
    content: '';
    display: block;
    padding-bottom: 100%;
  }

  .ode__content {
    position: absolute;
    width: 100%;
    height: 100%;
  }

  .noise__wrapper {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;

    background: url('/images/overall-noise.png') no-repeat center center;
    background-size: cover;

    z-index: 100;
  }
}

.vinyl {
  position: absolute;
  width: 60%;

  border-radius: 50%;

  z-index: 1;

  transform: translateX(40%);
  transition: transform .5s;

  cursor: pointer;

  &.hover-effect {
    transform: translateX(20%);

    &.hover {
      transform: translateX(25%);
    }

    &:hover {
      transform: translateX(40%);
    }
  }

  &::after {
    content: '';
    display: block;
    padding-bottom: 100%;
  }

  .vinyl__content {
    position: absolute;
    width: 100%;
    height: 100%;

    animation: rotate 30s infinite linear;
  
    background: url('/images/vinyl.png') no-repeat center center;
    background-size: auto 100%;

    pointer-events: none;
  }
}

@keyframes rotate {
  0% {
    transform: rotate(0);
  }

  100% {
    transform: rotate(360deg)
  }
}

.gold__wrapper {
  height: 100%;
  width: 100%;
  padding: 2.5%;
  box-sizing: border-box;

  background: url('/images/gold-1000.jpg') no-repeat center center;
  background-size: cover;
}

.album__inner {
  display: flex;

  height: 100%;
  width: 100%;
}

.flower__wrapper {
  position: relative;
  flex: 1 1 80%;
  background: linear-gradient(to bottom right, $gradient-blue 30%, $gradient-yellow);
  background-size: cover;

  overflow: hidden;
  
  .flowers {
    position: absolute;
    width: 120%;
    height: 120%;
    top: -10%;
    left: -10%;

    background: url('/images/flowers-1000.png') no-repeat center center;
    background-size: cover;
  }
}

.felt__wrapper {
  position: relative;
  height: 100%;
  flex: 1 1 20%;
}

.felt {
  height: 100%;

  background: url('/images/title-1000.jpg') no-repeat center center;
  background-size: cover;
  // filter: hue-rotate(160deg);
}

.marble {
  position: absolute;
  height: 100%;
  width: 14%;
  top: 0;
  right: 21%;

  background: url('/images/marble-1000.jpg') no-repeat center center;
  background-size: cover;
}
</style>
