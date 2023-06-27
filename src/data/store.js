import {reactive} from 'vue';

export const store = reactive({
    api: 'https://api.themoviedb.org/3/search/',
    apiKey: 'api_key=683e52e91baade4210b7478d0ea1c13d',
    searchedSubject: '',
    filmsList: '',
    seriesList: '',
    imagePath: 'https://image.tmdb.org/t/p/w342',
})