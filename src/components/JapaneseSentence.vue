<template lang='pug'>
div.japanese-sentence__wrapper
  div.japanese-sentence
    div.song(v-for='song in songs')
      HiddenSentence(v-for='line in song.lyrics', :sentence='line')
</template>

<script>
export default {
  name: 'JapaneseSentence',
  components: {
    HiddenSentence: () => import('./HiddenSentence')
  },
  data(){
    return {
      songs: [
        {title: 'song 1', 
        lyrics: ['woke up in Dover Hills tonight', 'gazing the stars in the sunrise', 'whatever deep divine', 
         'left you intensely mad', 'woke up in dover hills tonight', 'and hit a wall', 'you want it all', 
         'you won\'t come back', 'you won\'t come back']
        },
        {title: 'song 2', 
        lyrics: ['woke up in Dover Hills tonight', 'gazing the stars in the sunrise', 'whatever deep divine', 
         'left you intensely mad', 'woke up in dover hills tonight', 'and hit a wall', 'you want it all', 
         'you won\'t come back', 'you won\'t come back']
        },
        {title: 'song 3', 
        lyrics: ['woke up in Dover Hills tonight', 'gazing the stars in the sunrise', 'whatever deep divine', 
         'left you intensely mad', 'woke up in dover hills tonight', 'and hit a wall', 'you want it all', 
         'you won\'t come back', 'you won\'t come back']
        },
        {title: 'song 4', 
        lyrics: ['woke up in Dover Hills tonight', 'gazing the stars in the sunrise', 'whatever deep divine', 
         'left you intensely mad', 'woke up in dover hills tonight', 'and hit a wall', 'you want it all', 
         'you won\'t come back', 'you won\'t come back']
        }
      ]
    }
  }
}
</script>

<style lang='scss'>
.japanese-sentence__wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
}

.japanese-sentence {
  max-width: 80vw;
  word-break: break-all;
  text-align: left;
  display:grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 8vh 12vw; 
}
</style>