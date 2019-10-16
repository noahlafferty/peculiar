<template lang='pug'>
span.hidden-word(@click='hidden = false', :class='{ green: word === "420.0", hidden }') 
  span(v-if='!hidden') {{ word }}
  span(v-else) {{ secret }}
</template>

<script>
export default {
  name: 'HiddenWord',
  props: ['word'],
  data() {
    return { 
      hovered: false,
      secret: null,
      hidden: (Math.random() > 0.25) ? false : true,
      charSet: ["歯", "型", "バ", "ァ", "ニ", "ボ", "ソ", "と", "あ", "ぽ", "千", "喜", "良", "タ", "ツ"]
    }
  },
  methods: {
    setSecret () {
      let s = ''
      let nSecretChars = Math.ceil(this.word.length  * (3/5))
      for (let i=0; i<nSecretChars; i++){
        s += this.generateCharacter()
      }
      this.secret = s
    },
    refreshSecret () {
      for (let i = 0; i < this.secret.length; i++) {
        if (Math.random() < 0.05){
          this.secret = this.secret.substr(0, i) + this.generateCharacter() + this.secret.substr(i + 1)
        }
      }
    },
    generateCharacter () {
      return this.charSet[Math.floor(Math.random() * this.charSet.length)]
    },
    getRandomResetTime (minSeconds, maxSeconds) {
      return (Math.random() * (maxSeconds - minSeconds) + minSeconds) * 1000
    }
  },
  watch: {
    hidden(){
      setTimeout(() => {
        this.hidden = true
      }, this.getRandomResetTime(20, 35))
    }
  },
  mounted() {
    this.setSecret()
    setInterval(this.refreshSecret, 300)
  } 
}
</script>

<style lang='scss'>
@import '../scss/_variables.scss';

.hidden-word {
  $transition-time: .5s;

  color: $black;
  text-shadow: 0 0 25px rgba(255, 8, 103, 0);

  transition: color $transition-time, text-shadow $transition-time;

  &:hover {
    color: rgb(255, 8, 103);
    text-shadow: 0 0 5px rgba(255, 8, 103, .5);
  }

  &.green:hover {
    color: rgb(6, 136, 2);
    text-shadow: 0 0 5px rgba(6, 173, 0, .5);
  }
}

.hidden-word + .hidden-word {
  padding-left: 0.5rem;
}
</style>