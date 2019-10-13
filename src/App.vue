<template lang='pug'>
div#app(@mousemove='updateCoordinates')
  nav.sitenav.left
    a(href='https://open.spotify.com/artist/7sO3BcevkIUXu5NcUNBVfO?si=NRbFDvtGQEamdtZdjQQk7Q', target='_blank') Spotify
    a(href='https://www.facebook.com/modestaband/', target='_blank') Facebook
    a(href='https://soundcloud.com/modestaband', target='_blank') SoundCloud
  nav.sitenav.right
    a(href='https://twitter.com/modestaband', target='_blank') Twitter
    a(href='https://www.instagram.com/modestaband/', target='_blank') Instagram
    a(href='https://www.look-up-records.com/blog/2018/1/8/review-vhs-by-modesta', target='_blank') News
  PeculiarAlbum
  ImageSection.swirl(src='/images/iri.jpg')
</template>

<script>
export default {
  name: 'App',
  components: {
    PeculiarAlbum: () => import('./components/PeculiarAlbum'),
    ImageSection: () => import('./components/ImageSection')
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
$black: #2c3e50;

html, body {
  height: 100vh;
  width: 100vw;
  margin: 0;
  padding: 0;

  font-size: 16px;

  overflow-x: hidden;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $black;

  position: relative;
  height: 100%;
}

.sitenav {
  position: fixed;
  display: flex;
  justify-content: center;

  width: 100vh;
  height: 4rem;
  line-height: 4rem;
  top: calc(100% - 4rem);
  left: 4rem;

  font-weight: bold;

  transform: rotate(-90deg);
  transform-origin: 0 100%;

  a {
    color: $black;
    text-decoration: none;
    text-transform: uppercase;
    letter-spacing: 1px;

    cursor: pointer;

    &:hover {
      opacity: .75;
    }

    & + a {
      margin-left: 1.5rem;
    }
  }

  &.right {
    transform: rotate(90deg);
    transform-origin: 100% 0;
    top: 100%;
    left: auto;
    right: 0;
  }
}

.swirl {
  width: 100%;
  height: 20rem;
}
</style>
