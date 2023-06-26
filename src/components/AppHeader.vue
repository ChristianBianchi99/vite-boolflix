<script>
import {store} from '../data/store.js';
export default {
    data(){
        return{
            store,
        }
    }
}
</script>
<template lang="">
    <div>
        <div class="background">
            <div class="container">
                <div class="row">
                    <div class="col">
                        <div class="content">
                            <h1 class="logo">
                                Boolflix
                            </h1>
                            <div class="console">
                                <input type="text" v-model="store.searchedSubject" @keyup.enter="$emit('search')">
                                <button @click="$emit('search')">
                                    Search
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
    .background{
        background-color: black;
    }
    .content{
        display: flex;
        justify-content: space-between;
        padding: 20px 10px;
        .logo{
            color: red;
            font-weight: 300;
            text-transform: uppercase;
            font-size: 25px;
        }
        .console{
            display: flex;
            input{
                height: 75%;
                align-self: center;
            }
            button{
                appearance: none;
                height: 75%;
                align-self: center;
                margin-left: 15px;
                background-color: red;
                border: 1px solid rgb(186, 15, 15);
                color: black;
                font-weight: bold;
                padding: 0px 15px;
            }
        }
    }
</style>