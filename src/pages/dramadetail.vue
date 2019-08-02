<template>
    <div>

    </div>
</template>

<script>
import axios from 'axios';

export default {
    data () {
        return {
            
        }
    },
    mounted() {
        axios.get("/dramaapi/getdrama?drama_id=7498")
        .then(res=>{
            console.log(res.data)
        })
    },
}
</script>

<style scoped>

</style>
