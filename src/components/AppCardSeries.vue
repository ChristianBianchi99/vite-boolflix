<script>
import CountryFlag from 'vue-country-flag-next'
export default {
    props:{
        series: Object,
        imagePath: String,
    },
    components:{
        CountryFlag,
    },
    methods:{
        getCountry(country){
            let lowerCountry= country.toLowerCase()
            return lowerCountry
        },
        getImage(path, imagePath){
            let fullPath= imagePath + path;
            return fullPath
        },
        getVote(vote){
            let result= Math.ceil(vote / 2)
            return result
        }
    }
}
</script>
<template lang="">
    <div>
        <div class="poster">
            <img :src="getImage(series.poster_path, imagePath)" :alt="series.name">
            <div class='details'>
                <ul>
                    <li>
                        <strong>Title:</strong><br> 
                        {{series.name}}
                    </li>
                    <li>
                        <strong>Original title:</strong><br> 
                        {{series.original_name}}
                    </li>
                    <li>
                        <strong>Original language:</strong><br> 
                        <country-flag :country="getCountry(series.origin_country[0])" size='normal'/>
                    </li>
                    <li>
                        <strong>Voto:</strong><br>
                        <i class="fa-solid fa-star" v-for="n in getVote(series.vote_average)"></i>
                        <i class="fa-regular fa-star" v-for="n in (5 - getVote(series.vote_average))"></i>
                    </li>
                    <li>
                        <strong>Overview</strong><br>
                        {{series.overview}}
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
@use '../styles/partials/cardsStyles' as*;
</style>