<script>
import CountryFlag from 'vue-country-flag-next'
export default {
    props:{
        film: Object,
        imagePath: String,
    },
    components:{
        CountryFlag,
    },
    methods:{
        getFlag(country){
            if(country==="en"){
                return "gb"
            } else {
                return country
            }
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
            <img :src="getImage(film.poster_path, imagePath)" :alt="film.title">
            <div class='details'>                
                <ul>
                    <li>
                        <strong>Title:</strong><br> 
                        {{film.title}}
                    </li>
                    <li>
                        <strong>Original title:</strong><br> 
                        {{film.original_title}}
                    </li>
                    <li>
                        <strong>Original language:</strong><br> 
                        <country-flag :country="getFlag(film.original_language)" size='normal'/>
                    </li>
                    <li>
                        <strong>Voto:</strong><br> 
                        <i class="fa-solid fa-star" v-for="n in getVote(film.vote_average)"></i>
                        <i class="fa-regular fa-star" v-for="n in (5 - getVote(film.vote_average))"></i>
                    </li>
                    <li>
                        <strong>Overview</strong><br>
                        {{film.overview}}
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
@use '../styles/partials/cardsStyles' as*;
</style>