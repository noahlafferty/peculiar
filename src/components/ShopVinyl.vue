<template lang='pug'>
div.shop-vinyl
  a.vinyl(href='https://i.pinimg.com/originals/d9/b0/de/d9b0dea369b823e22766782b9518e600.jpg', target='_blank')
</template>

<script>
export default {
  name: 'ShopVinyl'
}
</script>

<style lang='scss'>
.shop-vinyl {
  width: 100%;
  height: 100vh;
  box-sizing: border-box;

  background: url('/images/iri.jpg') no-repeat center center;
  background-size: 100% 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  .vinyl {
    flex: 0 20rem;
    height: 20rem;
    background: url('/images/vinyl.png') no-repeat center center;
    background-size: auto 100%;

    border-radius: 50%;

    cursor: pointer;
  }
}
</style>