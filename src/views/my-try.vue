<template>
  <button @click="increment">Count is: {{ count }}</button>
</template>

<script setup>
import { ref, onMounted } from 'vue'

// 响应式状态
const count = ref(Math.floor(Math.random()*10+1))
let state = 0
let val_max = 10
let val_min = 0

// 用来修改状态、触发更新的函数
function increment() {
  if (state === 0 && count.value < val_max){
    count.value++
  }else if(state === 1 && count.value > val_min){
    count.value--
  }else if(count.value === val_max){
    state = 1
    count.value--
  }else if(count.value === val_min){
    state = 0
    count.value++
  }
}

// 生命周期钩子
onMounted(() => {
  console.log(`The initial count is ${count.value}.`)
})
</script>


