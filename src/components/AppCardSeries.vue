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
        <ul>
            <li><img :src="getImage(series.poster_path, imagePath)" :alt="series.name"></li>
            <li><strong>Title:</strong> {{series.name}}</li>
            <li><strong>Original title:</strong> {{series.original_name}}</li>
            <li><strong>Original language:</strong> <country-flag :country="getCountry(series.origin_country[0])" size='normal'/></li>
            <li><strong>Voto:</strong> <i class="fa-solid fa-star" v-for="n in getVote(series.vote_average)"></i><i class="fa-regular fa-star" v-for="n in (5 - getVote(series.vote_average))"></i></li>
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