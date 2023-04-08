import { defineStore } from 'pinia'
import {ref,computed} from 'vue'
//counter是仓库的名字，一个仓库一个index.ts文件,相当于modules
//ref相当于state
//function相当于action
//computed相当于getter
export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)
  const name = ref('Eduardo')
  const doubleCount = computed(() => count.value * 2)
  function increment() {
    count.value++
  }

  return { count, name, doubleCount, increment }
})