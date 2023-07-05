<template>
  <div class="home">
    <h1>This is an home page</h1>
    <p>计数器：{{ $store.state.count }}</p>
    <button @click="$store.commit('add', 1)">累加</button>
  </div>
</template>

<script>
export default {};
</script>
