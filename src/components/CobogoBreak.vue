<template lang='pug'>
div.cobogo-break__wrapper
  div.cobogo-break {{ displayString }}
</template>

<script>
export default {
  name: 'CobogoBreak',
  data () {
    return {
      length: 25,
      displayString: ''
    }
  },
  methods: {
    generateCharacter () {
      return String.fromCharCode(Math.floor(Math.random() * 26) + 65)
    },
    generateString () {
      let s = ''
      for (let i = 0; i < this.length; i++) {
        s += this.generateCharacter()
      }
      this.displayString = s
    },
    updateString () {
      const replaceIdx = Math.floor(Math.random() * this.length)
      this.displayString = this.displayString.substr(0, replaceIdx) + this.generateCharacter() + this.displayString.substr(replaceIdx + 1)
      setTimeout(this.updateString, this.getRandomDelay())
    },
    getRandomDelay () {
      return Math.random() * 1000
    }
  },
  mounted () {
    this.generateString()
    setTimeout(this.updateString, this.getRandomDelay())
  }
}
</script>

<style lang='scss'>
@import '../scss/_variables.scss';

.cobogo-break__wrapper {
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 30vw;
}

.cobogo-break {
  width: 16rem;

  font-family: 'Dingbat Cobogo';
  font-size: 4rem;
  color: $tangerine;

  word-break: break-all;
  line-height: 2.95rem;
}
</style>