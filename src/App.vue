<script setup lang="ts">
import Header from '@/components/Header.vue'
import Search from '@/components/Search.vue'
import SneakersCard from '@/components/SneakersCard.vue'
import axios from 'axios'
import Drawer from 'primevue/drawer'
import { onMounted, provide, ref } from 'vue'
import type { ISneakers } from './config/types'

const searchValue = ref('')
const visible = ref(false)
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

provide('drawer', visible)
</script>

<template>
  <Drawer
    v-model:visible="visible"
    header="Drawer"
    position="right"
    class="!bg-white !text-black"
  >
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
      ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
      ullamco laboris nisi ut aliquip ex ea commodo consequat.
    </p>
  </Drawer>
  <div class="bg-white w-4/5 m-auto rounded-xl shadow-xl mt-14">
    <Header />
    <div class="p-10 flex item-center justify-between">
      <h2 class="font-bold text-4xl">Все кроссовки</h2>
      <Search
        :modelValue="searchValue"
        @update:searchValue="($event) => (searchValue = $event)"
        :search-value="searchValue"
      />
    </div>
    <div class="grid grid-cols-4 gap-8 overflow-y">
      <SneakersCard v-for="sneaker in sneakers" :key="sneaker.id" :sneaker="sneaker" />
    </div>
  </div>
</template>
