<script setup lang="js">
import Artplayer from "artplayer";
import artplayerPluginAds from 'artplayer-plugin-ads';
import { nextTick, onBeforeUnmount, onMounted, ref } from "vue";
import { useScreenStore } from "../stores/index";

const instance = ref(null)
const artRef = ref(null)

const emit = defineEmits(['get-instance'])
onMounted(() => {
  instance.value = new Artplayer(
    {
      ...{},
      container: artRef.value,
      autoMini: true,
      playbackRate: true,
      setting: true,
      hotkey: true,
      pip: true,
      fullscreen: true,
      fullscreenWeb: true,
      quality: [
        {
          default: true,
          html: 'SD 480P',
          url: 'https://cn-gdfs-ct-01-23.bilivideo.com/upgcxcode/39/88/1626608839/1626608839-1-16.mp4?e=ig8euxZM2rNcNbRVhwdVhwdlhWdVhwdVhoNvNC8BqJIzNbfq9rVEuxTEnE8L5F6VnEsSTx0vkX8fqJeYTj_lta53NCM=&uipk=5&nbs=1&deadline=1721991737&gen=playurlv2&os=bcache&oi=3071155642&trid=000051306952d8f043cbbb3ebd93c809306dh&mid=21640777&platform=html5&og=hw&upsig=4479e5aa3a9bfcf7c8b6aafce8219661&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,mid,platform,og&cdnid=60923&bvc=vod&nettype=0&f=h_0_0&bw=28853&logo=80000000',
        },
        {
          html: 'HD 720P',
          url: 'https://cn-gdfs-ct-01-23.bilivideo.com/upgcxcode/39/88/1626608839/1626608839-1-16.mp4?e=ig8euxZM2rNcNbRVhwdVhwdlhWdVhwdVhoNvNC8BqJIzNbfq9rVEuxTEnE8L5F6VnEsSTx0vkX8fqJeYTj_lta53NCM=&uipk=5&nbs=1&deadline=1721991737&gen=playurlv2&os=bcache&oi=3071155642&trid=000051306952d8f043cbbb3ebd93c809306dh&mid=21640777&platform=html5&og=hw&upsig=4479e5aa3a9bfcf7c8b6aafce8219661&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,mid,platform,og&cdnid=60923&bvc=vod&nettype=0&f=h_0_0&bw=28853&logo=80000000',
        },
      ],
      fastForward: true,
      autoOrientation: true,
      url: 'https://cn-gdfs-ct-01-23.bilivideo.com/upgcxcode/39/88/1626608839/1626608839-1-16.mp4?e=ig8euxZM2rNcNbRVhwdVhwdlhWdVhwdVhoNvNC8BqJIzNbfq9rVEuxTEnE8L5F6VnEsSTx0vkX8fqJeYTj_lta53NCM=&uipk=5&nbs=1&deadline=1721991737&gen=playurlv2&os=bcache&oi=3071155642&trid=000051306952d8f043cbbb3ebd93c809306dh&mid=21640777&platform=html5&og=hw&upsig=4479e5aa3a9bfcf7c8b6aafce8219661&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,mid,platform,og&cdnid=60923&bvc=vod&nettype=0&f=h_0_0&bw=28853&logo=80000000',
      plugins: [
        artplayerPluginAds({
          // html广告，假如是视频广告则忽略该值
          html: '<img src="/assets/sample/poster.jpg">',

          // 视频广告的地址
          video: 'https://artplayer.org/assets/sample/test1.mp4',

          // 广告跳转网址，为空则不跳转
          url: 'https://www.baidu.com',

          // 必须观看的时长，期间不能被跳过，单位为秒
          // 当该值大于或等于totalDuration时，不能提前关闭广告
          // 当该值等于或小于0时，则随时都可以关闭广告
          playDuration: 5,

          // 广告总时长，单位为秒
          totalDuration: 10,

          // 多语言支持
          i18n: {
            close: '关闭广告',
            countdown: '%s秒',
            detail: '查看详情',
            canBeClosed: '%s秒后可关闭广告',
          },
        }),
      ],
    },
    function onReady(art) {
      this.play()
    },
  );


  nextTick(() => {
    emit('get-instance', instance.value);
  })

})


onBeforeUnmount(() => {
  if (instance && instance.destroy) {
    instance.destroy(false);
  }
})
</script>



<template>
  <div class="container">
    <div ref="artRef" class="artplayer-app"></div>
    <div class="title">
      京剧《武家坡》唱段“提起当年泪不干”（高清）耿其昌饰薛平贵
    </div>
    <div class="video_info">987次观看 · 2天前</div>

    <div class="layout">

      <div class="userinfo" :class="{ miniscreen: !useScreenStore().screenWidth }">
        <img class="avatar" src="../assets/user_04.jpg" alt="">
        <div class="name">
          <div>二次元洛杉矶东方</div>
          <div class="desc">
            <div class="fans">2019粉丝</div>
            <div class="fans">20视频</div>
          </div>
        </div>

        <div class="addfollow" :class="{leftauto: useScreenStore().screenWidth}">
          <div class="follow_btn">关注</div>
        </div>
      </div>

      <div class="btn_group" :class="{ fullscreen: !useScreenStore().screenWidth }">

        <div class="btn_item">
          <van-icon size="20" name="good-job-o" />
          <div class="btn_text">9201</div>
        </div>

        <div class="btn_item">
          <van-icon size="20" style="transform: rotate(180deg);" name="good-job-o" />
          <div class="btn_text">234</div>
        </div>

        <div class="btn_item">
          <van-icon size="20" name="like-o" />
          <div class="btn_text">收藏</div>
        </div>

        <div class="btn_item">
          <van-icon size="20" name="flag-o" />
          <div class="btn_text">举报</div>
        </div>

        <div class="btn_item">
          <van-icon size="20" name="share-o" />
          <div class="btn_text">分享</div>
        </div>

      </div>

    </div>

  </div>
</template>




<style scoped>
.container {
  padding-top: 10px;
}

.artplayer-app {
  aspect-ratio: 16/9;
}

.title {
  font-size: 16px;
  line-height: 1.4;
  font-weight: 500;
  padding: 12px;
  padding-bottom: 0;
}

.userinfo {
  display: flex;
  align-items: center;
  padding: 4px 12px;
  width: 100%;
  box-sizing: border-box;
}

.avatar {
  width: 54px;
  height: 54px;
  border-radius: 50%;
  margin-right: 8px;
}


.name {
  color: #18191c;
  font-size: 14px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.desc {
  display: flex;
  align-items: center;
}

.video_info {
  font-size: 12px;
  color: #666;
  padding: 0 12px;
}

.fans {
  font-size: 12px;
  color: #999;
  margin-right: 4px;
}


.follow_btn {
  padding: 4px 20px;
  background-color: #ededed;
  color: #666;
  border-radius: 4px;
  font-size: 12px;
  cursor: pointer;
}

.addfollow {
  margin-left: 40px;
}

.btn_group {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 4px 12px;
  margin-top: 10px;
  margin-left: auto;
  width: 100%;
  box-sizing: border-box;
}

.btn_item {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.btn_text {
  font-size: 14px;
  color: #666;
  margin-top: 4px;
}


.layout {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  margin: 10px 0;
}


.miniscreen {
  flex: 1;
}



.fullscreen {
  width: 500px;
}

.leftauto{
  margin-left: auto;
}
</style>