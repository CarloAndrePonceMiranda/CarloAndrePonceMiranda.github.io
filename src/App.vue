<template lang="pug">
  <div id="app">
    <img src="./assets/logo.png">
    h1 Vue
    h2  Artistas del Momento
    h4 en
    select(v-model="selectedCountry")
      option(v-for="country in countries" v-bind:value="country.value") {{ country.name}}
    spinner(v-show="loading")
    ul
      artist(v-for="artist in artists" v-bind:artist="artist" v-bind:key="artist.mbid")   
  </div>
</template>
<script>
import Artist from './components/Artist.vue'
import Spinner from './components/Spinner.vue'
import getArtists from './api'

export default {
  name: 'app',
  data () {
    return {
      artists:[],
      countries:[
      { name:'México',value:'mexico'},
      { name:'Argentina',value:'argentina'},
      { name:'Colombia',value:'colombia'},
      { name:'España',value:'spain'},
      { name:'Alemania',value:'germany'},
      { name:'Italia',value:'italy'},
      { name:'Holanda',value:'Netherlands'},
      { name:'Francia',value:'france'},
      { name:'Canadá',value:'canada'},
      ],
      selectedCountry: 'mexico',
      loading:true
    }
  },
  components:{
    Artist,
    Spinner
  },
  methods:{
    refreshArtists(){
      const self = this
      this.loading=true
      this.artists=[]
    getArtists(this.selectedCountry)
      .then(function (artists) {
        self.loading=false
        self.artists = artists
      })

    }
  },
  mounted(){
    this.refreshArtists()
  },
  watch: {
    selectedCountry(){
      this.refreshArtists()

    }
  }

}
</script>

<style lang="stylus">
body
    background-color black
#app
    font-family 'Avenir', Helvetica, Arial, sans-serif
    -webkit-font-smoothing antialiased
    -moz-osx-font-smoothing grayscale
    text-align center
    color white
    margin-top 0px
    background-color black

h1, h2
    font-weight normal

ul
    list-style-type none
    padding 0

li
    display inline-block
    margin 0 10px


a
    color white
</style>
  
