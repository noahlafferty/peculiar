<template lang='pug'>
p
  HiddenWord(v-for='(word, index) in sentenceArray', :word='word', :key='index')
</template>

<script>
export default {
  name: 'HiddenSentence',
  components: {
    HiddenWord: () => import('./HiddenWord')
  },
  props: ['sentence'], 
  computed: {
    sentenceArray() {
      return this.sentence.split(' ')
    }
  }
}
</script>

<style lang='scss'>
</style>