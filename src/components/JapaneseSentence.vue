<template lang='pug'>
div.japanese-sentence__wrapper
  div.japanese-sentence
    HiddenSentence(sentence="woke up in Dover Hills tonight")
    HiddenSentence(sentence="gazing the starts in the sunrise")
    HiddenSentence(sentence="Whatever deep divine")
    HiddenSentence(sentence="Left you intensely mad")
    HiddenSentence(sentence="woke up in Dover Hills tonight")
    HiddenSentence(sentence="and hit a wall")
    HiddenSentence(sentence="you want it all")
    HiddenSentence(sentence="you won't come back")
    HiddenSentence(sentence="you won't come back")



</template>

<script>
export default {
  name: 'JapaneseSentence',
  components: {
    HiddenSentence: () => import('./HiddenSentence')
  }
}
</script>

<style lang='scss'>
.japanese-sentence__wrapper{
    display:flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100vw;
}
.japanese-sentence{
    max-width: 30vw;
    word-break: break-all;
    text-align: left;
}
</style>