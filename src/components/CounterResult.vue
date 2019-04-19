<template>
    <div>
        <span>Counter:{{$store.state.store1.Counter}}</span><br>
        <span>Double Counter:{{myDoubleCounter}}</span><br>
        <span>Clicks Counter:{{Clicks}}</span><br>
        <span>Value:{{this.$store.state.value}}</span><br>
    </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
    props:{
    //Counter: Number
    },
    computed:{
       ...mapGetters({myDoubleCounter:'store1/DoubleCounter'}),
       Clicks:function(){
           return this.myDoubleCounter + ' Clicks';
       }
}
}
</script>

<style>

</style>
