<template>
  <div>
    <div id="id01" class="w3-modal" style="display:block" v-if="$store.state.showMsgShowStatus">
      <div class="w3-modal-content">
        <div class="w3-container">
          <span
            @click="$store.commit('MessageBoxDone')"
            class="w3-button w3-display-topright"
          >&times;</span>
          <p>Some text in the Modal..</p>
          <p>Some text in the Modal..</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>
