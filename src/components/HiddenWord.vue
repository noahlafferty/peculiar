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
      hidden: (Math.random() > 0.65) ? false : true,
      charSet: ["歯", "型", "バ", "ァ", "ニ", "ボ", "ソ", "と", "あ", "ぽ", "千", "喜", "良", "タ", "ツ"]
    }
  },
  methods: {
    setSecret() {
      let s = ''
      let nSecretChars = Math.ceil(this.word.length  * (3/5))
      for (let i=0; i<nSecretChars; i++){
        let index = Math.floor(Math.random() * this.charSet.length)
        s += this.charSet[index]
      }
      this.secret = s
    },
    refreshSecret(){
      if (Math.random() > 2){
        this.setSecret()
      }
    }
  },
  mounted() {
    setInterval(this.refreshSecret, 300)
  } 
}
</script>

<style lang='scss'>
.hidden-word + .hidden-word {
  margin-left: 0.5rem;
}
</style>