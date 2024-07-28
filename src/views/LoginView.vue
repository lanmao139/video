<script setup lang="js">
  import { ref } from "vue";

  const username = ref('');
  const password = ref('');
  const onSubmit = (values) => {
    console.log('submit', values);
  };


</script>



<template>
  <div class="login">
    <div class="login_title">账号密码登录</div>

    <van-form @submit="onSubmit">
      <van-cell-group inset>
        <van-field
          v-model="username"
          name="用户名"
          label="用户名"
          placeholder="用户名"
          :rules="[{ required: true, message: '请填写用户名' }]"
        />
        <van-field
          v-model="password"
          type="password"
          name="密码"
          label="密码"
          placeholder="密码"
          :rules="[{ required: true, message: '请填写密码' }]"
        >
        <template #button>
          <div>忘记密码</div>
        </template>
      </van-field>
      </van-cell-group>
      <div style="margin: 16px;">
        <van-button round block type="primary" native-type="submit">
          登录
        </van-button>
      </div>
    </van-form>    
  </div>
</template>


<style>
.login{
  max-width: 500px;
  margin: 40px auto;
  width: 100%;
}

.login_title{
  text-align: center;
  margin: 50px 0;
}
</style>