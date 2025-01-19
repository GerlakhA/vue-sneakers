import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useDrawerStore = defineStore('drawer', () => {
  const visible = ref(false)

  function openDrawer() {
    visible.value = true
  }

  return { visible, openDrawer }
})
