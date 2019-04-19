<template>
  <div>
    <button class="w3-button w3-blue" @click="UpdateCounter(1)">+</button>
    <button class="w3-button w3-green" @click="UpdateCounter(-1)">-</button>
    <br>
    <button class="w3-button w3-blue" @click="AsyncUpdateCounter(1)">Async(+)</button>
    <button class="w3-button w3-green" @click="AsyncUpdateCounter(-1)">Async(1)</button>
    <br>
    <hr>
    <input type="text" v-model="value">
    <hr>
    <button class="w3-button w3-red" @click="ShowMessageBox()">ShowMessageBox</button>
  </div>
</template>

<script>
export default {
  computed: {
    value: {
      get() {
        return this.$store.state.value;
      },
      set(e) {
        this.$store.state.value = e;
      }
    }
  },
  methods: {
    UpdateCounter(e) {
      this.$store.commit("store1/updateCounter", e);
    },
    AsyncUpdateCounter(e) {
      this.$store.dispatch("store1/updateCounter2", e).then(result => {
        console.log(result);
      });
    },
    ShowMessageBox() {
      this.$store.commit("ShowMessageBox", () => {
        console.log('MessageBox Done');
      });
    }
  }
};
</script>

<style>
</style>
