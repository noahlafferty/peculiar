<template lang='pug'>
p
  HiddenWord(v-for='word in sentenceArray', :word='word')
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