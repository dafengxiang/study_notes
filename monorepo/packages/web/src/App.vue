<script setup>
import { getUser } from "@fx/api";
import Button from "@fx/components"
console.log('getUser: ', getUser);
getUser().then((user) => console.log("user: ", user));
</script>

<template>
    <Button/>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
