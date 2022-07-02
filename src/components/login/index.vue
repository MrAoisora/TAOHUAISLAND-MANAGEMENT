<template>
  <div class="login-layout">
    <div class="login-box">
      <h1>桃花岛</h1>
      <div class="input-box">
        <i class="iconfont icon-rcd-user font-style" style="font-size: 20px;"></i>
        <input type="text" placeholder="USERNAME" class="font-style"/>
      </div>
      <div class="input-box">
        <i class="iconfont icon-rcd-locked font-style" style="font-size: 20px;"></i>
        <input type="passwork" placeholder="PASSWORK" class="font-style"/>
      </div>
      <button type="submit" @click="test()" class="font-style">登录</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'login',
  methods: {
    test () {
      const url = 'http://127.0.0.1:8099/menucreate/queryAllMenu'
      const params = ''
      this.$http.post(url, params).then(resp => {
        console.log('resp=======', resp)
      })
    }
  }
}
</script>

<style scoped lang="scss">
$colorParam: #ffffff;
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.font-style {
  color: $colorParam;
  font-size: 12px;
  font-weight: 600;
}

.login-layout {
  /**
  *注意这个justify-content、 align-items必须要有高度才可以生效
   */
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: url("../../images/18.jpg") center center no-repeat;
  background-size: cover;
  overflow: auto;
  min-height: 500px;
  min-width: 450px;

  .login-box {
    text-align: center;
    background-color: #00000068;
    border-radius: 2%;
    min-height: 350px; // 登录框的最小高度<layout最小高度，所以不会出现超出layout的状况，width同理
    min-width: 300px;

    h1 {
      padding-top: 30px;
      color: $colorParam;
    }

    input {
      margin-top: 35px;
      padding-left: 8px;
      height: 40px;
      width: 200px;
      background: none;
      border: none;
      outline: none;
      border-bottom: 2px solid $colorParam;
    }

    button {
      margin-top: 50px;
      height: 40px;;
      width: 150px;
      border: none;
      border-radius: 20px;
      background-image: linear-gradient(to right, #fad0c4 0%, #ffd1ff 100%);

      &:hover {
        cursor: pointer;
        background-image: linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%);
      }
    }
  }
}
</style>
