<script setup lang="ts">
import Header from '@/components/Header.vue'
import Search from '@/components/Search.vue'
import SneakersCard from '@/components/SneakersCard.vue'
import axios from 'axios'
import { onMounted, ref } from 'vue'
import type { ISneakers } from './config/types'

const searchValue = ref('')
const sneakers = ref<ISneakers[]>([])

const fetchData = async () => {
  const { data } = await axios.get<ISneakers[]>('http://localhost:3444/sneakers')
  sneakers.value = data
}

onMounted(async () => {
  try {
    await fetchData()
  } catch (error) {
    alert(error)
  }
})
</script>

<template>
  <div class="bg-white w-4/5 m-auto rounded-xl shadow-xl mt-14">
    <Header />
    <div class="p-10 flex item-center justify-between">
      <h2 class="font-bold text-4xl">Все кроссовки : {{ searchValue }}</h2>
      <Search
        :modelValue="searchValue"
        @update:searchValue="($event) => (searchValue = $event)"
        :search-value="searchValue"
      />
    </div>
    <div class="p-10 grid grid-cols-4 gap-8 overflow-y">
      <SneakersCard v-for="sneaker in sneakers" :key="sneaker.id" :sneaker="sneaker" />
    </div>
  </div>
</template>
