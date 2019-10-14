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
      hidden: true,
      charSet: ["歯", "型", "バ", "ァ", "ニ", "ボ", "ソ", "と", "あ", "ぽ", "千", "喜", "良", "タ", "ツ"]
    }
  },
  computed: {
    secret() {
      let s = ''
        let nSecretChars = Math.ceil(this.word.length  * (3/5))
        for (let i=0; i<nSecretChars; i++){
          let index = Math.floor(Math.random() * this.charSet.length)
          s += this.charSet[index]
        }
        return s
    }
  }
}
</script>

<style lang='scss'>
.hidden-word + .hidden-word {
  margin-left: 0.5rem;
}
</style>