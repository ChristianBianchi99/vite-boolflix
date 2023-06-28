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
                        <h3>
                            Films
                        </h3>
                        <div class="films">
                            <CardFilms class='card' v-for="(film, index) in store.filmsList" :key="index" :film="film" :imagePath="store.imagePath"/>
                        </div>
                        <h3>
                            Series
                        </h3>
                        <div class="series">
                            <AppCardSeries class='card' v-for="(series, index) in store.seriesList" :key="index" :series="series" :imagePath="store.imagePath"/>
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
        h3{
            margin-bottom: 10px;
            color: white;
            text-transform: uppercase;
        }
        .films, .series{
            display: flex;
            overflow-x: auto;
            overflow-y: hidden;
            margin-bottom: 20px;
        }
    }
</style>