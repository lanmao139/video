<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { ref, onMounted, watch } from "vue"
import HeaderComponent from './components/HeaderComponent.vue'
import { useScreenStore } from "./stores/index";


//获取屏幕宽度
const screenWidth = ref(window.innerWidth)
const handleResize = () => {
  screenWidth.value = window.innerWidth
}

onMounted(() => {
  window.addEventListener("resize", handleResize)
})

watch(screenWidth, (newValue, oldValue) => {
  console.log(newValue)
  if (newValue < 700) {
    useScreenStore().setScreen(true)
  } else {
    useScreenStore().setScreen(false)
  }
})


</script>

<template>
  <div class="main">
    <HeaderComponent></HeaderComponent>
    <RouterView />
  </div>
</template>

<style scoped>

.main{
  display: flex;
  flex-direction: column;
  height: 100vh;
}

</style>
