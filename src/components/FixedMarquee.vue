<template lang='pug'>
div.marquee__wrapper(:style='{ left: `${left}vw` }')
  div.marquee(:style='{ height: `${height}px`, top: (active) ? `${-1 * height}px` : "100%", active }')
    p.letter(v-for='letter in message.split("")') {{ letter }}
</template>

<script>
export default {
  name: 'FixedMarquee',
  data () {
    return {
      left: 5,
      height: 0,
      active: false,
      messages: [
        'eat your broccoli',
        'ain\'t nobody got time for that'
      ],
      message: null,
      charSet: ["歯", "型", "バ", "ァ", "ニ", "ボ", "ソ", "と", "あ", "ぽ", "千", "喜", "良", "タ", "ツ"]
    }
  },
  methods: {
    generateMessage (length) {
      let m = ''
      for (let i = 0; i < length; i++) {
        m += this.charSet[Math.floor(Math.random() * this.charSet.length)]
      }
      return m
    }
  },
  mounted () {
    this.left = Math.random() * 95
    this.message = this.generateMessage(10)
    this.height = this.message.split("").length * 44

    setTimeout(() => {
      this.active = true
    }, 500)
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
}

.marquee {
  position: absolute;

  top: 100%;
  transition: top 3s linear;

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