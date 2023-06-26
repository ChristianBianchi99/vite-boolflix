<script>
import CardFilms from './AppCardFilms.vue';
import CardSeries from './AppCardSeries.vue';
export default {
    components:{
        CardFilms,
        CardSeries,
    }
}
</script>
<template lang="">
    <div>
        Main
        <CardFilms />
        <CardSeries />
    </div>
</template>
<style lang="scss" scoped>
    
</style>