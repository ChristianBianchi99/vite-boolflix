<script>
import { objectGroup } from 'fontawesome';

export default {
    props:{
        film: Object,
    }
}
</script>
<template lang="">
    <div>
        <ul>
            <li><strong>Title:</strong> {{film.title}}</li>
            <li><strong>Original title:</strong> {{film.original_title}}</li>
            <li><strong>Original language:</strong> {{film.original_language}}</li>
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