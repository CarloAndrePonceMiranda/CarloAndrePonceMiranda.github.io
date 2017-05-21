<template lang="pug">
  <div class="hello">
    <img src="./assets/logo.png">
    h1 {{ msg }}
    ul
      li(v-for="artist in artists") {{artist.name}}
  </div>
</template>

<script>
import getArtists from './api'

export default {
  name: 'app',
  data () {
    return {
      artists:[]
    }
  },
  mounted: function (){
    const self = this
    getArtists()
      .then(function (artists) {
        self.artists = artists
      })

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus">
#app
    font-family 'Avenir', Helvetica, Arial, sans-serif
    -webkit-font-smoothing antialiased
    -moz-osx-font-smoothing grayscale
    text-align center
    color red//#2c3e50
    margin-top 60px
</style>