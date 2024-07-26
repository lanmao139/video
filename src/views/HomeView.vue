<script setup>
import { onMounted } from 'vue';
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

.card {
  width: 100%;
  background-color: #fff;
  border-radius: 8px;
  overflow: hidden;
}

.thumb {
  position: relative;
  background-color: #f3f3f3;
  border-radius: 4px;
  overflow: hidden;
  cursor: pointer;
}

.thumb::before {
  display: block;
  width: 100%;
  padding-bottom: 56.25%;
  content: "";
}

.wrap {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.thumb_img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}


.video_second {
  background-color: rgba(162, 162, 182, .7);
  bottom: 2px;
  color: #fff;
  font-size: 10px;
  line-height: 10px;
  padding: 2px 3px;
  position: absolute;
  right: 2px;
}


.tag {
  background-color: red;
  top: 2px;
  color: #fff;
  font-size: 14px;
  line-height: 10px;
  padding: 4px 10px;
  position: absolute;
  left: 2px;
}


.title {
  color: #000028;
  font-size: 14px;
  line-height: 1.4;
  margin-top: 0px;
  padding: 0 4px;
  width: 100%;
  box-sizing: border-box;
}

.video_info {
  display: flex;
  align-items: center;
  width: 100%;
  font-size: 14px;
  color: rgba(51, 51, 51, 0.8);
  padding: 4px;
  box-sizing: border-box;
}

.auto_right {
  margin-left: auto;
}

.icon {
  margin: 0 4px;
}
</style>