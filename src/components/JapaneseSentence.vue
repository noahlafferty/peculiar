<template lang='pug'>
div#lyrics.japanese-sentence__wrapper
  div.japanese-sentence
    div.song(v-for='(song, index) in songs')
      h3(@click='(index === 2) ? $root.$emit("found-the-secret") : null') {{ song.title }}
      HiddenSentence(v-for='(line, index) in song.lyrics', :sentence='line', :key='index')
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
        {title: '1. Opus', 
        lyrics: ['he grew certain', 'that when he went away', 'he had another day', 'the sensei']
        },
        {title: '2. Ode to the Peculiar', 
        lyrics: ['woke up in Dover Hills tonight', 'gazing at stars in the sunrise', 'whatever deep divine', 
         'left you intensely mad']
        },
        {title: '3. Violet Fields', 
        lyrics: ['violet fields', 'she\'s a roadtrip', 'takes me back', 'and I don\'t know why']
        },
        {title: '4. One Star Galaxy', 
        lyrics: ['one star galaxy', 'thrown out of space and reality', 'but it\'s too late to patch a universe', 'tuning a radio anagram']
        }
      ]
    }
  }
}
</script>

<style lang='scss'>
@import '../scss/_mixins';

.japanese-sentence__wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  min-height: 100vh;
  width: 100vw;
  padding: 20vh 4rem;
  box-sizing: border-box;
}

.song {
  h3 {
    font-weight: 700;
    margin-bottom: .5rem;
  }
}

.japanese-sentence {
  display:grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 8vh 12vw; 

  max-width: 90vw;

  word-break: break-all;
  text-align: left;
  
  @include respond-to('small') {
    grid-template-columns: 1fr;
  }
}
</style>