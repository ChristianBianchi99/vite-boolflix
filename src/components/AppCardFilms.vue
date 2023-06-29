<script>
import CountryFlag from 'vue-country-flag-next';
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
        },
        traGenres(genres){
            switch(genres){
                case 99 :
                    return 'Documentary';
                    break;
                case 28 : 
                    return 'Action';
                    break;
                case 12 : 
                    return 'Adventure';
                    break;
                case 16 : 
                    return 'Animation';
                    break;
                case 35 : 
                    return 'Comedy';
                    break;
                case 80 : 
                    return 'Crime';
                    break;
                case 99 : 
                    return 'Documentary';
                    break;
                case 18 : 
                    return 'Drama';
                    break;
                case 10751 : 
                    return 'Family';
                    break;
                case 14 : 
                    return 'Fantasy';
                    break;
                case 36 : 
                    return 'History';
                    break;
                case 27 : 
                    return 'Horror';
                    break;
                case 10402 : 
                    return 'Music';
                    break;
                case 9648 : 
                    return 'Mystery';
                    break;
                case 10749 : 
                    return 'Romance';
                    break;
                case 878 : 
                    return 'Science Fiction';
                    break;
                case 10770 : 
                    return 'TV Movie';
                    break;
                case 53 : 
                    return 'Thriller';
                    break;
                case 10752 : 
                    return 'War';
                    break;
                case 37 : 
                    return 'Western';
                    break;
            }
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
                        <strong>Genres:</strong><br>
                        <span v-for='(genres, index) in film.genre_ids' :key='index'>{{traGenres(genres)}}, </span>
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