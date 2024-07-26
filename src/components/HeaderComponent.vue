<script setup>
import { onMounted, ref, watch } from 'vue'
import { useRouter } from 'vue-router'
import { useScreenStore } from "../stores/index";

const showRight = ref(false)
const openSearch = ref(false)

const openMenu = () => {
  showRight.value = true
}
  

const router = useRouter()
watch(
  () => router.currentRoute.value.path,
  async (toPath) => {
    showRight.value = false
  },
  { immediate: true, deep: true }
);

const str = ref("")

const focus = ref(false)

const handleFocus = (e) => {
  console.log(e)
  focus.value = true
}

const handleBlur = (e) => {
  focus.value = false
}



const showPopover = ref(false);
const actions = [
  { text: '注册/登录', icon: 'manager' },
  { text: '收藏视频', icon: 'like' },
  { text: '已点赞视频', icon: 'good-job' },
  { text: '反馈', icon: 'service' },
  { text: '常见问题（FAQ）', icon: 'comment' },
  { text: '帮助', icon: 'question' },
];
const onSelect = (e)=> {
  console.log(e.text)
}

</script>


<template>
  <div>
    <van-sticky>
      <div class="header">
        <img class="logo" src="../assets/bilibili.webp" alt="">


        <div class="search_pc" v-if="!useScreenStore().screenWidth">
          <input type="search" placeholder="搜索" v-model="str" @focus="handleFocus" @blur="handleBlur" class="search_input">

          <div class="record_pannel" v-if="focus && str">

            <div class="record_item" v-for="(item, index) in 10">搜索记录：{{ item }} <van-icon class="del_icon" name="delete-o" /></div>

          </div>
        </div>

        <div class="right-block">
          <img class="search" @click="openSearch = true" v-if="useScreenStore().screenWidth" src="../assets/icon_seach.png" alt="">

          <van-popover v-model:show="showPopover" placement="bottom-end" v-if="!useScreenStore().screenWidth">
            <van-cell-group style="width: 250px;"  :border="false">
              <van-cell title="注册/登录" size="large" clickable icon="manager" to="login">
              </van-cell>  
              <van-cell title="我的收藏视频" size="large" clickable icon="good-job">
              </van-cell>                   
              <van-cell title="已点赞视频" size="large" value="120" clickable icon="like" >
              </van-cell>       
              <van-cell title="反馈" size="large" clickable icon="service">
              </van-cell>    
              <van-cell title="常见问题（FAQ）" size="large" clickable icon="comment" >
              </van-cell>    
              <van-cell title="帮助" size="large" clickable icon="question" >
              </van-cell>       
            </van-cell-group>            

            <template #reference>
              <van-icon name="bars" size="25"  color="#666"></van-icon>
            </template>
          </van-popover>

          <van-icon name="bars" size="25" v-else  color="#666" @click="openMenu" ></van-icon>
        </div>
      </div>
    </van-sticky>



    <van-overlay :lock-scroll="true" :show="openSearch" @click.stop="openSearch = false" :z-index="2024" :custom-style="{backgroundColor: 'rgba(0, 0, 0, 0.5)'}">

      <div>

        <div class="mask"  @click.stop="()=>{}">
          <img src="../assets/back.png" @click="openSearch = false" class="back" alt="">
          <van-field
            v-model="str"
            clearable
            border
            size="large"
            :autofocus="openSearch"
            placeholder="在YouTuBe中搜索"
          >
          </van-field>
          <img src="../assets/icon_seach.png" class="search search_btn" alt="">
        </div>


        <div class="record" @click.stop="()=>{}">

          <div class="record_item" v-for="(item, index) in 10">搜索记录：{{ item }}  <van-icon class="del_icon" name="delete-o" /></div>

        </div>

      </div>

    </van-overlay>


    <!-- 右侧弹出 -->
    <van-popup
      v-model:show="showRight"
      closeable
      position="right"
      :style="{ width: '320px', height: '100%', }"
    > 



    <div class="logobox">
      <img class="logo" src="../assets/bilibili.webp" alt="">
    </div>

    <van-cell-group  :border="false">

      <van-cell title="注册/登录" size="large" clickable icon="manager" is-link to="login">
      </van-cell>  
      <van-cell title="我的收藏视频" size="large" clickable icon="good-job" is-link>
      </van-cell>     
      <van-cell title="已点赞视频" size="large" value="120" clickable icon="like" is-link>
      </van-cell>       
      <van-cell title="反馈" size="large" clickable icon="service" is-link>
      </van-cell>    
      <van-cell title="常见问题（FAQ）" size="large" clickable icon="comment" is-link>
      </van-cell>    
      <van-cell title="帮助" size="large" clickable icon="question" is-link>
      </van-cell>       

    </van-cell-group>

       

    
  
    </van-popup>
  </div>
</template>


<style scoped>

.header{
  height: 60px;
  padding: 0 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 4px 2px -2px rgba(0,0,0,.1);
  z-index: 10;
  background-color: #fff;
}

.logobox{
  margin: 16px;
  margin-left: 10px;
  margin-bottom: 40px;
}

.logo{
  width: 75px;
  height: auto;
}

.right-block{
  margin-left: auto;
  display: flex;
  align-items: center;
}

.search{
  width: 25px;
  height: 25px;
  margin-right: 20px;
}

.login_btn{
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  color: pink;
  border-radius: 50%;
  border: 1px solid #f2f2f2;
  height: 35px;
  width: 35px;
  background: #f2f2f2;
}

.mask{
  background-color: #fff;
  width: 100%;
  display: flex;
  align-items: center;
  padding: 0 12px;
  box-sizing: border-box;
}


.back{
  width: 24px;
  height: 24px;
}

.search_btn{
  margin-right: 0;
}

.record{
  width: 100%;
}

.record_item{
  width: 100%;
  padding: 10px 12px;
  font-size: 14px;
  color: #333;
  background-color: #fff;
  box-sizing: border-box;
  display: flex;
  align-items: center;
}


.search_pc{
  position: relative;
  box-sizing: border-box;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
}


.search_input{
  width: 50%;
  border: 1px solid #ccc;
  border-radius: 40px;
  padding: 8px 14px;
  font-size: 14px;
}

.search_input::placeholder{
  color: #999;
}



.record_pannel{
  position: absolute;
  left: 50%;
  top: 40px;
  width: 50%;
  transform: translateX(-50%);
  min-height: 100px;
  background-color: #fff;
  z-index: 12;
  box-shadow:  0 4px 32px 0 rgba(0,0,0,0.08), 0 1px 4px 0 rgba(0,0,0,0.04);
  border-radius: 8px;
  overflow: hidden;
}


.del_icon{
  margin-left: auto;
}

</style>