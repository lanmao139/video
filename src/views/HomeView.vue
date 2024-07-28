<script setup>
import { onMounted, ref } from 'vue';
import TagComponent from '../components/TagComponent.vue'
import { useScreenStore } from "../stores/index";
import { useRouter } from 'vue-router';
const router = useRouter()

const goDetail = () => {
  router.push({name: 'detail'})
}

onMounted(()=> {
  console.log(useScreenStore().screenWidth)  
})



const currentPage = ref(1)

</script>

<template>
  <div class="container">
    <TagComponent></TagComponent>
    <div class="list-title">
      <div>近期热播</div>
      <van-icon name="arrow"></van-icon>
    </div>
    <div class="list">
      <van-grid :border="false" style="width: 100%;" :column-num="useScreenStore().screenWidth?2:4">
        <van-grid-item  v-for="item in 7">

          <div class="card" @click="goDetail">

            <div class="thumb">
              <div class="wrap">
                <img class="thumb_img" src="../assets/sssss.webp" alt="">
                <div class="video_second">2:20:39</div>

                <div class="tag">hot</div>
              </div>
            </div>

            <div class="video_info">
              <div>sdnajwa</div>
              <div class="auto_right"></div>
              <van-icon class="icon" size="12" name="eye-o" />
              <div>20k</div>
              <van-icon class="icon" size="12" name="like-o" />
              <div>92</div>
            </div>

            <div class="title van-multi-ellipsis--l2">
              本以为今天太阳打西边出来了，狗蛋对富贵这么好，结局却意想不到啊#兄弟日常 #湖南特产
            </div>

          </div>

        </van-grid-item>
      </van-grid>
    </div>

    <div class="list-title">
      <div>最新上传</div>
      <van-icon name="arrow"></van-icon>
    </div>
    <div class="list">
      <van-grid :border="false" style="width: 100%;" :column-num="useScreenStore().screenWidth?2:4">
        <van-grid-item  v-for="item in 12">

          <div class="card">

            <div class="thumb">
              <div class="wrap">
                <img class="thumb_img" src="../assets/sssss.webp" alt="">
                <div class="video_second">2:20:39</div>

                <div class="tag">hot</div>
              </div>
            </div>

            <div class="video_info">
              <div>sdnajwa</div>
              <div class="auto_right"></div>
              <van-icon class="icon" size="12" name="eye-o" />
              <div>20k</div>
              <van-icon class="icon" size="12" name="like-o" />
              <div>92</div>
            </div>

            <div class="title van-multi-ellipsis--l2">
              本以为今天太阳打西边出来了，狗蛋对富贵这么好，结局却意想不到啊#兄弟日常 #湖南特产
            </div>

          </div>

        </van-grid-item>
      </van-grid>
    </div>
  </div>

</template>


<style scoped>
.container {
  /* background-color: #ededed; */
}

.list {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 0px 10px;
}


.list-title {
  padding: 10px;
  font-weight: bold;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}


</style>