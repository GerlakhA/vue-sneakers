<script setup lang="ts">
import { links } from '@/config/constants'
import clsx from 'clsx'

const classFn = (id: number) =>
  clsx(
    'flex items-center gap-2 w-[125px] p-2 hover:bg-neutral-300/40 transition cursor-pointer rounded-lg',
    id === 2 && 'text-slate-400 font-lg',
    id === 3 && 'text-slate-400 font-lg',
  )
</script>

<template>
  <header class="w-full flex justify-between items-center border-b border-b-slate-300 px-10 py-8">
    <div class="flex items-center gap-4">
      <img src="/logo.png" alt="logo" class="w-10" />
      <div class="">
        <h1 class="font-bold text-xl uppercase">Vue Sneakers</h1>
        <p class="text-neutral-400">Магазин лучших кроссовок</p>
      </div>
    </div>

    <div class="flex items-center justify-around w-[650px]">
      <div v-for="link in links" :key="link.id" :class="classFn(link.id)">
        <img :src="link.imgUrl" :alt="link.item" class="w-5 h-5" />
        <span class="font-bold">{{ link.item }}</span>
      </div>
    </div>
  </header>
</template>
