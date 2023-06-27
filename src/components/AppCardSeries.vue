<script>
import CountryFlag from 'vue-country-flag-next'
export default {
    props:{
        series: Object,
    },
    components:{
        CountryFlag,
    },
    methods:{
        getCountry(country){
            let lowerCountry= country.toLowerCase()
            return lowerCountry
        }
    }
}
</script>
<template lang="">
    <div>
        <ul>
            <li><strong>Title:</strong> {{series.name}}</li>
            <li><strong>Original title:</strong> {{series.original_name}}</li>
            <li><strong>Original language:</strong> <country-flag :country="getCountry(series.origin_country[0])" size='normal'/></li>
            <li><strong>Voto:</strong> {{series.vote_average}}</li>
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