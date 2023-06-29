<script>
import {store} from './data/store.js';
import Header from './components/AppHeader.vue';
import Main from './components/AppMain.vue';
import axios from 'axios';
export default {
  data(){
    return{
      store,
    }
  },
  components:{
    Header,
    Main
  },
  mounted(){
    this.searchSubject()
  },
  methods:{
    searchSubject(){
      store.filmsList= '';
      store.seriesList= '';
      axios.get(store.api + 'movie?' + store.apiKey + '&query=' + store.searchedSubject).then((response) => {
      store.filmsList = response.data.results;
    }),
    axios.get(store.api + 'tv?' + store.apiKey + '&query=' + store.searchedSubject).then((response) => {
      store.seriesList = response.data.results;
    })
    }
  }
}
</script>
<template lang="">
  <div>
    <Header @search="searchSubject" />
    <Main />
  </div>
</template>
<style lang="scss">
  @use './styles/generals.scss' as *;
</style>