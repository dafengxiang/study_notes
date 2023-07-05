<template>
  <div class="home">
    <h1>This is an home page</h1>
    <p>计数器：{{ $store.state.count }}</p>
    <p>倍数{{ $store.getters.double }}</p>
    <button @click="$store.commit('add', 1)">累加</button>
  </div>
</template>

<script>
export default {
  mounted() {
    setTimeout(() => {
      this.$store.state.count = 9;
      console.log("this.$store.state.count: ", this.$store.state.count);
    }, 2000);
  },
};
</script>
