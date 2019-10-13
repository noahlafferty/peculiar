<template lang='pug'>
div#app(@mousemove='updateCoordinates')
  nav.sitenav.left
    a Spotify
    a Facebook
    a SoundCloud
    a Twitter
  nav.sitenav.right
    a Instagram
    a Email
    a Resume
    a SSN
  div.ode__wrapper(:style='{ "max-width": maxWidth + "px" }')
    div.noise__wrapper
    div.ode__content
      div.gold__wrapper
        div.album__inner
          div.flower__wrapper(:style='{ background: `url("./assets/gradient-noise.png") no-repeat center center, linear-gradient(to bottom right, ${topColor}, ${bottomColor})` }')
            div.flowers(:style='{ transform: `translate3d(${xOffset}px, ${yOffset}px, 0px` }')
          div.felt__wrapper
            div.felt
      h3.ode Ode to the Peculiar
      div.marble
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      parallaxDisabled: false,
      maxWidth: window.innerWidth,
      scaleFactor: 0.02,
      mouse: {
        x: 0,
        y: 0
      }
    }
  },
  computed: {
    topColor () {
      return `hsl(${(this.mouse.x / window.innerWidth) * 30 + 250}, 100%, 50%)`
    },
    bottomColor () {
      return `hsl(${(this.mouse.y / window.innerHeight) * 25 + 35}, 100%, 50%)`
    },
    xOffset () {
      return (-1 * (this.mouse.x - (window.innerWidth / 2)) * this.scaleFactor)
    },
    yOffset () {
      return (-1 * (this.mouse.y - (window.innerHeight / 2)) * this.scaleFactor)
    }
  },
  methods: {
    updateCoordinates (event) {
      this.mouse.x = event.clientX
      this.mouse.y = event.clientY
    },
    updateWindowSize () {
      let maxWidth = (window.innerWidth < window.innerHeight) ? window.innerWidth : window.innerHeight;
      this.maxWidth = maxWidth * 0.9
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
    // 50/50 chance to get a random effect
    if (Math.random() < 0.5) this.parallaxDisabled = true

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

html, body {
  height: 100vh;
  width: 100vw;
  margin: 0;
  padding: 0;

  font-size: 16px;

  overflow: hidden;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  position: relative;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
}

.sitenav {
  position: absolute;
  display: flex;
  justify-content: center;

  width: 100vh;
  height: 4rem;
  line-height: 4rem;
  top: calc(100% - 4rem);
  left: 4rem;

  font-weight: bold;

  transform: rotate(-90deg);
  transform-origin: 0 100%;

  a {
    text-transform: uppercase;
    letter-spacing: 1px;

    cursor: pointer;

    &:hover {
      opacity: .75;
    }

    & + a {
      margin-left: 1.5rem;
    }
  }

  &.right {
    transform: rotate(90deg);
    transform-origin: 100% 0;
    top: 100%;
    left: auto;
    right: 0;
  }
}

.ode__wrapper {
  position: relative;
  width: 40%;
  box-shadow: 0px 5px 25px rgba(0, 0, 0, .25);

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

    background: url('./assets/overall-noise.png') no-repeat center center;
    background-size: cover;
  }
}

.gold__wrapper {
  height: 100%;
  width: 100%;
  padding: 2.5%;
  box-sizing: border-box;

  background: url('./assets/gold.jpg') no-repeat center center;
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
  background: url('./assets/gradient-noise.png') no-repeat center center,
              linear-gradient(to bottom right, $gradient-blue 30%, $gradient-yellow);
  background-size: cover;

  overflow: hidden;
  
  .flowers {
    position: absolute;
    width: 120%;
    height: 120%;
    top: -10%;
    left: -10%;

    background: url('./assets/flowers.png') no-repeat center center;
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

  background: url('./assets/felt.jpg') no-repeat center center;
  background-size: cover;


  filter: hue-rotate(160deg);
}

.ode {
  position: absolute;
  width: 100%;
  top: 0;
  right: 20%;
  height: 20%;
  line-height: 200%;
  margin: 0;

  font-family: 'Dancing Script', cursive;
  font-size: 250%;
  font-weight: 700;
  background: url('./assets/gold.jpg') no-repeat center center;

  transform: rotate(-90deg);
  transform-origin: 100% 0;

  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.marble {
  position: absolute;
  height: 100%;
  width: 10%;
  top: 0;
  right: 20%;

  background: url('./assets/marble.jpg') no-repeat center center;
  background-size: cover;
}
</style>
