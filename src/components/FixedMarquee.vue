<template lang='pug'>
div.marquee__wrapper(v-if='!destroyed', :style='{ left: `${left}vw` }')
  div.marquee(v-if='message', :style='{ height: `${height}px`, transform: (active) ? `translateY(-${pageHeight}px)` : "none" }')
    p.letter(v-for='letter in message.split("")') {{ letter }}
</template>

<script>
export default {
  name: 'FixedMarquee',
  data () {
    return {
      destroyed: false,
      left: 5,
      height: 0,
      active: false,
      message: null,
      charSet: ["歯", "型", "バ", "ァ", "ニ", "ボ", "ソ", "と", "あ", "ぽ", "千", "喜", "良", "タ", "ツ"]
    }
  },
  computed: {
    pageHeight () {
      return window.innerHeight + this.height
    }
  },
  methods: {
    generateMessage (length) {
      let m = ''
      for (let i = 0; i < length; i++) {
        m += this.charSet[Math.floor(Math.random() * this.charSet.length)]
      }
      return m
    },
    refreshMessage () {
      for (let i = 0; i < this.message.length; i++) {
        if (Math.random() < 0.25){
          this.message = this.message.substr(0, i) + this.generateMessage(1) + this.message.substr(i + 1)
        }
      }
    }
  },
  mounted () {
    this.left = Math.random() * 95
    this.message = this.generateMessage(10)
    this.height = this.message.split("").length * 44

    setInterval(this.refreshMessage, 300)

    // wow
    setTimeout(() => {
      this.active = true
      setTimeout(() => {
        this.destroyed = true
        this.$nextTick(() => {
          this.$destroy() // we did it
        })
      }, 3000)
    }, Math.random() * 5000)
  }
}
</script>

<style lang='scss'>
.marquee__wrapper {
  position: fixed;
  height: 100vh;
  width: 4rem;
  top: 0;

  z-index: 1000;
  pointer-events: none;
}

.marquee {
  position: absolute;

  top: 100%;
  transition: transform 3s linear;
  will-change: transform;

  .letter {
    $size: 40px;
    height: $size;
    padding-bottom: 4px;

    font-size: $size;
    font-weight: bold;
    color: rgb(166, 17, 252);
    text-shadow: 8px 8px 0 rgb(90, 206, 241);
  }
}
</style>