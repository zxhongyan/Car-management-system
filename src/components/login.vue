<template>
  <div class="login">
    <div class="head" >
      <span v-on:click="downloadApp('/HelloWorld')">
      <i class="el-icon-shopping-bag-1"></i>
      <i class="el-icon-apple"></i>
      App下载
      </span>
    </div>
    <div class="wrap">
      <div class="form">
      <p class="msg">{{msg}}</p>
      <!-- 用户名 -->
      <div>
        <el-input
          placeholder="请输入用户名"
          size="large"
          prefix-icon="el-icon-user-solid"
          v-model="userName">
        </el-input>
        <p class='error' v-show="userNameError">用户名错误</p>
      </div>
      <!-- 密码 -->
      <div>
        <el-input
          placeholder="请输入密码"
          show-password
          size="large"
          prefix-icon="el-icon-lock"
          v-model="password"
          minlength="6">
        </el-input>
        <p class='error' v-show="passwordError">密码错误</p>
      </div>
      <!-- 验证码 -->
      <div class="Verify">
        <el-input
          placeholder="请输入验证码 "
          size="large"
          prefix-icon="el-icon-document-checked"
          v-model="verify"
          maxlength="4">
        </el-input>
        <img src="@/assets/yz.png" alt="">
        <p class="error" v-show="verifyError">验证码错误</p>
      </div>
      <div>
          <el-button type="primary" v-on:click="login('/home')">登录</el-button>
      </div>
    </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'ISMP',
      userName: '',
      password: '',
      verify: '',
      userNameError: 0,
      passwordError: 0,
      verifyError: 0


    }
  },methods:{
    downloadApp(path){
       this.$router.push(path)
       console.log('App下载');
    },
    login(path){
      if(this.userName == 'admin' && this.password == '123456' && this.verify.toLowerCase() == 'eamf'){
        this.$router.push(path)
        console.log('登录');
      }
      if(this.userName == 'admin'){
        this.userNameError=0;
        if(this.password == '123456'){
          this.passwordError=0;
          if(this.verify.toLowerCase() != 'eamf'){
            this.verifyError=1;
            console.log('验证码错误');
          }
        }
        else{
          this.passwordError=1;
          console.log('密码错误');
        }
      }
      else{
        this.userNameError=1;
        console.log('用户名错误');
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.login{
    height: 100vh;
    width: 100%;
    background-image: url(../assets/img1.jpg);
    background-size: 100%; 
    background-repeat: no-repeat; 
    min-width: 1080px;
}
.wrap p{
  display: flex;
  justify-content: center;
  align-items: center;
}

.head{
  height: 5%;
  text-align: right;
}
.wrap{
  height: 95%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.wrap .form div{
  margin-top: 5px;
}
.wrap .form{
  width: 300px;
}
.error{
  font-size: 10px;
  color: red;
}
.wrap .form .Verify{
  position: relative;
}

.wrap .form .Verify img{
  width: 80px;
  height: 38px;
  background-color: black;
  position: absolute;
  right: 2px;
  top: 6px;
}

.wrap .el-button{
  height: 37px;
  width: 100%;
}
</style>