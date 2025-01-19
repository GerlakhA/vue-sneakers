<script setup lang="ts">
import { inject, type Ref } from 'vue'

const visible = inject<Ref<boolean, boolean>>('drawer')
</script>

<template>
  <header
    class="w-full flex justify-between items-center border-b border-b-slate-300 px-10 py-8"
  >
    <div class="flex items-center gap-4">
      <img src="/logo.png" alt="logo" class="w-10" />
      <div class="">
        <h1 class="font-bold text-xl uppercase text-black">Vue Sneakers</h1>
        <p class="text-neutral-400">Магазин лучших кроссовок</p>
      </div>
    </div>

    <div class="flex items-center justify-around w-[650px]">
      <ul class="flex items-center gap-10">
        <li
          @click="visible = true"
          class="flex items-center cursor-pointer gap-3 text-gray-500 hover:text-black"
        >
          <img src="/cart.svg" alt="Cart" />
          <b>1205 руб.</b>
        </li>

        <router-link to="/favorites">
          <li class="flex items-center cursor-pointer gap-3 text-gray-500 hover:text-black">
            <img src="/heart.svg" alt="Cart" />
            <span>Закладки</span>
          </li>
        </router-link>

        <li class="flex items-center cursor-pointer gap-3 text-gray-500 hover:text-black">
          <img src="/profile.svg" alt="Cart" />
          <span>Профиль</span>
        </li>
      </ul>
    </div>
  </header>
</template>
