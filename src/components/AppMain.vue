<script>
import CardFilms from './AppCardFilms.vue';
import AppCardSeries from './AppCardSeries.vue';
import {store} from '../data/store.js'
export default {
    data(){
        return{
            store,
        }
    },
    components:{
        CardFilms,
        AppCardSeries,
    }
}
</script>
<template lang="">
    <div>
        <div class="container">
            <div class="row">
                <div class="col">
                    <div class="content">
                        <h2>
                            Films
                        </h2>
                        <div class="films">
                            <CardFilms v-for="(film, index) in store.filmsList" :key="index" :film="film" :imagePath="store.imagePath"/>
                        </div>
                        <h2>
                            Series
                        </h2>
                        <div class="series">
                            <AppCardSeries v-for="(series, index) in store.seriesList" :key="index" :series="series" :imagePath="store.imagePath"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
    .content{
        padding: 20px 10px;
        .films, .series{
            display: flex;
            flex-wrap: wrap;
        }
    }
</style>