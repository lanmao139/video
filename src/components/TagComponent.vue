<script setup>
  import { ref } from 'vue'

  const tag = ref([
    '推荐',
    '偷感上班',
    '动画',
    '游戏',
    '音乐',
    '电影',
    '流行',
    '旅行',
    '化妆',
    '教育',
    '数学',
    '合辑',
    '直播',
  ])


  const current = ref(0)

</script>


<template>
  <div>
    <div class="wrap">
          <div class="list">
            <div v-for="(item, index) in tag" :key="item" class="tag-item" :class="{active: current == index}">{{ item }}</div>
          </div>    
        </div>      
  </div>
</template>



<style scoped>

.list{
  display: flex;
  width: 100%;
  flex-wrap: nowrap;
  overflow-x: scroll;
  white-space: nowrap;
  overflow-y: hidden;    
  padding: 10px;
  box-sizing: border-box;
}

.wrap{
  position: relative;
  background-color: #fff;
}

.wrap::after{
  content: "";
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 1px;
  transform: scaleY(.5);
  background-color: #f2f2f2;  
}


.list::-webkit-scrollbar{
  display: none;
}

.tag-item{
  font-size: 14px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  padding: 0 20px;
  flex-shrink: 0;
  color: #505050;
  user-select: none;
}

.active{
  background: rgba(0,0,0,0.03);
  border-radius: 999px;
  color: #333;
  font-weight: bold;
}
</style>