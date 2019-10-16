<template lang='pug'>
div.spotify-player
  <iframe src="https://open.spotify.com/embed/track/2bHrYYQMxw1Is8NrsutriR" width="250" height="80" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
</template>

<script>
export default {
  name: 'SpotifyPlayer'
}
</script>

<style lang='scss'>
.spotify-player {
  position: fixed;
  height: 80px;
  right: 0;
  bottom: 0;

  z-index: 1001;
}
</style>