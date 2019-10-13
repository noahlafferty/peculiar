<template lang='pug'>
img(:src='src')
</template>

<script>
export default {
  name: 'ImageSection',
  props: ['src']
}
</script>

<style lang='scss' scoped>
img {
  display: block;
  width: 100%;
}
</style>