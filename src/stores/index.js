import { ref, computed } from 'vue'
import { defineStore } from 'pinia'


export const useScreenStore = defineStore('screenWidth',{
  state: () => {
    if(window.innerWidth > 700) {
      return { data:  false}
    } else {
      return { data:  true}
    }
  },
  
  actions: {
    setScreen(data) {
      this.data = data
    },
  },

  getters: {
    screenWidth: (state)=> state.data
  }
})
