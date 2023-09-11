<script setup>
import { ref } from 'vue'

const count = ref(0)
</script>

<template>
  <button @click="count++">Nombre de clics : {{ count }}</button>
</template>

<style scoped lang="css">
button {
  background-color: #2dabf9;
  border-radius: 3px;
  border: 1px solid #0b0e07;
}
</style>
