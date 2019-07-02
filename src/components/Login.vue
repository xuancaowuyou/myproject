<template>
  <div class="login">
    <img src="@/assets/taobao_logo.png" class="tb_logo"/>
    <mt-field class="borderbtm" :placeholder="accountPlaceholder" v-model="username"></mt-field>
    <mt-field class="borderbtm"  v-show="isUserAccount" placeholder="请输入密码" type="password" v-model="password"></mt-field>
    <mt-field class="borderbtm"  v-show="!isUserAccount" placeholder="校验码" v-model="verifyCode">
      <span class="check_code">获取短信校验码</span>
    </mt-field>
    <div class="registerDiv">
      <span class="fl">免费注册</span>
      <span v-show="forgetpassword" class="fr">忘记密码</span>
    </div>    
    <mt-button type="default" size="large" @click="loginMsgBox">登录</mt-button>
    <mt-button type="primary" size="large"  plain @click="changeLoginMethod">{{accountText}}</mt-button>
  </div>  
</template>
<script>
import {MessageBox} from 'mint-ui'
export default {
  name: 'HelloWorld',
  data () {
    return {
      username:'',
      password:'',      
      verifyCode:'',
      isUserAccount:true,
      forgetpassword:true,
      accountPlaceholder:'手机号/邮箱/会员名',
      accountText:'短信验证登录'
    }
  },
  methods:{
    loginMsgBox(){
      if(!this.username.length){
          MessageBox({
            message: '请输入用户名'
          });
      }else{
        this.$router.push('/mycell')
      }      
    },
    changeLoginMethod(){
      this.isUserAccount = !this.isUserAccount;
      this.forgetpassword = !this.forgetpassword;
      this.accountPlaceholder = this.isUserAccount ? '手机号/邮箱/会员名' : '请输入手机号码'
      this.accountText = this.isUserAccount ? '短信验证登录':'账户密码登录'
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.borderbtm{
  border-top:none;
  border-bottom:1px solid red;
}
.login{
  padding:30px 20px;  
  text-align:center;
}
.tb_logo{
  margin-bottom:30px;
}
.registerDiv{
  padding:10px;
  font-size:14px;
}
.check_code{
  color:#fe5201;
  border-left:1px solid #ccc;
  padding-left:5px;
}
.mint-button{  
  font-size:14px;
  margin:20px 0px;  
  border-radius:41px;
}
.mint-button--default{
  background:-webkit-linear-gradient(left, #fe8a01, #fe5201);
  color:#fff;
}
.mint-button--primary.is-plain{
    border: 1px solid #fe5201;
    background-color: transparent;
    color: #fe5201;
}
.mint-cell-wrapper{
    background-image: linear-gradient(180deg,#fe5201 50%,transparent 50%);
    background-size: 100% 1px;
    background-position:bottom left;
}
</style>
