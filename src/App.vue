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
  div.swirl
    a.vinyl

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
/* http://meyerweb.com/eric/tools/css/reset/ 
   v2.0 | 20110126
   License: none (public domain)
*/

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}

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
  height: 100vh;
  box-sizing: border-box;

  background: url('/images/iri.jpg') no-repeat center center;
  background-size: 100% 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  .vinyl {
    flex: 1 20rem;
    height: 20rem;
    background: url('/images/vinyl.png') no-repeat center center;
    background-size: auto 100%;

    cursor: pointer;
  }
}
</style>
