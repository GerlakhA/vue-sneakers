<script setup lang="ts">
import { Url } from '@/config/constants'
import type { ISneakers } from '@/config/types'
import { useMutation, useQueryClient } from '@tanstack/vue-query'
import axios from 'axios'
import Button from 'primevue/button'

defineProps<{
  sneaker: ISneakers
}>()

const client = useQueryClient()

const addToCart = async (data: ISneakers) => {
  try {
    const res = await axios.post<ISneakers>(`${Url}/cart`, data)
    console.log(data)
    return res.data
  } catch (error) {
    alert(error)
  }
}

const { mutate } = useMutation({
  mutationKey: ['deleteCartItem'],
  mutationFn: (data: ISneakers) => addToCart(data),
  onSuccess: () => {
    alert('Вы добавили товар в корзину')
    client.invalidateQueries({ queryKey: ['cartItem'] })
  },
})
</script>

<template>
  <div
    class="relative bg-white border-2 border-slate-100 rounded-3xl p-8 cursor-pointer transition hover:-translate-y-2 hover:shadow-xl"
  >
    <!-- <img
      v-if="onClickFavorite"
      :src="!isFavorite ? '/like-1.svg' : '/like-2.svg'"
      alt="Like 1"
      class="absolute top-8 left-8"
      @click="onClickFavorite"
    /> -->

    <img :src="sneaker.imageUrl" alt="Sneaker" />

    <p class="mt-2 text-black">{{ sneaker.title }}</p>

    <div class="flex items-center justify-between mt-5">
      <div class="flex flex-col">
        <span class="text-slate-400">Цена:</span>
        <b class="text-black">{{ sneaker.price }} руб.</b>
      </div>
      <Button
        @click="mutate(sneaker)"
        label="В корзину"
        class="w-[120px] h-[50px] text-white bg-green-500"
      />
    </div>
  </div>
</template>
