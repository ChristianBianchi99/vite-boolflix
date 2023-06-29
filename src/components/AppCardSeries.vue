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
        },
        traGenres(genres){
            switch(genres){
                case 10759 :
                    return "Action & Adventure";
                    break;
                case 16 :
                    return "Animation";
                    break;
                case 35 :
                    return "Comedy";
                    break;
                case 80 :
                    return "Crime";
                    break;
                case 99 :
                    return "Documentary";
                    break;
                case 18 :
                    return "Drama";
                    break;
                case 10751 :
                    return "Family";
                    break;
                case 10762 :
                    return "Kids";
                    break;
                case 9648 :
                    return "Mystery";
                    break;
                case 10763 :
                    return "News";
                    break;
                case 10764 :
                    return "Reality";
                    break;
                case 10765 :
                    return "Sci-Fi & Fantasy";
                    break;
                case 10766 :
                    return "Soap";
                    break;
                case 10767 :
                    return "Talk";
                    break;
                case 10768 :
                    return "War & Politics";
                    break;
                case 37 :
                    return "Western";
                    break;
            }
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
                        <strong>Genres:</strong><br>
                        <span v-for='(genres, index) in series.genre_ids' :key='index'>{{traGenres(genres)}}, </span>
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