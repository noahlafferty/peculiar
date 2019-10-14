<template lang='pug'>
div.japanese-sentence__wrapper
  div.japanese-sentence
    HiddenSentence(sentence='This is a big sentence This is a big sentence This is a big sentence This is a big sentence This is a big sentence This is a big sentence This is a big sentence This is a big sentence This is a big sentence This is a big sentence This is a big sentence ')
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
    word-break: break-word;
}
</style>