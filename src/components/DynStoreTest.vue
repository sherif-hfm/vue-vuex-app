<template>
  <div>
      {{$store.state.DynStore.value}}
  </div>
</template>

<script>
import {DynStore} from '../stores/DynStore.js'
export default {
  beforeCreate() {
      this.$store.registerModule('DynStore',DynStore);
  }
};
</script>

<style>
</style>
