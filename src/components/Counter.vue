<script setup lang="ts">
import { ref } from 'vue'

const counter = ref(0)
function increment() {
  counter.value++
}

function reset() {
  counter.value = 0
}
</script>

<template>
  <div>
    <span>Count: {{ counter }}</span>
    <button @click="increment" class="p-2 bg-green-500 w-[70px]">+</button>
    <button @click="reset">reset</button>
  </div>
</template>

<style></style>
