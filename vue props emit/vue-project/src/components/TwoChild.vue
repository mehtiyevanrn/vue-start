<template>
    <button class="btn btn-info" @click="gonder">axios gonder</button>
</template>


<script>

 import axios from 'axios'

export default {
    data() {
        return{
           
        }
    },
    methods:{
        gonder(){
            this.axios.get('https://jsonplaceholder.typicode.com/posts').then(response=>{
                console.log(response)
            })
            
        }
    }
}
</script>