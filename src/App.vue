<script>
import {store} from './data/store.js';
import Header from './components/AppHeader.vue';
import Main from './components/AppMain.vue';
export default {
  data(){
    return{
      store,
    }
  },
  components:{
    Header,
    Main
  }
}
</script>
<template lang="">
  <div>
    <Header />
    <Main />
  </div>
</template>
<style lang="scss">
  @use './styles/generals.scss' as *;
</style>