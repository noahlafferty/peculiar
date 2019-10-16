<template lang='pug'>
div#app(ref='app', @mousemove='updateCoordinates')
  SiteNav
  PeculiarAlbum
  SwirlBreak
  JapaneseSentence
  //- SpotifyPlayer
</template>

<script>
export default {
  name: 'App',
  components: {
    SiteNav: () => import('./components/SiteNav'),
    PeculiarAlbum: () => import('./components/PeculiarAlbum'),
    SwirlBreak: () => import('./components/SwirlBreak'),
    JapaneseSentence: () => import('./components/JapaneseSentence'),
    SpotifyPlayer: () => import('./components/SpotifyPlayer')
  },
  methods: {
    updateCoordinates (event) {
      this.$store.commit('setMouseX', { value: event.clientX })
      this.$store.commit('setMouseY', { value: event.clientY })
    }
  }
}
</script>

<style lang='scss'>
@import './scss/_variables';


#app {
  font-family: 'IBM Plex Mono', monospace;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $black;

  position: relative;
  height: 100%;
}
</style>
