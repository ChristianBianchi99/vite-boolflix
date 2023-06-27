<script>
import CountryFlag from 'vue-country-flag-next'
export default {
    props:{
        film: Object,
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
        }
    }
}
</script>
<template lang="">
    <div>
        <ul>
            <li><strong>Title:</strong> {{film.title}}</li>
            <li><strong>Original title:</strong> {{film.original_title}}</li>
            <li><strong>Original language:</strong> <country-flag :country="getFlag(film.original_language)" size='normal'/></li>
            <li><strong>Voto:</strong> {{film.vote_average}}</li>
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