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
        <ul>
            <li><img :src="getImage(film.poster_path, imagePath)" :alt="film.title"></li>
            <li><strong>Title:</strong> {{film.title}}</li>
            <li><strong>Original title:</strong> {{film.original_title}}</li>
            <li><strong>Original language:</strong> <country-flag :country="getFlag(film.original_language)" size='normal'/></li>
            <li><strong>Voto:</strong> <i class="fa-solid fa-star" v-for="n in getVote(film.vote_average)"></i><i class="fa-regular fa-star" v-for="n in (5 - getVote(film.vote_average))"></i></li>
        </ul>
    </div>
</template>
<style lang="scss" scoped>
    ul{
        list-style-type: none;
        margin-right: 10px;
        margin-bottom: 20px;
    }
</style>