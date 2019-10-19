<template lang='pug'>
div#app(ref='app', @mousemove='updateCoordinates')
  SiteNav
  PeculiarAlbum
  SwirlBreak
  JapaneseSentence
  CobogoBreak(v-if='foundTheSecret')
  //- SpotifyPlayer
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      foundTheSecret: false
    }
  },
  components: {
    SiteNav: () => import('./components/SiteNav'),
    PeculiarAlbum: () => import('./components/PeculiarAlbum'),
    SwirlBreak: () => import('./components/SwirlBreak'),
    CobogoBreak: () => import('./components/CobogoBreak'),
    JapaneseSentence: () => import('./components/JapaneseSentence'),
    SpotifyPlayer: () => import('./components/SpotifyPlayer')
  },
  methods: {
    updateCoordinates (event) {
      this.$store.commit('setMouseX', { value: event.clientX })
      this.$store.commit('setMouseY', { value: event.clientY })
    }
  },
  mounted () {
    this.$root.$on('found-the-secret', () => {
      this.foundTheSecret = !this.foundTheSecret
    })
  }
}
</script>

<style lang='scss'>
@import './scss/_variables';

@font-face {
  font-family: 'Dingbat Cobogo';
  src: url('/DingbatCobogo.woff2') format('woff2'),
      url('/DingbatCobogo.woff') format('woff');
  font-weight: normal;
  font-style: normal;
}

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
