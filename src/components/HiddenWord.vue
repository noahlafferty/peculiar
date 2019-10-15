<template lang='pug'>
span.hidden-word(@mouseover='hidden=false') 
  span(v-if='!hidden') {{word}}
  span(v-else) {{secret}}
</template>

<script>
export default {
  name: 'HiddenWord',
  props: ['word'],
  data() {
    return { 
      secret: null,
      hidden: (Math.random() > 0.25) ? false : true,
      charSet: ["歯", "型", "バ", "ァ", "ニ", "ボ", "ソ", "と", "あ", "ぽ", "千", "喜", "良", "タ", "ツ"]
    }
  },
  methods: {
    setSecret () {
      let s = ''
      let nSecretChars = Math.ceil(this.word.length  * (3/5))
      for (let i=0; i<nSecretChars; i++){
        s += this.generateCharacter()
      }
      this.secret = s
    },
    refreshSecret () {
      for (let i = 0; i < this.secret.length; i++) {
        if (Math.random() < 0.05){
          this.secret = this.secret.substr(0, i) + this.generateCharacter() + this.secret.substr(i + 1)
        }
      }
    },
    generateCharacter () {
      return this.charSet[Math.floor(Math.random() * this.charSet.length)]
    },
    getRandomResetTime (minSeconds, maxSeconds) {
      return (Math.random() * (maxSeconds - minSeconds) + minSeconds) * 1000
    }
  },
  watch: {
    hidden(){
      setTimeout(() => {
        this.hidden = true
      }, this.getRandomResetTime(20, 35))
    }
  },
  mounted() {
    this.setSecret()
    setInterval(this.refreshSecret, 300)
  } 
}
</script>

<style lang='scss'>
.hidden-word + .hidden-word {
  margin-left: 0.5rem;
}
</style>