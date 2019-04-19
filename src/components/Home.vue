<template>
  <div class="w3-center">
    <MessageBox/>
    <h2>Home</h2>
    <CounterResult/>
    <CounterControl />
    <hr>
    <button class="w3-button w3-blue" @click="view=true">View DynStoreTest</button>
    <DynStoreTest v-if="view" />
  </div>
</template>

<script>
import CounterControl from './CounterControl.vue'
import CounterResult from './CounterResult.vue'
import MessageBox from './MessageBox.vue'
export default {
  name: 'HelloWorld',
  props: {
  },
  data:function(){
    return {
      Counter:0,
      view:false,
    }
  },
  components:{
    CounterControl,CounterResult,MessageBox,DynStoreTest:()=> import('./DynStoreTest.vue')
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
